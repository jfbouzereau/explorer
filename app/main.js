var app = require("app");
var BrowserWindow = require("browser-window");
var ipc = require("ipc");
var fs = require("fs");
var clipboard = require("clipboard");


wreader = null;
wexplorer = null;

data = [];

app.on("ready", function() {
	wreader = new BrowserWindow({width:600,height:300});
	wreader.loadUrl("file://"+__dirname+"/reader.html");
})

ipc.on("filename", function(event,filename) {
	read_file(filename);
});

ipc.on("clipboard",function() {
	read_clipboard();
});

ipc.on("window", function(event,options)  {
	var www = new BrowserWindow({title:options.title});
	www.loadUrl("file://"+__dirname+"/window.html");
	www.webContents.on("did-finish-load", function() {
		www.webContents.send("content", options.source);
	});
});

ipc.on("help", function(event, name) {
	var whelp = new BrowserWindow({});
	whelp.loadUrl("file://"+__dirname+"/help/"+name+".html");
});

//****************************************************************************

function read_file(filename) {

var magic = new Buffer(5);
var fd = fs.openSync(filename,"r");
fs.readSync(fd,magic,0,magic.length,0);
fs.closeSync(fd);

if(check(magic,'P','K',0x03,0x04))
	read_xlsx_file(filename,finish);

else if(check(magic,'m','y','s','q','l'))
	read_mysql_file(filename,finish);

else if(check(magic,'h','t','t','p'))
	read_http_file(filename,finish);

else if(check(magic,'['))
	read_json_file(filename,finish);

else
	read_tabular_file(filename,finish);

	function finish() 
	{
	if(data.length==0) return;
	wreader.close();
	explore();
	}
}

//****************************************************************************

function check(a) {

for(var i=1;i<arguments.length;i++)
	{
	var x = typeof(arguments[i])=="string" ? arguments[i].charCodeAt(0):arguments[i];
	if(a[i-1]!=x) return false;
	}

return true;
}

//****************************************************************************

function read_xlsx_file(filename, cb) {


var zlib = require("zlib");

try	{
	var fd = fs.openSync(filename,"r");

	var header = new Buffer(30);
	var temp = new Buffer(1000);
	var offset = 0;
	var buffer = null;
	var strings = [];

	while(true)
		{
		fs.readSync(fd,header,0,30,offset);
		offset += 30;

		var signature = header.readUInt32LE(0);
		if(signature!= 0x04034B50) break;

		var lname = header.readUInt16LE(26);
		var lextra = header.readUInt16LE(28);
		var lcompress = header.readUInt32LE(18);
		var lucompress = header.readUInt32LE(22);

		fs.readSync(fd,temp,0,lname+lextra,offset);
		offset += lname+lextra;

		fname = temp.toString("utf8",0,lname);

		if(fname=="xl/sharedStrings.xml") 
			read_strings();
		else if(fname=="xl/worksheets/sheet1.xml") 
			read_sheet();
		else
			offset += lcompress;
		}

	check_data_type(data);

	}
catch(e)
	{
	console.log(e);
	}

try	{
	fs.closeSync(fd);
	}
catch(e)
	{
	console.log(e);
	}
	
	cb();

	function read_strings()
	{
	buffer = new Buffer(lcompress);
	fs.readSync(fd,buffer,0,lcompress,offset);
	offset += lcompress;

	var b = zlib.inflateRawSync(buffer);
	b = b.toString("utf8",0,b.length);

	var result;
	var pattern = new RegExp("<si><t>([^<]*)</t></si>","g");
	while((result=pattern.exec(b))!=null)
		strings.push(result[1]);
	}

	function read_sheet()
	{
	buffer = new Buffer(lcompress);
	fs.readSync(fd,buffer,0,lcompress,offset);
	offset += lcompress;

	var b = zlib.inflateRawSync(buffer);
	b = b.toString("utf8",0,b.length);

	var value;
	var pattern = new RegExp("<v>([^<]*)</v>");

	var k = 0;
	while(true)
		{
		var i = b.indexOf("<row",k);
		if(i<0) break;
		var j = b.indexOf("</row",i);
		if(j<0) break;
		var c = b.substring(i,j);	
		var row = [];
		var kk = 0;
		while(true)
			{
			var ii = c.indexOf("<c",kk);
			if(ii<0) break;
			var jj = c.indexOf("</c",ii);
			if(jj<0) break;
			var d = c.substring(ii,jj);
			var m = d.match("<v>([^<]*)</v>");
			value = m ? m[1]:"";
			if(d.indexOf('t="s"')>=0)
				value = strings[parseInt(value)];
			row.push(value);
			kk = jj+4;
			}
		data.push(row);
		k = j+6;	
		}
	}

}

//****************************************************************************

function read_http_file(filename,cb) {

var req = null;
var content = "";

try	{
	var text = fs.readFileSync(filename,"utf8");
	var obj = require("url").parse(text);

	if(obj.protocol=="http:")
		req = require("http").request(obj, receive);
	else if(obj.protocol=="https:")
		req = require("https").request(obj,receive);
	else
		cb();

	if(req)
		{
		req.on("error", function(err) {
			console.log("REQ ERR "+err);
			cb();
		});
		req.end();
		}

	}
catch(e)
	{
	console.log(e);
	}

	function receive(res) {
		res.on("data", function(chunk) {	
			content += chunk;
		});
		res.on("end", function() {
			read_tabular_content(content);
			cb();
		});
	}

}

//****************************************************************************

function read_mysql_file(filename,cb) {

var mysql = require("mysql");

try	{
	var content = fs.readFileSync(filename,"utf8");
	lines = content.split("\n");
	if(lines.length<2)
		lines = content.split("\r");

	var params = {};
	var m;
	for(var i=0;i<lines.length;i++)
		{
		if(m=lines[i].match(/host:(.*)/))
			params.host = m[1];
		if(m=lines[i].match(/user:(.*)/))
			params.user = m[1];
		if(m=lines[i].match(/password:(.*)/))
			params.password = m[1];
		if(m=lines[i].match(/database:(.*)/))
			params.database = m[1];
		if(m=lines[i].match(/query:(.*)/))
			params.query = m[1];
		}

	var cnx = mysql.createConnection(params);
	cnx.query(params.query, function(err,rows,fields) {

		if(err) { cnx.end(); return; }
	
		var record = [];
		for(var i=0;i<fields.length;i++)
			record.push(fields[i].name);
		data.push(record);
		
		for(var i=0;i<rows.length;i++)
			{
			record = [];
			for(var j=0;j<fields.length;j++)
				record.push(rows[i][fields[j].name]);
			data.push(record);
			}

		cnx.end();

		cb();
		});
	}
catch(e)
	{
	console.log(e);
	}

}

//****************************************************************************

function read_json_file(filename,cb) {
try	{
	var content = fs.readFileSync(filename,"utf8");
	var o = JSON.parse(content);	

	if(!(o instanceof Array)) return;

	// get list of fields

	var nr = o.length;

	var nf = 0;
	var done = {};
	var fields = [];

	for(var i=0;i<nr;i++)
		{	
		var r = o[i];
		if(r==null) continue;
		if(typeof(r)!="object") continue;
		for(var key in r)
			{
			if(!(key in done))
				{
				fields[nf++] = key;
				done[key]=":n";
				}		
			if(typeof(r[key])!="number")
				done[key] = "";
			}
		}

	var line = [];
	for(var k=0;k<nf;k++)
		line.push(fields[k]+done[fields[k]]);
	data.push(line);
		
	for(var i=0;i<nr;i++)
		{		
		var line = [];
		var r = o[i];
		if(r==null) continue;				
		if(typeof(r)!="object") continue;
		for(var k=0;k<nf;k++)
			{
			if(!(fields[k] in r))
				line.push("");
			else 
				line.push(""+r[fields[k]]);		
			}
		data.push(line);
		}

	cb();
	}
catch(e)
	{	
	console.log(e);
	}

}

//****************************************************************************

function read_tabular_file(filename,cb) {

try	 {
	var content = fs.readFileSync(filename,"utf8");

	read_tabular_content(content);
	}
catch(e)
	{
	console.log(e);
	}

	cb();
}

//****************************************************************************

function read_tabular_content(content)
{
	lines = content.split("\n");
	if(lines.length<2)  {
		lines = content.split("\r");	
		if(lines.length<2) return;
		}

	var sep = guess_field_separator(lines[0]);	
	if(sep==null) return;
	
	var nv = lines[0].split(sep).length;

	for(var i=0;i<lines.length;i++)
		{
		var record = lines[i].split(sep);
		if(record.length!=nv) continue;
		data.push(record);
		}

	check_data_type(data);	
}

//****************************************************************************

function check_data_type(data)
{
if(data.length<1) return;

var nv = data[0].length;
var isnum = new Array(nv);
for(var j=0;j<nv;j++)
	isnum[j] = true;

for(var i=1;i<data.length;i++)
	{
	for(var j=0;j<nv;j++)
		if(isnum[j])
			if(isNaN(parseFloat(data[i][j])))
				isnum[j] = false;
	}

for(var j=0;j<nv;j++)
	{
	var m = unquote(data[0][j]).replace(":n","").replace("/n","");
	data[0][j] = isnum[j] ? m+":n" : m;
	}
}

//****************************************************************************

function unquote(s)
{
var m = s.match(/^"(.*)"$/);
return m==null ? s : m[1];
}

//****************************************************************************

function read_clipboard() {
	var content = clipboard.readText() || "";
	content = content.split("\n");
	if(content.length<2) return;

	var sep = guess_field_separator(content[0]);
	if(sep==null) return;

	data = [];
	for(var i=0;i<content.length;i++)
		data.push(content[i].split(sep));

	wreader.close();
	explore();
}

//****************************************************************************

function guess_field_separator(line) {
	if(line.split("\t").length>2) return "\t";
	if(line.split(";").length>2) return ";";
	if(line.split("!").length>2) return "!";
	if(line.split(",").length>2) return ",";

	if(line.split("\t").length>1) return "\t";
	if(line.split(";").length>1) return ";";
	if(line.split("!").length>1) return "!";
	if(line.split(",").length>1) return ",";

	line = line.replace(/  */g,"\u0001");
	if(line.split("\u0001").length>1) return "\u0001";

	return null;
}

//****************************************************************************

function explore() {
	wexplorer = new BrowserWindow({width:800,height:800});
	wexplorer.loadUrl("file://"+__dirname+"/explorer.html");
	wexplorer.on("closed", function() {
		wexplorer = null;
		});
	wexplorer.webContents.on("did-finish-load", function() {
		wexplorer.webContents.send("start","");
		});
}

//****************************************************************************

var app = require("app");
var BrowserWindow = require("browser-window");
var ipc = require("ipc");
var fs = require("fs");
var clipboard = require("clipboard");


wreader = null;
wexplorer = null;

data = [];

//****************************************************************************

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

var content = fs.readFileSync(filename);

process_content(content);

}

//****************************************************************************

function process_content(content)
{

if(check(content,'P','K',0x03,0x04))
	process_xlsx_content(content);

else if(check(content,'m','y','s','q','l'))
	process_mysql_content(content);

else if(check(content,'h','t','t','p'))
	process_http_content(content);

else if(check(content,'['))
	process_json_content(content);

else if(check(content,0x1F,0x8B))
	process_gzip_content(content);

else if(check(content,'R','D','X','2'))
	process_xdr_content(content);

else
	process_tabular_content(content);

}

//****************************************************************************

function check(header)
{

var n = arguments.length-1;

if(typeof(header)=="string")
	{
	var h = new Buffer(n);
	for(var i=0;i<n;i++)
		h = header.charCodeAt(i);	
	header = h;
	}

for(var i=0;i<n;i++)
	{
	var a = typeof(arguments[i+1])=="string" ?  arguments[i+1].charCodeAt(0) : arguments[i+1];
	if(a!=header[i]) return false;
	}

return true;
}

//****************************************************************************

function process_xlsx_content(content)
{

var zlib = require("zlib");

try	{
	var header = new Buffer(30);
	var temp = new Buffer(1000);
	var offset = 0;
	var buffer = null;
	var strings = [];

	while(true)
		{
		header = content.slice(offset,offset+30);
		offset += 30;

		var signature = header.readUInt32LE(0);
		if(signature!= 0x04034B50) break;

		var lname = header.readUInt16LE(26);
		var lextra = header.readUInt16LE(28);
		var lcompress = header.readUInt32LE(18);
		var lucompress = header.readUInt32LE(22);

		temp = content.slice(offset,offset+lname+lextra);
		offset += lname+lextra;

		fname = temp.toString("utf8",0,lname);

		if(fname=="xl/sharedStrings.xml") 
			read_strings();
		else if(fname=="xl/worksheets/sheet1.xml") 
			read_sheet();
		else
			offset += lcompress;
		}

	check_data_type();

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
	
	
	function read_strings()
	{
	buffer = content.slice(offset,offset+lcompress);
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
	buffer = content.slice(offset,offset+lcompress);
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

function process_http_content(content)
{

content = content+"";

var remote = new Buffer(0);

var req = null;

try	{
	var obj = require("url").parse(content);

	if(obj.protocol=="http:")
		req = require("http").request(obj, receive);
	else if(obj.protocol=="https:")
		req = require("https").request(obj,receive);

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
			remote = Buffer.concat([remote,chunk]);
		});
		res.on("end", function() {
			process_content(remote);
		});
	}

}

//****************************************************************************

function process_mysql_content(content)
{

content = content+"";

var mysql = require("mysql");

try	{
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
		});


	finish();	
	}
catch(e)
	{
	console.log(e);
	}

}

//****************************************************************************

function process_gzip_content(content) 
{
console.log("process gzip content");

try {			
	var zlib = require("zlib");
	var uncompressed = zlib.gunzipSync(content);
	process_content(uncompressed);
	}
catch(e)
	{
	console.log(e);
	}

}

//****************************************************************************

function process_json_content(content)
{

content = content+"";

try {
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

	finish();
	}
catch(e)
	{	
	console.log(e);
	}

}

//****************************************************************************

function process_tabular_content(content)
{
console.log("process tabular");

	content = content+"";

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

	check_data_type();
}

//****************************************************************************

function process_xdr_content(content)
{
console.log("read xdr "+content.length);

var offset = 19;
var indent = "";
var seq = 0;

var id = 0;
var objs = {};
var attrs = {};

var obj = read_object(content,offset);

var main = null;
for(var x in obj)
	main = obj[x];
if(main==null) 
	{
	console.log("NO MAIN OBJECT");
	return;
	}

var mainid = get_id(main);
if(!(main instanceof Array) )
	{
	console.log("MAIN OBJECT NOT AN ARRAY");
	return;
	}

var mainattr = attrs[mainid];
if((mainattr==null)||(typeof(mainattr)!="object"))
	{
	console.log("NO ATTRIBUTES FOR MAIN OBJECT");
	return;
	}

var names = mainattr["names"];

var rownames = mainattr["row.names"];

var nfield = main.length;

if((names==null)||(names.length!=nfield))
	{
	names = new Array(nfield);
	for(var i=0;i<nfield;i++)
		names[i] = "ROW"+(i+1);
	}

var nrecord = -1;
for(var j=0;j<nfield;j++)
	{		
	var sub = main[j];
	var subid = get_id(sub);
	if(!(sub instanceof Array))
		{		
		console.log("  ITEM NOT AN ARRAY");
		return;
		}
	if(nrecord<0)
		nrecord = sub.length;
	else if(sub.length!=nrecord)
		{
		console.log("  VECTORS OF DIFFERENT LENGTH");
		return;
		}

	// if factor with levels
	if(attrs[subid])
		if(attrs[subid].levels)
			{
			for(var i=0;i<nrecord;i++)
				sub[i] = attrs[subid].levels[sub[i]-1];	
			}

	if(typeof(sub[0])=="number")
		names[j] = names[j]+":n";
	}


if((rownames==null)||(rownames.length!=nrecord))
	{
	rownames = new Array(nrecord);
	for(var i=0;i<nrecord;i++)
		rownames[i] = "ROW"+(i+1);
	}

var record = [];
record.push("ROW.NAME");
for(var j=0;j<nfield;j++)
	record.push(names[j]);
data.push(record);

for(var i=0;i<nrecord;i++)
	{
	record = [];
	record.push(rownames[i]+"");
	for(var j=0;j<nfield;j++)
		record.push(main[j][i]+"");
	data.push(record);
	}

finish();
return;
	
	function read_object()
	{
	indent += "    ";
	var type = content.readInt32BE(offset) & 0x0FF;
	var flag = content.readInt32BE(offset) & 0x300;
	offset += 4;
	//console.log(indent+"type = "+type+" attr="+flag);
	var obj = null;
	var attr = null;
	switch(type)
		{
		case 1:	// symbol
			var symtype = content.readInt32BE(offset) & 0xFF;
			offset += 4;
			var len = content.readInt32BE(offset);
			offset += 4;
			obj = content.toString("utf8",offset,offset+len);
			offset += len;	
			break;

		case 2: // dotted pair	
			var obj = {};
			while(true)
				{
				var obj1 = read_object();
				var obj2 = read_object();
				obj[obj1] = obj2;
				type = content.readInt32BE(offset) & 0xFF;
				offset += 4;
				if(type==0xFE) break;
				}			
			break;
	
		case 6: // formula	
			var obj = [];
			if(flag!=0)
				obj._attr = read_object();
			flag = 0;
			while(true)
				{
				var item = read_object();
				var op = content.readInt32BE(offset) &0xFF;
				offset += 4;
				if(op==0xFE) break;
				}
			break;
	
		case 9: // string
			var len = content.readInt32BE(offset);
			offset += 4;
			obj = content.toString("utf8",offset,offset+len);
			offset += len;
			break;

		case 10:	// logical vector
			break;

		case 13: // integer vector
			var n = content.readInt32BE(offset);
			offset+= 4;
			obj = new Array(n);
			for(var i=0;i<n;i++)
				{
				obj[i] = content.readInt32BE(offset);
				offset += 4;
				}
			break;

		case 14: // real vector
			var n = content.readInt32BE(offset);
			offset += 4;
			obj = new Array(n);
			for(var i=0;i<n;i++)
				{		
				obj[i] = content.readDoubleBE(offset);
				offset += 8;
				}	
			break;

		case 16: //string vector
			var n = content.readInt32BE(offset);
			offset += 4;
			obj = new Array(n);
			for(var i=0;i<n;i++)
				{		
				offset += 4;	
				len = content.readInt32BE(offset) ;
				offset += 4;		
				obj[i] = content.toString("utf8",offset,offset+len);
				offset += len;
				}
			//console.log(indent+"STRING VEC "+JSON.stringify(obj));
			break;

		case 19:
			var n = content.readInt32BE(offset);
			offset += 4;
			obj = new Array(n);
			for(var i=0;i<n;i++)
				{
				//console.log(indent+"READING OBJ "+(i+1)+" / "+n);
				obj[i] = read_object();
				}
			break;

		default:
			obj = "*"+type+"*"+flag+"*";
			if(obj=="*255*512*") obj = "levels";
			else if(obj=="*255*768*") obj = "class";
			else obj+=""+(seq++);
			flag = 0;
			break;
		}

		if(flag!=0)
			var attr = read_object();
		id++;
		objs[id] = obj;
		if(attr) attrs[id] = attr;
		indent = indent.substring(4);
		return obj;
	}


	function get_id(obj) 
	{
	for(var x in objs)
		if(objs[x]===obj)
			return x;
	return null;
	}

}

//****************************************************************************

function read_clipboard() {
	var content = clipboard.readText() || "";
	process_content(content);
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

function check_data_type()
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

wreader.close();
explore();
}

//****************************************************************************

function unquote(s)
{
var m = s.match(/^"(.*)"$/);
return m==null ? s : m[1];
}

//****************************************************************************

function finish()
{
if(data.length<2) return;
wreader.close();
explore();
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

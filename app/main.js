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

//****************************************************************************

function read_file(filename) {

var magic = new Buffer(4);
var fd = fs.openSync(filename,"r");
fs.readSync(fd,magic,0,4,0);
if((magic[0]==0x50)&&(magic[1]==0x4B)&&(magic[2]==0x03)&&(magic[3]==0x04))
	read_xlsx_file(fd,filename);

if(data.length==0)
	read_tabular_file(filename);

if(data.length!=0)
	{
	wreader.close();
	explore();
	}
}

//****************************************************************************

function read_xlsx_file(fd,filename) {

var zlib = require("zlib");

try	{
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

	}
catch(e)
	{
	console.log(e);
	}
fs.closeSync(fd);

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

	var result;
	var pattern = new RegExp("<v>([^<]*)</v>","g");

	var k = 0;
	while(true)
		{
		var i = b.indexOf("<row",k);
		if(i<0) break;
		var j = b.indexOf("</row",i);
		if(j<0) break;
		var c = b.substring(i,j);	
		var row = [];
		while((result=pattern.exec(c))!=null)
			{
			var ind = Number(result[1]);
			row.push(strings[ind]);
			}
		data.push(row);
		k = j+6;	
		}
	}

}

//****************************************************************************

function read_tabular_file(filename) {

try	 {
	var content = fs.readFileSync(filename,"utf8");

	lines = content.split("\n");
	if(lines.length<2)  {
		lines = content.split("\r");	
		if(lines.length<2) return;
		}

	var sep = guess_field_separator(lines[0]);
	if(sep==null) return;

	data = [];
	for(var i=0;i<lines.length;i++)
		data.push(lines[i].split(sep));
	}
catch(e)
	{
	console.log(e);
	}
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
	if(line.split(":").length>2) return ":";
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

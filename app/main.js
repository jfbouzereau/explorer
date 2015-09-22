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
try	{	
	console.log("reading...");
	var content = fs.readFileSync(filename,"utf8");

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

var app = require("app");
var BrowserWindow = require("browser-window");
var ipc = require("ipc");
var fs = require("fs");
var clipboard = require("clipboard");


wreader = null;
wexplorer = null;

if(typeof(console)=="undefined")
	var console = {log:function(){}};

//****************************************************************************


app.on("ready", function() {
	wreader = new BrowserWindow({width:600,height:300});
	wreader.loadUrl("file://"+__dirname+"/reader.html");
})

ipc.on("reader", function() {
	console.log("received reader message");
	// reopen reader window
	wreader = new BrowserWindow({width:600,height:300});
	wreader.loadUrl("file://"+__dirname+"/reader.html");
});

ipc.on("filename", function(event,filename) {
	wreader.close();
	wreader = null;
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

function read_clipboard() {

var content = clipboard.readText() || "";
console.log("clipboard content "+content.length);

wexplorer = new BrowserWindow({width:800,height:800});
wexplorer.loadUrl("file://"+__dirname+"/explorer.html");

wexplorer.on("closed", function() {
	console.log("explorer closed");
	wexplorer = null;
	});

wexplorer.webContents.on("did-finish-load", function() {
	console.log("did-finish-load");
	wexplorer.webContents.send("clipboard",content);
	console.log("clipboard sent");
	});	
}

//****************************************************************************

function read_file(filename)
{

wexplorer = new BrowserWindow({width:800,height:800});
wexplorer.loadUrl("file://"+__dirname+"/explorer.html");

wexplorer.on("closed", function() {
	console.log("explorer closed");
	wexplorer = null;
	});

wexplorer.webContents.on("did-finish-load", function() {
	console.log("did-finish-load");
	wexplorer.webContents.send("start",filename);
	console.log("start sent");
	});
}

//****************************************************************************

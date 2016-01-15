var app = require("app");
var BrowserWindow = require("browser-window");
var ipc = require("ipc");
var fs = require("fs");
var clipboard = require("clipboard");


wreader = null;
wexplorer = null;


//****************************************************************************

app.on("ready", function() {
	if(process.argv.length>2)
		{
		read_file(process.argv[2]);
		}
	else
		{
		wreader = new BrowserWindow({width:600,height:300});
		wreader.loadUrl("file://"+__dirname+"/reader.html");
		}
})

ipc.on("reader", function() {
	// reopen reader window
	wreader = new BrowserWindow({width:600,height:300});
	wreader.loadUrl("file://"+__dirname+"/reader.html");
});

ipc.on("title", function(event,title) {
	// if title message is sent from explorer, reader is no longer needed
	if(wreader)
		wreader.close();
	wreader = null;
	if(wexplorer)
		wexplorer.setTitle(title);
});

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

ipc.on("exit", function() {
	process.exit(0);
});

//****************************************************************************

function read_clipboard() {

var content = clipboard.readText() || "";

wexplorer = new BrowserWindow({width:800,height:800,title:"clipboard"});
wexplorer.loadUrl("file://"+__dirname+"/explorer.html");

wexplorer.on("closed", function() {
	wexplorer = null;
	});

wexplorer.webContents.on("did-finish-load", function() {
	wexplorer.webContents.send("clipboard",content);
	});	
}

//****************************************************************************

function read_file(filename)
{

wexplorer = new BrowserWindow({width:800,height:800});
wexplorer.loadUrl("file://"+__dirname+"/explorer.html");

wexplorer.on("closed", function() {
	wexplorer = null;
	});

wexplorer.webContents.on("did-finish-load", function() {
	wexplorer.webContents.send("start",filename);
	});
}

//****************************************************************************

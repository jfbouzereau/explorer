var app = require("electron").app;
var BrowserWindow = require("electron").BrowserWindow;
var ipc = require("electron").ipcMain;
var clipboard = require("electron").clipboard;

var fs = require("fs");

var ready = false;

var locale = null;

var filepath = null;

wexplorer = null;


//****************************************************************************

app.on("ready", function() {
	locale = app.getLocale();
	try {
		var stat = fs.statSync(__dirname+"/help/"+locale);
		}
	catch(err)
		{
		locale = "en";
		}

	if(process.argv.length>2)
		{
		read_file(process.argv[2]);
		}
	else if(filepath)
		{
		read_file(filepath);
		}
	else
		{
		var wreader = new BrowserWindow({title:"Explorer",width:600,height:310});
		wreader.loadURL("file://"+__dirname+"/reader.html");
		}

	ready = true;
})

app.on("open-file", function(event,path) {
	if(ready)
		read_file(path);
	else
		filepath = path;
});


ipc.on("reader", function(event) {
	// reopen reader window
	var wreader = new BrowserWindow({title:"Explorer",width:600,height:310});
	wreader.loadURL("file://"+__dirname+"/reader.html");
	console.log("NEW READER ");
});

ipc.on("title", function(event,title) {
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
	www.loadURL("file://"+__dirname+"/window.html");
	www.webContents.on("did-finish-load", function() {
		www.webContents.send("content", options.source);
	});
});

ipc.on("help", function(event, name) {
	var whelp = new BrowserWindow({});
	whelp.loadURL("file://"+__dirname+"/help/"+locale+"/"+name+".html");
});


ipc.on("exit", function() {
	process.exit(0);
});

//****************************************************************************

function read_clipboard() {

var content = clipboard.readText() || "";

wexplorer = new BrowserWindow({width:800,height:800,title:"clipboard"});
wexplorer.loadURL("file://"+__dirname+"/explorer.html");

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
wexplorer.loadURL("file://"+__dirname+"/explorer.html");

wexplorer.on("closed", function() {
	wexplorer = null;
	});

wexplorer.webContents.on("did-finish-load", function() {
	wexplorer.webContents.send("locale",app.getLocale());
	wexplorer.webContents.send("start",filename);
	});
}

//****************************************************************************

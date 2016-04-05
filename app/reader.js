var ipc = require("electron").ipcRenderer;

var reading = false;

document.body.addEventListener("dragover", function(e) {
	e.stopPropagation();
	e.preventDefault();
	return false; },false);

document.body.addEventListener("dragleave", function(e) {
	e.stopPropagation();
	e.preventDefault();
	return false;
	}, false);

document.body.addEventListener("drop" ,function(e) {
	e.stopPropagation();
	e.preventDefault();
	var file = e.dataTransfer.files[0];
	reading = true;
	window.close();
	ipc.send("filename",file.path);
	return false;
},false);

window.addEventListener("beforeunload", function(e) {
	if(!reading)
		ipc.send("exit");	
},false);

var button = document.getElementById("button");
button.addEventListener("click", function() {
	ipc.send("clipboard");
});

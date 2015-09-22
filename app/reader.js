var ipc = require("ipc");

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
	ipc.send("filename",file.path);
	return false;
},false);

var button = document.getElementById("button");
button.addEventListener("click", function() {
	ipc.send("clipboard");
});

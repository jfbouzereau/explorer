var msgid = 0;

process.on("SIGTERM", function() {
	console.log("WORKER TERMINATED");
	process.exit(0);
	});

process.on("message", function(message) {

	try {
		
		msgid ++;

		var func = message.func;

		// recreate function body from its string representation	
		var i = func.indexOf('{') ;
		var j = func.lastIndexOf('}')+ 1;
		var body = func.substring(i,j);

		eval(body);

	}
	catch(err)
	{
		console.log("WORKER ERROR "+err);
		process.send(err+"");
	}

});

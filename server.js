var express = require("express"),
	app 	= express();
	
	
app.use(express.static(__dirname + '/bower_components/bootstrap/docs'));

app.listen(process.env.PORT || 3000);

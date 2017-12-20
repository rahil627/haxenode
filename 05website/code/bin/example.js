// Generated by Haxe 3.4.4
if (process.version < "v4.0.0") console.warn("Module " + (typeof(module) == "undefined" ? "" : module.filename) + " requires node.js version 4.0.0 or higher");
(function () { "use strict";
var MainBasic = function() {
	var _gthis = this;
	console.log("Express website (Basic): open browser at http://localhost:3000");
	console.log("Stop node.js : CTRL + c");
	var app = new js_npm_Express();
	app.get("/",function(req,res) {
		res.send("Hello World!");
	});
	this.server = app.listen(3000,function() {
		var host = _gthis.server.address().address;
		var port = _gthis.server.address().port;
		console.log("Example app listening at http://" + host + ":" + port);
	});
};
MainBasic.main = function() {
	var main = new MainBasic();
};
var haxe_io_Bytes = function() { };
var js_node_buffer_Buffer = require("buffer").Buffer;
var js_npm_Express = require("express");
MainBasic.main();
})();

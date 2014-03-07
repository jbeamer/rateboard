var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"]				        = requestHandlers.start;
handle["/logo_prog_direct.gif"] = requestHandlers.logo;

server.start(router.route, handle);

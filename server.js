var http = require('http'),
	static = require('node-static'),
	file = new (static.Server)('./public');

var server = http.createServer(function(req, res) {
	req.addListener('end', function() {
		file.serve(req, res);
	});
});

server.listen(process.env.PORT || 3000);

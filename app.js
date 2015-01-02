var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	res.writeHead(200);
	var data = fs.readFileSync("./example/index.html","utf-8"); 
	res.end(data);
}).listen(81);
console.log('网站运行中，请查看http://127.0.0.1:81');
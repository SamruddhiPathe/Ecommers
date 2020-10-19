var h=require('http');
var server=h.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write("<h1>Welcome to Node</h1>");
res.end();
});
server.listen(8000);
console.log('Server started at port no 8000');
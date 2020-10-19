var h=require('http');
var url=require('url');
var server=h.createServer(function(req,res){
var url_parts=url.parse(req.url,true);
var name=url_parts.query.name;
res.writeHead(200,{'Content-Type':'text/html'});
res.write("<h1 style='color:pink'>Welcome "+name+"</h1>");
res.end();
});
server.listen(8000);
console.log('Server started at port no 8000');
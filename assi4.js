var h=require('http');
var url=require('url');
var fs=require('fs');
var server=h.createServer(function(req,res){
var url_parts=url.parse(req.url,true);
var path=url_parts.pathname;
var file=path.substring(1);
fs.readFile(file,function(err,data){
if(!err)
{
res.writeHead(200,{'Content-Type':'text/html'});
res.write(data.toString());
res.end();
}
else
console.log("Not Found");
});

});
server.listen(8000);
console.log('Server started at port no 8000');
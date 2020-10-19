var http=require('http');
var count=0;
var fs=require('fs');
var server=http.createServer(function(req,res){
	
	if(req.url=='/favicon.ico'){return;}
	fs.readFile('count.txt',function(err,data)
	{
		if(!err)
		{
				//var vcount=parseInt(data.toString());
				count++;
				res.writeHead(200,{'Content-Type':'text/html'});
				res.write("<h1>visit count: "+count+"</h1>");
				res.end();
				//var cnt=count;
                console.log("val updated");
				fs.writeFile('count.txt'," "+count,function(err){
					if(!err)
						console.log("count updated");
				});
				
				
		}
		else
			console.log("not found");	
	});
});
server.listen(8000);
console.log("Server Started on port 8000");
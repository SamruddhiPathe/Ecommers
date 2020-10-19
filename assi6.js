var http=require('http');
var event=require('events');
var fs=require('fs');
var ee=new event.EventEmitter();

ee.addListener('request',function(e){
	var str="Request Recieved at "+new Date().toString()+ " for "+e.url+"\n";
	console.log("Request Recieved");
	fs.appendFile('log.txt',str,function(err){
		if(!err)
			console.log("Request logged");
	});
});

var server=http.createServer(function(req,res){
	ee.emit('request',req);
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("<h1>Use of Event Module</h1>");
	res.end();
});

server.listen(8100);
console.log("Server Started");
var http = require ('http');
var fs = require ('fs');

http.createServer(function(req,res) {
  if(req.method === 'GET') {
    if(req.url.includes('json')) {
      res.writeHead(200,{'Content-type':'application/json'});
      fs.readfile(req.url, function(err,data) {
        res.end(data);
      });
    }

  }
  console.log('server running 8080');
}).listen(8080);

var http = require ('http');
var fs = require ('fs');

http.createServer(function(req,res) {
  console.log('server created');
  if (req.method === 'GET') {

    if (req.url.includes('html')) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('../'+req.url, function (err, data) {
        res.end(data);
      });
    };

    if(req.url.includes('json')) {
      console.log('json request');
      res.writeHead(200,{'Content-type':'application/json'});
      fs.readFile(req.url.replace('/',''), function(err,data) {
        console.log(req.url.replace('/',''), data);
        res.end(data);
      });
    }


    if (req.url.includes('css')) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      fs.readFile('../'+req.url, function (err, data) {
        console.log(req.url);
        res.end(data);
      });
    };

    if (req.url.includes('js') && !req.url.includes('json')) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      fs.readFile('../'+req.url, function (err, data) {
        res.end(data);
      });
    };

    if (req.url.includes('favicon')) {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' });
      res.end();
    };

    if (req.url.includes('.jpg')) {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      fs.readFile(req.url.replace('/', ''), function (err, data) {
        res.end(data);
      });
    };

    if (req.url.includes('/fetch')) {
      console.log(fetch);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      fs.readFile('todolist.json', function (err, data) {
        res.end(data);
      });
    }


  }

  if (req.method === 'POST') {
    var jasonString = '';
    req.on('data',function(data) {
      jasonString +=data;
    });
    req.on('end', function() {
      fs.writeFile('todolist.json',jasonString, function() {
        res.end();
      });
    });
  }


}).listen(8080);

console.log('server running 8080');

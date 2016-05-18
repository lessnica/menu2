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
    }

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
    }

    if (req.url.includes('js') && !req.url.includes('json')) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      fs.readFile('../'+req.url, function (err, data) {
        res.end(data);
      });
    }

    if (req.url.includes('favicon')) {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' });
      fs.readFile('../'+req.url, function (err, data) {
        res.end(data);
      });
    }

    if (req.url.includes('.jpg')) {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    fs.readFile('../'+req.url, function (err, data) {
      res.end(data);
    });
  }

    if (req.url.includes('.woff2')) {
      res.writeHead(200, { 'Content-Type': 'application/font-woff' });
    fs.readFile('../'+req.url, function (err, data) {
      res.end(data);
    });
  }

/*    if (req.url.includes('/fetch')) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      fs.readFile('todolist.json', function (err, data) {
        res.end(data);
      });
    }*/
  }

  if (req.method === 'POST') {

/*    req.on('data',function(data) {
      jsonString +=data;
    });
    req.on('end', function() {
      fs.writeFile('todolist.json',jsonString, function() {
        res.end();
      });
    });*/

    if (req.url.includes('.json')) {
      var jsonString = [];
      req.on('data', function(data) {

        if((fs.readFileSync(req.url.replace('/',''), {encoding:'utf8'}))) {
          var db = JSON.parse((fs.readFileSync(req.url.replace('/',''), {encoding: 'utf8'})));
          db.forEach(function(item){
            jsonString.push(item);
          });
        }
        jsonString.push((JSON.parse(data.toString())));
      });
      req.on('end', function() {
        fs.writeFile(req.url.replace('/', ''), JSON.stringify(jsonString), function() {
          res.end();
          //jsonString = [];
        });
      });

    };
  }


}).listen(8080);

console.log('server running 8080');

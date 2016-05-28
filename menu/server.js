var http = require ('http');
var fs = require ('fs');

http.createServer(function(req,res) {
  console.log('server created');
  //fs.readFile('dist/index.html', function (err, data) {
  //  res.end(data);
  //});
  if (req.method === 'GET') {

    if (req.url.includes('html')) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('dist'+req.url, function (err, data) {
        res.end(data);
      });
    };

    if (req.url.includes('.com')) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('dist'+req.url, function (err, data) {
        res.end(data);
      });
    };

    if(req.url.includes('json')) {
        res.writeHead(200,{'Content-type':'application/json'});
      fs.readFile('app/scripts/'+req.url.replace('/',''), function(err,data) {
          res.end(data);
      });
    }


    if (req.url.includes('css')) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      fs.readFile('dist'+req.url, function (err, data) {
       res.end(data);
      });
    };

    if (req.url.includes('js') && !req.url.includes('json')) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      fs.readFile('dist'+req.url, function (err, data) {
        res.end(data);
      });
    };

    if (req.url.includes('favicon')) {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' });
      fs.readFile('dist'+req.url, function (err, data) {
        res.end(data);
      });
    };

    if (req.url.includes('.jpg')) {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      fs.readFile('app/'+req.url, function (err, data) {
        res.end(data);
      });
    };

    if (req.url.includes('.woff2')) {
      res.writeHead(200, { 'Content-Type': 'application/font-woff' });
      fs.readFile('dist'+req.url, function (err, data) {
        res.end(data);
      });
    }


  }

  if (req.method === 'POST') {
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
        fs.writeFile('app/scripts/'+req.url.replace('/', ''), JSON.stringify(jsonString), function() {
                  res.end();

        });
      });

    }
  }


}).listen(8080);

console.log('server running 8080');
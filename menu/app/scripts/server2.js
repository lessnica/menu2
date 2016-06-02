var http = require ('http');
var fs = require ('fs');

http.createServer(function(req,res) {
  var minReqUrl;
  if (req.url.includes('category')){
    minReqUrl = req.url.replace('/category/','');
  } else minReqUrl = req.url;

  console.log('server created');
  if (req.method === 'GET') {

    if (req.url == '/' || !req.url.includes('.')) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('../index.html', function (err, data) {
        res.end(data);
      });
    }

    if (minReqUrl.includes('html')) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('../'+minReqUrl, function (err, data) {
        res.end(data);
      });
    }

    if(minReqUrl.includes('json')) {
      console.log('json request');
      res.writeHead(200,{'Content-type':'application/json'});
      fs.readFile(minReqUrl.replace('/',''), function(err,data) {
        console.log(req.url.replace('category/',''), data);
        res.end(data);
      });
    }


    if (minReqUrl.includes('css')) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      fs.readFile('../'+minReqUrl, function (err, data) {
        console.log(minReqUrl);
        res.end(data);
      });
    }

    if (minReqUrl.includes('js') && !minReqUrl.includes('json')) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      fs.readFile('../'+minReqUrl, function (err, data) {
        res.end(data);
      });
    }

    if (minReqUrl.includes('favicon')) {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' });
      fs.readFile('../'+minReqUrl, function (err, data) {
        res.end(data);
      });
    }

    if (minReqUrl.includes('.jpg')) {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    fs.readFile('../'+minReqUrl, function (err, data) {
      res.end(data);
    });
  }

    if (minReqUrl.includes('.woff2')) {
      res.writeHead(200, { 'Content-Type': 'application/font-woff' });
    fs.readFile('../'+minReqUrl, function (err, data) {
      res.end(data);
    });
  }

  }

  if (req.method === 'POST') {

    if (minReqUrl.includes('.json')) {
      var jsonString = [];
      req.on('data', function(data) {

        if((fs.readFileSync(minReqUrl.replace('/',''), {encoding:'utf8'}))) {
          var db = JSON.parse((fs.readFileSync(minReqUrl.replace('/',''), {encoding: 'utf8'})));
          db.forEach(function(item){
            jsonString.push(item);
          });
        }
        jsonString.push((JSON.parse(data.toString())));
      });
      req.on('end', function() {
        fs.writeFile(minReqUrl.replace('/', ''), JSON.stringify(jsonString), function() {
          console.log(jsonString);
          res.end();
          //jsonString = [];
        });
      });

    }
  }


}).listen(8080);

console.log('server running 8080');

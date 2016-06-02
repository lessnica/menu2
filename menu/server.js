var http = require ('http');
var fs = require ('fs');

http.createServer(function(req,res) {
  var minReqUrl;
  if (req.url.includes('category')){
    minReqUrl = req.url.replace('/category', '');
  } else {
    minReqUrl = req.url;
  }
  console.log('server created');
  //fs.readFile('dist/index.html', function (err, data) {
  //  res.end(data);
  //});

    if (req.method === 'GET') {



      //if (!req.url.includes('html') && !req.url.includes('json') && !req.url.includes('.js') && !req.url.includes('jpg') && !req.url.includes('css') && !req.url.includes('woff2')) {
      //  res.writeHead(200, { 'Content-Type': 'text/html' });
      //  fs.readFile('dist/index.html', function (err, data) {
      //    res.end(data);
      //  });
      //}

      if (minReqUrl == '/' || !minReqUrl.includes('.')) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('dist/index.html', function (err, data) {
          res.end(data);
        });
      }

      if (minReqUrl.includes('html')) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('dist'+minReqUrl, function (err, data) {
        res.end(data);
      });
    }


    if(minReqUrl.includes('json')) {
        res.writeHead(200,{'Content-type':'application/json'});
      fs.readFile('app/scripts/'+minReqUrl.replace('/',''), function(err,data) {
          res.end(data);
      });
    }


    if (minReqUrl.includes('css')) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      fs.readFile('dist'+minReqUrl, function (err, data) {
       res.end(data);
      });
    }

    if (minReqUrl.includes('js') && !minReqUrl.includes('json')) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      fs.readFile('dist'+minReqUrl, function (err, data) {
        res.end(data);
      });
    }

    if (minReqUrl.includes('favicon')) {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' });
      fs.readFile('dist'+minReqUrl, function (err, data) {
        res.end(data);
      });
    }

    if (minReqUrl.includes('.jpg')) {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      fs.readFile('app/'+minReqUrl, function (err, data) {
        res.end(data);
      });
    }

    if (minReqUrl.includes('.woff2')) {
      res.writeHead(200, { 'Content-Type': 'application/font-woff' });
      fs.readFile('dist'+minReqUrl, function (err, data) {
        res.end(data);
      });
    }


  }

  if (req.method === 'POST') {
    if (minReqUrl.includes('.json')) {
      var jsonString = [];
      req.on('data', function(data) {

        if((fs.readFileSync('app/scripts/' + minReqUrl.replace('/',''), {encoding:'utf8'}))) {
          var db = JSON.parse((fs.readFileSync('app/scripts/' + minReqUrl.replace('/',''), {encoding: 'utf8'})));
          db.forEach(function(item){
            jsonString.push(item);
          });
        }
        jsonString.push((JSON.parse(data.toString())));
      });
      req.on('end', function() {
        fs.writeFile('app/scripts/'+ minReqUrl.replace('/', ''), JSON.stringify(jsonString), function() {
                  res.end();

        });
      });

    }
  }


}).listen(process.env.PORT || 3000);

console.log('server running on port: 3000');

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('message.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
  if (req.method== "POST" && req.url == "/message") {
    var body= "";
    req.on('data', function (chunk) {
      body += chunk.toString();
    });
  }
  fs.appendFile('mynewfile1.txt', 'message ', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
})

.listen(8080);
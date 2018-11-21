var express = require('express');
var mock = require('./mock');

var app = express();

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

function getData(method, url, data) {
  app[method](url, function(req, res) {
    res.send(JSON.stringify(data));
  });
}
function getF(method, url, data) {
  app[method](url, data);
}

mock.map(item => {
  if (typeof item.param !== 'function') {
    getData(item.method, item.url, item.param);
  } else {
    getF(item.method, item.url, item.param);
  }
});

var server = app.listen(8085, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('成功建立服务,访问地址为http://%s:%s', host, port);
});

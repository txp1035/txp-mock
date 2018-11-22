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

function generateDataTemplate(method, url, data) {
  app[method](url, function(req, res) {
    res.send(JSON.stringify(data));
  });
} //参数为数据的接口模板
function generationMethodTemplate(method, url, data) {
  app[method](url, data);
} //参数为方法的接口模板

for (const key in mock) {
  if (mock.hasOwnProperty(key)) {
    const element = mock[key];
    const arr = key.replace(/\s+/, ' ').split(' '); //处理key值
    const method = arr[0].toLowerCase();
    const url = arr[1];
    if (typeof element !== 'function') {
      generateDataTemplate(method, url, element);
    } else {
      generationMethodTemplate(method, url, element);
    }
  }
} //遍历接口数据生成接口

var server = app.listen(8085, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('成功建立服务,访问地址为http://%s:%s', host, port);
});

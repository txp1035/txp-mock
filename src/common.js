const defaultTempalte = {
  normal: ({ method, url, data }) => `
    app.${method}('${url}',function(req,res){
      let resData=${data};
      res.send(JSON.stringify(resData));
    })\n
    `
};

function buildApiDateStr({ method, url, data }) {
  let tempalte = defaultTempalte.normal({
    method,
    url,
    data
  });
  return tempalte;
}

function buildHttpFileStr(methodString) {
  let tempalte = `
    var express = require("express");\n
    var app=express();\n
    app.all('*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
    });\n
    ${methodString}\n
    var server=app.listen(8085,'localhost',function(){
      var host = server.address().address;
      var port = server.address().port;
      console.log('成功建立服务,访问地址为http://%s:%s',host,port)
    })
    `;
  return tempalte;
}
module.exports = {
  buildApiDateStr,
  buildHttpFileStr
};

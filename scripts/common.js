const defaultTempalte = {
  normal: ({ method, url, data }) => `
    app.${method}('${url}',function(req,res){
      let resData=${data};
      res.send(JSON.stringify(resData));
    })\n
    `,
  page: ({ method, url, data }) => `
    app.${method}('${url}',function(req,res){
      let defaultQuery={page:1,pageSize:10};
      let {page,pageSize}=req.query.page?req.query:defaultQuery;
      let resData=${data};
      resData.data.page=page,
      resData.data.pageSize=pageSize,
      resData.data.records=30,
      resData.data.rows=resData.data.rows.splice((page-1)*pageSize,pageSize);
      res.send(JSON.stringify(resData));
    })
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

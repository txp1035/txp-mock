
    var express = require("express");

    var app=express();

    app.all('*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
    });

    
    app.get('/test',function(req,res){
      let resData={"status":0,"data":{"recommend":[{"id":1,"goodsImages":"http://dummyimage.com/300x600","hot":1,"name":"示发热市","business":"决大","integral":8},{"id":2,"goodsImages":"http://dummyimage.com/300x600","hot":1,"name":"头品圆月口业专然","business":"引车","integral":32},{"id":3,"goodsImages":"http://dummyimage.com/300x600","hot":1,"name":"集且约带","business":"体口去特","integral":86}],"sowing":["\"http://dummyimage.com/300x600\"","\"http://dummyimage.com/300x600\"","\"http://dummyimage.com/300x600\"","\"http://dummyimage.com/300x600\""],"icon":[{"iconImages":"http://dummyimage.com/300x600","name":"商品分类","id":1},{"iconImages":"http://dummyimage.com/300x600","name":"商品分类","id":2},{"iconImages":"http://dummyimage.com/300x600","name":"商品分类","id":3},{"iconImages":"http://dummyimage.com/300x600","name":"商品分类","id":4},{"iconImages":"http://dummyimage.com/300x600","name":"商品分类","id":5}]}};
      res.send(JSON.stringify(resData));
    })

    

    var server=app.listen(8085,'localhost',function(){
      var host = server.address().address;
      var port = server.address().port;
      console.log('成功建立服务,访问地址为http://%s:%s',host,port)
    })
    
const fs = require("fs");
const Mock = require("mockjs");
const arr = require("./apiDate.js");
const {buildApiDateStr,buildHttpFileStr} = require("./common.js");
let ApiDateStr = "";

arr.forEach(item => {
  if (item.isMockData) {
    item.data = JSON.stringify(Mock.mock(item.data));
  } else {
    item.data = JSON.stringify(item.data);
  }
  ApiDateStr += buildApiDateStr(item);
});
let HttpFileStr = buildHttpFileStr(ApiDateStr);
fs.writeFile("http/http.js", HttpFileStr, function(err) {
  if (err) console.log("写文件操作失败");
  else console.log("写文件操作成功");
});

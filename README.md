# analog-http

模拟后端请求

## src 目录说明

### 静态相关

——api：用于接口配置
——common.js：用于配置 node 后端接口模板
——build.js：用于通过 common.js 模板和 api 里的数据生成后端服务文件 http.js

### 热加载相关

——index.js：node 服务文件
——mock：用于配置接口

## 快速使用

npm run build 静态生成服务文件并启动
使用热加载前需要安装 supervisor，`npm i supervisor -g`
npm start：热加载

## 性能消耗

服务器内存使用:17800K

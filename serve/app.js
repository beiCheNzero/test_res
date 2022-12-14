// 用于配置服务器相关信息
let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
const connection = require('./db/index')
let router = require('./router') // 导入路由配置

connection.connect(err => {
    if (err) {
        console.log("服务器连接失败")
    } else {
        console.log("服务器连接成功")
    }
})

app.use(bodyParser.json()); //配置解析，用于解析json和urlencoded格式的数据
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors()) //配置跨域，必须在路由之前
app.use(router) //配置路由

app.listen(80, () => {
    console.log('服务器启动成功');
})
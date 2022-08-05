// 用于配置服务器相关信息
let mysql = require('mysql')

let db = mysql.createConnection({
    host: '127.0.0.1', //数据库IP地址
    user: 'root', //数据库登录账号
    password: '001209@LJL', //数据库登录密码
    database: 'shixun' //要操作的数据库
})

module.exports = db
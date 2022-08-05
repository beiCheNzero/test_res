// 用于配置对应路由
let express = require('express')
let router = express.Router()
let customer = require('./API/customer') //customer表
let list = require('./API/list') //list表
let worker = require('./API/worker') //list表

router.get('/list/login', list.login)
router.get('/list/register', list.register)
router.get('/customer/getInfo', customer.getInfo)
router.get('/worker/getAllInfo', worker.getAllInfo)

module.exports = router
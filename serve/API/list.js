let db = require("../db/index")

exports.login = (req, res) => { //登录
    var sql = 'select * from account where user_name = ? and user_pwd = ?';
    db.query(sql, [req.query.user_name, req.query.user_pwd], (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.register = (req, res) => { //注册
    var sql = 'insert into account (user_name, user_pwd) values (?,?)'
    db.query(sql, [req.query.user_name, req.query.user_pwd], (err, data) => {
        if (err) {
            return res.send('错误' + err.message)
        }
        res.send({
            status: 200,
            message: "注册用户成功"
        })
    })
}

exports.name = (req, res) => { //account表的密码
    var sql = 'SELECT user_pwd FROM account WHERE user_name = ?';
    db.query(sql, [req.query.user_name], (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.all = (req, res) => { //获取customer表全部数据
    var sql = 'select * from customer';
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.get = (req, res) => { //通过cid查询数据
    var sql = 'select * from customer where cid = ?' //？用于占位
    db.query(sql, [req.query.cid], (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.del = (req, res) => { //通过cid删除数据
    var sql = 'delete from customer where cid = ?'
    db.query(sql, [req.query.cid], (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send({
            status: 200,
            message: '删除成功'
        })
    })
}

exports.add = (req, res) => { //向cutomer表添加数据
    var sql = 'insert into customer (cid, cust_name, cust_mobile, cust_address, cust_ticket) values (?,?,?,?,?)'
    db.query(sql, [req.query.cid, req.query.cust_name, req.query.cust_mobile, req.query.cust_address, req.query.cust_ticket], (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send({
            status: 200,
            message: '添加成功'
        })
    })
}

// exports.update = (req, res) => { //通过cid更新数据
//     var sql = 'update customer set cid = ?, cust_name = ?, cust_mobile = ?, cust_address = ?, cust_ticket = ? where cid = ?'
//     db.query(sql, [req.query.cid, req.query.cust_name, req.query.cust_mobile, req.query.cust_address, req.query.cust_ticket, req.query.cid], (err, data) => {
//         if (err) {
//             return res.send('错误：' + err.message)
//         }
//         res.send({
//             status: 200,
//             message: '修改成功'
//         })
//     })
// }
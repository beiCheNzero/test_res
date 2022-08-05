let db = require("../db/index")

exports.getInfo = (req, res) => { //查询用户
  // var sql = 'select * from customer'
  var sql = 'select * from customer where cust_name = ?'
  // db.query(sql, (err, data) => {
  db.query(sql, [req.query.cust_name], (err, data) => {
    if (err) {
      return res.send('错误:' + err.message)
    }
    res.send(data);
  })
}

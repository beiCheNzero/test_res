let db = require('../db/index')

exports.getAllInfo = (req, res) => { //获取工人所有的信息
  let sql = 'select * from worker';
  db.query(sql, (err, data) => {
    if(err) {
      return res.send("sql错误" + err.message)
    }
    res.send(data)
  })
}
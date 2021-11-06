
const mysql = require('mysql')
const mysql_data = require('./mysql_data.json')

const ObjectConnection = {
    host : mysql_data.mysql.host,
    port : mysql_data.mysql.port,
    user : mysql_data.mysql.user,
    password : mysql_data.mysql.pass,
    database : mysql_data.mysql.database
}

const myConn = mysql.createConnection(ObjectConnection)

if(myConn) {
    console.log("base de datos conectatda")
}

module.exports = myConn
const util = require('util')
const connection = require('../../config/connection')
const query = util.promisify(connection.query).bind(connection)

async function Factory(sql) {
    try {
        let sql_query = sql
        const res = await query(sql_query)
        return res
    }catch(err) {
        console.log(`there was an error : ${err}`)
        return err
    }
}

module.exports = {
    Factory,
    connection
}
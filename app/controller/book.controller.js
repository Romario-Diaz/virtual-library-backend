
const { connection, Factory } = require('../factory/query_factory')


async function getInicializarionData (req, res) {
    console.log("getInicializarionData")
    let sql_audiobooks = `select * from audiobooks limit 4`
    const res_audiobooks = await Factory(sql_audiobooks)

    let sql_freeebooks = `select * from freebook limit 4`
    const res_freebook = await Factory(sql_freeebooks)

    res.json({audiobooks : res_audiobooks, freebook : res_freebook})
}

async function getOneBook (req, res) {
    const { id } = req.params
    let sql = `select * from audiobooks where id = ${parseInt(id)}`
    const result = await Factory(sql)
    res.json(result)
}

async function getOneEbook (req, res) {
    const { id } = req.params
    let sql = `select * from freebook where id = ${parseInt(id)}`
    const result = await Factory(sql)
    res.json(result)
}

async function getAudioBooks (req, res) {
    let sql = `select * from audiobooks`
    const result = await Factory(sql)
    res.json(result)
}

async function getEbooks (req, res) {
    let sql = `select * from freebook`
    const result = await Factory(sql)
    res.json(result)
}

async function newAudioBook (req, res) {
    const { body, file } = req

    if(file) {

        let url = `http://localhost:8080/image/${file.filename}`
        let sql = `insert into audiobooks(name, img_url, author) values 
                    (${connection.escape(body.name)}, ${connection.escape(url)}, ${connection.escape(body.author)})`

        const result = await Factory(sql)
        res.json(result)
    }
}

async function newEBook (req, res) {
    const { body, file } = req

    if(file) {

        let url = `http://localhost:8080/image/${file.filename}`
        let sql = `insert into freebook(name, author, img_url) values 
                    (${connection.escape(body.name)}, ${connection.escape(body.author)}, ${connection.escape(url)})`

        const result = await Factory(sql)
        res.json(result)
    }
}

module.exports = {
    getInicializarionData,
    getOneBook, 
    getOneEbook,
    getAudioBooks, 
    getEbooks, 
    newAudioBook,
    newEBook
}
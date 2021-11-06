const express = require('express')
const port = process.env.PORT || 8080
const { urlencoded, json } = require('express')
const path = require('path')
const cors = require('cors')

// Inizialization
const app = express()

//setting
app.set('port', port)

// middlewares
app.use(cors())
app.use(urlencoded({extended: true}))
app.use(json())

// routes 
app.use('/books', require('./routes/books.routes'))

// public static files
app.use(express.static(path.join(__dirname, '../static')))

module.exports = app

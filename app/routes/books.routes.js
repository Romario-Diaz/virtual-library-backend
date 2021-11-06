const route = require('express').Router()

const storage = require('../../config/multer')
const multer = require('multer')
const uploader = multer({storage})

const { getInicializarionData, getOneBook, getOneEbook, getAudioBooks, getEbooks, newAudioBook, newEBook } = require('../controller/book.controller')


route.get('/getInicializationData', getInicializarionData)
route.get('/getOneBook/:id', getOneBook)
route.get('/getOneEbook/:id', getOneEbook)

route.get('/getAudioBooks', getAudioBooks)


route.get('/getEbooks', getEbooks)

route.post('/newAudioBook', uploader.single('file'), newAudioBook)

route.post('/newEBook', uploader.single('file'), newEBook)


module.exports = route

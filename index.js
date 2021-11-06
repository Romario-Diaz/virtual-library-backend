const app = require('./app/app')

app.listen(app.get('port'), (err) => {
    if(err) {
        console.log(`there was an error : ${err}`)
    }else {
        console.log(`server running on port ${app.get('port')}`)
    }
})
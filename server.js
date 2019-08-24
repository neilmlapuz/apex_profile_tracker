const express = require('express'),
    app = express(),
    dotenv = require('dotenv'),
    path = require('path'),
    bodyParser = require('body-parser')

dotenv.config({ path: './config.env' })

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) // for parsing application/json


app.use('/', require('./routes/index'))
app.post('/handler', function (req, res) {
    console.log(req.body.gamertag)
})

// app.use('/api/v1/profile', require('./routes/profile'))



const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`listening in ${port}`)
})
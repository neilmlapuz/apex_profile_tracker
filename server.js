const express = require('express'),
    app = express(),
    dotenv = require('dotenv'),
    path = require('path'),
    bodyParser = require('body-parser')

dotenv.config({ path: './config.env' })

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) // for parsing application/json


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))

})


app.post('/', function (req, res) {

    app.use('/profile', require('./routes/profile'))
    console.log("dkfms")
    res.redirect(`/profile/${req.body.platform}/${req.body.gamertag}`)

    
})

// app.use('/profile', require('./routes/profile'))



const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`listening in ${port}`)
})
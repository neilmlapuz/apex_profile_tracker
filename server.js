const express = require('express'),
    app = express(),
    dotenv = require('dotenv'),
    path = require('path'),
    bodyParser = require('body-parser')

dotenv.config({ path: './config.env' })

app.use(express.static(__dirname + '/public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


app.get('/', function (req, res) {
    res.render('index')

})


app.use('/profile', require('./routes/profile'))



const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`listening in ${port}`)
})
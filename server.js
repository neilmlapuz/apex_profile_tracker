const express = require('express'),
    app = express(),
    dotenv = require('dotenv')
dotenv.config({ path: './config.env' })


app.use(express.static(__dirname + '/public'));
app.use('/', require('./routes/index'))
app.use('/api/v1/profile', require('./routes/profile'))



const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`listening in ${port}`)
})
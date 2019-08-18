const express = require('express'),
    router = express.Router(),
    fetch = require('node-fetch'),
    path = require('path')


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router
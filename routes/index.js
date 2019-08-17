const express = require('express'),
    router = express.Router(),
    fetch = require('node-fetch')


router.get('/', (req, res) => {

    res.json("hello")
})

module.exports = router
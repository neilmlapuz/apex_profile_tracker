const express = require('express'),
    router = express.Router(),
    fetch = require('node-fetch')

router.get('/:platform/:gamertag', async (req, res) => {
    try {
        const headers = {
            'TRN-Api-Key': process.env.TRACKER_API_KEY
        }

        const { platform, gamertag } = req.params
    }
    catch (err) {

    }
})

module.exports = router
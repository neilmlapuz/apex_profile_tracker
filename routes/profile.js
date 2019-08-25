const express = require('express'),
    router = express.Router(),
    fetch = require('node-fetch')

router.get('/:platform/:gamertag', async (req, res) => {
    try {
        const headers = {
            'TRN-Api-Key': process.env.TRACKER_API_KEY
        }

        const { platform, gamertag } = req.params
        console.log(req.params)
        const response = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`
            , { headers })

        const data = await response.json()

        //response to the client
        console.log(data)
        res.send(data)
    }
    catch (err) {
        console.log(err)
        res.status(500)
    }
})

module.exports = router
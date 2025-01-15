const express = require('express')
const router = express.Router()

router
    .post("",gettingvisitors)
    .post("",gettingorders)


module.exports = router
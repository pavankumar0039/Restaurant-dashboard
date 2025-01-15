const express = require('express')
const router = express.Router()

const addmenuitem=require('../../controllers/menucontroller/addingmenuitem')
const updatemenuitem=require("../../controllers/menucontroller/updatingmenuitem")

router
    .post("", addmenuitem)
    .put("/:id", updatemenuitem)
module.exports = router
const express=require('express')
const router=express.Router()

const gettingcustomerorders=require('../../controllers/customercontroller/gettingcustomerorders')
router.post("",gettingcustomerorders)

module.exports=router
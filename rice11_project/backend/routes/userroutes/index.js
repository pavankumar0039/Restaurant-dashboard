const express=require('express')
const router = express.Router()

const adduser = require('../../controllers/usercontroller/addinguser')
const getuser = require('../../controllers/usercontroller/gettinguser')
const deleteuser = require('../../controllers/usercontroller/deletinguser')
const updateuser = require('../../controllers/usercontroller/updatinguser')

router.route('/')
    .post(adduser)
    .get(getuser);

router.route('/:id')
    .delete(deleteuser)
    .put(updateuser);
    

module.exports = router;
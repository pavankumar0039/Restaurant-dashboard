const express = require('express');
const router = express.Router();

const addorder = require('../../controllers/ordercontroller/addingorders')
const getorder = require('../../controllers/ordercontroller/gettingorders')
const deleteorder = require('../../controllers/ordercontroller/deletingorders')
// const updateorder=require('../../controllers/ordercontroller/updatingorders')

router.route('/')
  .post(addorder)
  .get(getorder);

router.route('/:id')
  .delete(deleteorder)
  .get(getorder)
// .put(updateorder);   


module.exports = router;

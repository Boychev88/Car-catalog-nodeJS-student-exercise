const express = require('express');
const homeController = require('./controllers/homeControllers');
const carController = require('./controllers/carController');
const accessoryController = require('./controllers/accessoryController')

const router = express.Router();

router.use('/', homeController);
router.use('/car', carController)
router.use('/accessory', accessoryController)

module.exports = router;
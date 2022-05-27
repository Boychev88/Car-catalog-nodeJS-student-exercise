const express = require('express');
const homeController = require('./controllers/homeControllers');
const carController = require('./controllers/carController');

const router = express.Router();

router.use('/', homeController);
router.use('/car', carController)

module.exports = router;
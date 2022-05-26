const express = require('express');
const homeController = require('./controllers/homeControllers');
const carController = require('');

const router = express.Router();


router.get('/',homeController.index);
router.get('/about',homeController.about);

router.use('/car', carController)

module.exports = router;
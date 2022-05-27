const router = require('express').Router()
const cars =require('../db.json')

router.get('/', (req, res )=>{
    res.render('index' , {cars})
});
router.get('/about', (req,res)=>{
    res.render('about')
})
module.exports = router;
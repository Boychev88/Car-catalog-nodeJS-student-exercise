const router = require('express').Router();
const carService = require('../services/carService');

router.get('/', (req, res )=>{
    let {mark , model , gen} = req.query;
    const cars = carService.getAll(mark, model, gen);
    res.render('index' , {cars,mark,model, gen})
});
router.get('/about', (req,res)=>{
    res.render('about')
})
module.exports = router;
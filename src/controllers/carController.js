const router = require('express').Router();
const carService = require('../services/carService')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req,res)=>{
    const car = req.body;
     try{
         await carService.save(car);
         res.redirect('/');
     }catch (error){
       res.status(400).send(error);
   }
});
router.get('/details/:id', (req ,res )=>{
    res.render('details')
})

module.exports = router;
const router = require('express').Router();
const carService = require('../services/carService')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const car = req.body;
    try {
        await carService.crate(car);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
router.get('/details/:id', async (req, res) => {
    const car = await carService.getOne(req.params.id).lean();
   res.render('details', {car});
})

module.exports = router;
const router = require('express').Router();
const carService = require('../services/carService')
const accessoryService = require('../services/accessoryService')
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
    const car = await carService.getOneDetails(req.params.id).lean();
    res.render('details', { car });
})

router.get('/:carId/attach', async (req, res) => {
    const car = await carService.getOne(req.params.carId).lean();
    const accessories = await accessoryService.getAllWithout(car.accessory).lean();
    res.render('accessory/attach', { car , accessories});

});

router.post('/:carId/attach', async (req,res)=>{
    const accessoryId = req.body.accessory;
    await carService.attachAccessory(req.params.carId, accessoryId)
    res.redirect(`/`)
})

module.exports = router;
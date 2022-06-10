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
    res.render('accessory/attach', { car, accessories });

});

router.post('/:carId/attach', async (req, res) => {
    const accessoryId = req.body.accessory;
    await carService.attachAccessory(req.params.carId, accessoryId)
    res.redirect(`/`)
});


router.get('/:carId/edit', async (req, res) => {
    const car = await carService.getOne(req.params.carId).lean();
    if (!car) {
        return res.redirect('404')
    }
    res.render('car/edit', { car })
});

router.post('/:carId/edit', async (req, res) => {
    const modifiedCar = await carService.edit(req.params.carId, req.body);
    
    if(!modifiedCar){
        return res.redirect('404')
    }

    res.redirect(`/car/details/${modifiedCar._id}`)
});



module.exports = router;
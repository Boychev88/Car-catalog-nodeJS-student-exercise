const router = require('express').Router();
const carService = require('../services/carService');
const accessoryService = require('../services/accessoryService');
const { isAuth } = require('../middleware/authMiddleware');

router.get('/create', isAuth, (req, res) => {
    res.render('create');
});

router.post('/create', isAuth, async (req, res) => {
    const car = req.body;
    car.owner = req.user._id;
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
    const isOwner = car.owner == req.user?._id;
    console.log(car);
    res.render('details', { car, isOwner });
})

router.get('/:carId/attach', isAuth, async (req, res) => {
    const car = await carService.getOne(req.params.carId).lean();
    const accessories = await accessoryService.getAllWithout(car.accessory).lean();
    res.render('accessory/attach', { car, accessories });

});

router.post('/:carId/attach', isAuth, async (req, res) => {
    const accessoryId = req.body.accessory;
    await carService.attachAccessory(req.params.carId, accessoryId);
    res.redirect(`/`);
});


router.get('/:carId/edit', isAuth, async (req, res) => {
    const car = await carService.getOne(req.params.carId).lean();
    if (car.owner != req.user._id) {
        return res.redirect('404');

    }
    if (!car) {
        return res.redirect('404');
    }

    res.render('car/edit', { car });
});

router.post('/:carId/edit', async (req, res) => {
    const modifiedCar = await carService.edit(req.params.carId, req.body);

    if (!modifiedCar) {
        return res.redirect('404');
    }

    res.redirect(`/car/details/${modifiedCar._id}`);
});

router.get('/:carId/delete', async (req, res) => {

    const car = await carService.getOne(req.params.carId).lean();
    res.render('car/delete', {car} );
});
router.post('/:carId/delete', async (req, res) => {
    await carService.delete(req.params.carId);

    res.redirect('/');
})


module.exports = router;
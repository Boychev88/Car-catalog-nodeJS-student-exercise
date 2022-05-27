const router = require('express').Router();
const fs = require('fs/promises');
const cars = require('../db.json');
const path = require('path');

router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', (req,res)=>{
    const car = req.body;

    cars.push(car);
    fs.writeFile(path.resolve('src','db.json'),JSON.stringify(cars,'',4), {encoding: 'utf-8'})
    .then(()=>{
        res.redirect('/');
    })
})

module.exports = router;
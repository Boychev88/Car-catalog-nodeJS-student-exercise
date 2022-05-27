const fs = require('fs/promises');
const path = require('path');

const cars = require('../db.json');

exports.save = (car) => {
    cars.push(car);

    let textData = JSON.stringify(cars, '', 4);
    return fs.writeFile(path.resolve('src','db.json'),textData,{encoding: 'utf-8'})
}
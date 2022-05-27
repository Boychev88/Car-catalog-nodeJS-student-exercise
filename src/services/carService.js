const fs = require('fs/promises');
const path = require('path');
const cars = require('../db.json');
const uniqId = require('uniqid')

exports.getAll = (searchMark = '', searchModel = '', searchGen = '') => {
    const result = cars 
        .filter(x => x.mark.toLowerCase().includes(searchMark.toLowerCase()))
        .filter(x => x.model.toLowerCase().includes(searchModel.toLowerCase()))
        .filter(x => x.gen.toLowerCase().includes(searchGen.toLowerCase()));
    return result;

}

exports.getOne = (carId) => {
    return cars.filter(x => x.id == carId)[0];
}


exports.save = (car) => {
    cars.push({ id: uniqId(), ...car });

    let textData = JSON.stringify(cars, '', 4);
    return fs.writeFile(path.resolve('src', 'db.json'), textData, { encoding: 'utf-8' })
}
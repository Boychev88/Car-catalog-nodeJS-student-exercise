const fs = require('fs/promises');
const path = require('path');
const cars = require('../db.json');
const uniqId = require('uniqid')


exports.getOne = (carId)=>{
 return cars.filter(x => x.id == carId)[0];
} 
    

exports.save = (car) => {
    cars.push({id: uniqId(),...car});

    let textData = JSON.stringify(cars, '', 4);
    console.log(textData);
    return fs.writeFile(path.resolve('src','db.json'),textData,{encoding: 'utf-8'})
}
const fs = require('fs/promises');
const path = require('path');
const uniqId = require('uniqid')
const Car = require('../models/Car');

exports.getAll = (searchMark = '', searchModel = '', searchGen = '') => {
    
    return Car.find().lean()

}

exports.getOne = (carId) => {
    return Car.findById(carId)
}


exports.crate = (car) => {
return Car.create(car)
}
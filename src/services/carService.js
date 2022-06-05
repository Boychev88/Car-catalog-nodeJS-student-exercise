const Accessory = require('../models/Accessory');
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
exports.attachAccessory = async (carId, accessoryId) => {
    const car = await Car.findById(carId);
    const accessory = await Accessory.findById(accessoryId);
console.log(car);
console.log(accessory);
    car.accessory.push(accessory);
    accessory.cars.push(car);

    await car.save();
    await accessory.save();
    return car;
};
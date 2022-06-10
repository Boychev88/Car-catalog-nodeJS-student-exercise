const Accessory = require('../models/Accessory');
const Car = require('../models/Car');

exports.getAll = async (searchMark = '', searchModel = '', searchGen = '') => {
    let cars = await Car.find(
        {
            mark: { $regex: new RegExp(searchMark, 'i') },
            model: { $regex: new RegExp(searchModel, 'i') },
            gen: { $regex: new RegExp(searchGen, 'i') }
        }).lean()

    return cars
}

exports.getOne = (carId) => {
    return Car.findById(carId)
};
exports.getOneDetails = (carId) => {
    return Car.findById(carId).populate('accessory')
}


exports.crate = (car) => {
    return Car.create(car)
}
exports.attachAccessory = async (carId, accessoryId) => {
    const car = await Car.findById(carId);
    const accessory = await Accessory.findById(accessoryId);
    car.accessory.push(accessory);
    accessory.cars.push(car);

    await car.save();
    await accessory.save();
    return car;
};

exports.edit = (carId , carData)=>{
    return Car.findByIdAndUpdate(carId, carData);
}
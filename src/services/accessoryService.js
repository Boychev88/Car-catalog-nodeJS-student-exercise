const Accessory = require('../models/Accessory');


exports.getAll = ()=> {
    return Accessory.find();
};

exports.getAllWithout = (ids) => {
    return Accessory.find({_id: {$nin: ids}})
}

exports.create = (accessoryData)=>{
    return Accessory.create(accessoryData);
}


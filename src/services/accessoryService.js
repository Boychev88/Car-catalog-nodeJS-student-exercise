const Accessory = require('../models/Accessory');


exports.getAll = ()=> {
    return Accessory.find();
}

exports.create = (accessoryData)=>{
    return Accessory.create(accessoryData);
}


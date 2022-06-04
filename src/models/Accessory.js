const mongoose = require('mongoose');


const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: function(){
            return this.imageUrl.startsWith('http')
        }
    },
    description: {
        type: String,
        maxlength: 300,
        required: true
    },
    car: {
        type : mongoose.Types.ObjectId,
        ref: 'Car'
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;
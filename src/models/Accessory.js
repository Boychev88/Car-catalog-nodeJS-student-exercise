const mongoose = require('mongoose');


const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/g
    },
    description: {
        type: String,
        maxlength: 300,
        required: true
    },
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;
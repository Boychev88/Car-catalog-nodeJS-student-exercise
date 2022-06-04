const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
     mark : {
         type : String,
         required : true
        },
     description : {
         type : String,
         required : true,
         maxLength : 300
        },
    imageUrl : {
        type: String,
        required: true,

        },
    model : {
        type: String,
        required : true,

    },
    gen: {
        type: String,
        required : true
    }
}) ;

let Cars = mongoose.model('Car',carSchema);
module.exports = Cars
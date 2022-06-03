const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
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

    }   
}) ;

exports.Cars = mongoose.model('Car',carSchema);
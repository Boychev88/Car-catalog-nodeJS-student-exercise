const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/car-catalog'

exports.initializeDatabase = ()=> mongoose.connect(connectionString);


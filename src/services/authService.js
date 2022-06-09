const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { saltRounds, secrets } = require('../constants')

exports.register = async (user) => {
    const { username, password, repeatPassword } = user;
    if (password !== repeatPassword) {
        return false;
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    let createUser = User.create({
        username,
        password: hashedPassword

    });
    return createUser;

}
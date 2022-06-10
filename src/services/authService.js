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

};

exports.login = async (userData) => {
    const { username, password } = userData;
    const user = await User.findOne({ username });
    if (!user) {
        return;
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        return
    }

    const result = new Promise((resolve, reject) => {

        jwt.sign({ _id: user._id, username: user.username }, secrets, { expiresIn: '2d' }, (err, token) => {
            if (err) {
                reject(err);
            }
            resolve(token) ;
        })

    })
    return result;

}
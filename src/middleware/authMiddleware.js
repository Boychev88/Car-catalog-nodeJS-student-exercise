const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { saltRounds, secrets } = require('../constants')

const jwtVerify = promisify(jwt.verify)


exports.auth = async (req, res, next) => {
    let token = req.cookies['user'];

    if (token) {
        try {
            const decodedToken = await jwtVerify(token, secrets);
            req.user = decodedToken;
           res.locals.user = decodedToken; 
        } catch (error) {
            res.redirect('404');
        }
    }
    next();
};

exports.isAuth = (req,res, next)=>{
    if(!req.user){
       return res.redirect('/404')
    }
    next()
}
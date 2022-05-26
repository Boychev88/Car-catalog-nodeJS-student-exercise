const router = require('express').Router()
exports.index = (req, res )=>{
    res.render('index')
}
exports.about= (req,res)=>{
    res.render('about')
}
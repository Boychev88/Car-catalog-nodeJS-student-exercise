const cars =require('../db.json')

exports.index = (req, res )=>{
    res.render('index' , {cars})
}
exports.about= (req,res)=>{
    res.render('index', )
}
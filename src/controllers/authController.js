const router = require('express').Router();




 router.get('/register',(req,res)=>{
     res.render('auth/register');
 });

 router.post('/register', (req,res)=>{
     console.log(req.body);
     res.redirect('/')
 });







 module.exports = router;
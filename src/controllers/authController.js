const router = require('express').Router();
const authService = require('../services/authService');




 router.get('/register',(req,res)=>{
     res.render('auth/register');
 });

 router.post('/register', async (req,res)=>{
     
     let createUser = await authService.register(req.body);
     console.log(createUser);

      if(createUser){
        res.redirect('/login')
      }else {
        res.redirect('/404')
      }
 });







 module.exports = router;
const express = require('express');
const router = express.Router();
const User = require('../Models/userModel');
router.get('/login',(req,res)=>{
    res.send('log in');
})
router.post('/register',async(req,res)=>{
    const createUser = new User(req.body);
    const result = await createUser.save();
    res.status(201).json(result);
})
router.get('/register',(req,res)=>{
    res.send('successful register');
})


module.exports = router;
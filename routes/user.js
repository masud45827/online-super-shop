const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200);
    res.sendFile(__dirname + "views/index.html");
})
router.get('/login',(req,res)=>{
    res.send('log in');
})
router.get('/register',(req,res)=>{
    res.send('successful register');
})


module.exports = router;
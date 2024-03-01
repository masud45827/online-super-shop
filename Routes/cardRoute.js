const express = require('express');
const router = express.Router();
const Card = require('../Models/cardModel');

router.post('/',async(req,res,next)=>{
    try{
        const card = new Card(req.body)
        const result = await card.save()
        res.send(result)
    }catch (error){
        console.log(error.message);
    }
});

router.get('/' , async(req,res,next)=>{
    try{
        const result = await Card.find();
        res.send(result);
    }catch(error){
        console.log(error.message);
    }
});

module.exports = router;
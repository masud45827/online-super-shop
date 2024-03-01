const express = require('express');
const router = express.Router();
const orderModel = require('../Models/orderModel')
router.post('/',async(req,res)=>{
    const createOrder = new orderModel(req.body);
    const result = await createOrder.save();
    res.status(201).json(result);
})
module.exports = router;
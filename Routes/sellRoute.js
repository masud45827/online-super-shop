const express = require('express');
const router = express.Router();
const Sell = require("../Models/sellModel.js");

router.post('', async (req, res)=>{
    const createSell = new Sell(req.body);
    const result = await createSell.save();
    // console.log("working...");
    // res.send("working...");
    res.send(createSell);
});

module.exports = router;

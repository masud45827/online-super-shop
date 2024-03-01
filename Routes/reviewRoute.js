const express = require('express');
const router = express.Router();
const Review = require("../Models/reviewModel.js");


router.post('', async (req, res)=>{
    const createReview = new Review(req.body);
    const result = await createReview.save();
    // console.log("working...");
    // res.send("working...");
    res.send(createReview);
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Review = require("../Models/reviewModel.js");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Images/Review') // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        let imgUrlName = Date.now() + path.extname(file.originalname);
        console.log(imgUrlName);
        cb(null, imgUrlName) // File name
    }
});

// Initialize multer
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res)=>{
    const createReview = new Review(req.body);
    createReview.image = req.file.filename;
    const result = await createReview.save();
    // console.log("working...");
    // res.send("working...");
    console.log(createReview);
    res.send("upload Image");
    // res.send(createReview);
});

module.exports = router;

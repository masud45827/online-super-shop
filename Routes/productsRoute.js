const express = require('express');
const router = express.Router();
const Product = require('../Models/productModel');
// for image I need require multer
const multer  = require('multer');
const path = require('path');

router.use(express.static('public'));

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null , path.join(__dirname,'../public/productImage'),(error,success)=>{
            if(error){
                console.log(error);
            }
        });
    },
    filename:(req,file,cb)=>{
        const name = Date.now() + '-'+ file.originalname;
        cb(null, name,()=>{
            if(error){
                console.log(error);
            }
        });
    }
});

const upload = multer({storage:storage});
router.post('/',upload.single('image'),async(req,res,next)=>{
    try{
        const product = new Product({
            product_name:req.body.product_name,
            product_catagory:req.body.product_catagory,
            product_quantity:req.body.product_quantity,
            image:req.file.filename,
            price:req.body.price,
            brand:req.body.brand,
            product_description:req.body.product_description,
            rating:req.body.rating,
            sell_count:req.body.sell_count,
        });
        const result = await product.save()
        res.send(result)
    }catch (error){
        console.log(error.message);
    }
});

router.get('/' , async(req,res,next)=>{
    try{
        const result = await Product.find();
        res.send(result);
    }catch(error){
        console.log(error.message);
    }
});

module.exports = router;
//this is for product attribute schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductScema = new Schema({
    product_name: {
        type: String,
        required: true
    },
    product_catagory: {
        type: String,
        required: true
    },
    product_quantity: {
        type: Number,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    product_description:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    sell_count:{
        type:Number,
        required:true
    },
});

const Product = mongoose.model('Product' , ProductScema);
module.exports = Product;
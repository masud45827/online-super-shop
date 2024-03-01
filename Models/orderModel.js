const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const userModel =  require('../Models/userModel')
// const Product = require('../Models/productModel')
const orderSchema = new mongoose.Schema(
{
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product_id: { type: Schema.Types.String, ref: 'Product', required: true },
    quantity: { type: Number, required: true }
});

const Order = mongoose.model('Order' , orderSchema);
module.exports = Order;
//this is for product attribute schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
});

const Card = mongoose.model('card' , CardSchema);
module.exports = Card;
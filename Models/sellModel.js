const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sellSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

// Create a model for the review
const Sell = mongoose.model('Sell', sellSchema);

module.exports = Sell;

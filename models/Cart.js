const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    image: {
       type: String,
       required: true 
    },
    title: {
        type: String,
        required: true 
     },
    price: {
        type: Number,
        required: true 
     },
    description: {
        type: String,
        required: true 
     },
    // stock: {type: Number}
}, {
    timestamps: true
});

module.exports = mongoose.model('Cart', cartSchema);
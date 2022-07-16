const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required:true
    },
    district: {
        type: String,
        required: true
    },
    sort: {
        type: String,
        required: true
    }

}, {
    // tự động thêm createdAt, updatedAt
    timestamps: true
});

const FoodModel = mongoose.model('Food', FoodSchema);

module.exports = FoodModel;

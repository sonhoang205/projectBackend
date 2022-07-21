const mongoose = require('mongoose');

const Dishchema = new mongoose.Schema({
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
    tags: {
        type: String,
        required: true
    }
}, {
    // tự động thêm createdAt, updatedAt
    timestamps: true
});

const DishModel = mongoose.model('Dish', Dishchema);

module.exports = DishModel;

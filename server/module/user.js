const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 30,
        min: 1
    },
    email: {
        type: String,
        required: true,
        max: 30,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 18,
        min: 6
    }
});

module.exports = mongoose.model('User', userSchema);
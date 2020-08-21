const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        max: 6,
        min: 30
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    }
});

module.exports = mongoose.model('User', userSchema);
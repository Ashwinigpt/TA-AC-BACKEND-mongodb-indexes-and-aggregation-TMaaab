var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String },
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    address: {
        city: String,
        state: String,
        country: String,
        pin: Number,
    }
});

userSchema.index({ email: 1, username: 1 }, { unique: true }, { 'address.state': 1 , 'address.country': 1});

module.exports = mongoose.model('User', userSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String },
    username: { type: String },
    email: { type: String },
    address: {
        city: String,
        state: String,
        country: String,
        pin: Number,
    }
});

userSchema.index({ email: 1, username: 1 }, { unique: true }),
userSchema.index({ 'address.state': 1 , 'address.country': 1}, { unique: true }),

module.exports = mongoose.model('User', userSchema);
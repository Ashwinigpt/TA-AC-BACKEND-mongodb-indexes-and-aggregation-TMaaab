var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema ({
    title: String,
    description: String,
    tags: [ String ]
});

articleSchema.index({ sports: 1 }, { title: "text" }, { description: "text" });

module.exports = mongoose.model('User', userSchema);
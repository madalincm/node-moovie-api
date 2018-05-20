var mongoose = require("mongoose");
var validator = require("validator");

var UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength:5,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = {User};
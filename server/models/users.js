var mongoose = require("mongoose");
var validator = require("validator");

var UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
          }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = {User};
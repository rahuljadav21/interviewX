const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"],
        maxlength: [100, "Username cannot be more than 100 characters"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        min: [6, "Password must be at least 6 characters"]
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        maxlength: [100, "Email cannot be more than 100 characters"],
        unique: true
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        default: "user"
    },
},
    { timestamps: true, });

module.exports = mongoose.model("User", userSchema);

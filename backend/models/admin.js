const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
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
    }
},
    { timestamps: true, });

module.exports = mongoose.model("Admin", adminSchema);

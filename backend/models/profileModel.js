const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
        maxlength: [100, "Name cannot be more than 100 characters"],
        unique: true
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
    batch: {
        type: Number,
        required: [true, "Please enter a batch"],
    },
    degree:{
        type: String,
        required: [true, "Please enter a degree"],
    },
    branch: {
        type: String,
        required: [true, "Please enter a branch"],
    },
    gender: {
        type: String,
        required:true
    },    
    jobRole: {
        type: String,
        required: [true, "Please enter a jobRole"],
    },
    company: {
        type: String,
        required: [true, "Please enter a company"],
    },
    resume: {
        type: String,
    },
    github: {
        type: String,
        unique: true
    },
    linkedin: {
        type: String,
        unique: true
    },
    twitter: {
        type: String,
        unique: true
    },
    leetcode: {
        type: String,
        unique: true
    },
    otherLink: {
        type: [String],
    },
    location: {
        type: String,
    },
    expLinks: {
        type: [String],
    },
},
    { timestamps: true, });

module.exports = mongoose.model("Profile", profileSchema);
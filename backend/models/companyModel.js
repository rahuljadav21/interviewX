const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, "Please enter a companyName"],
        maxlength: [100, "companyName cannot be more than 100 characters"],
        unique: true
    },                 
    companyWebsite: {
        type: String,
        required: [true, "Please enter a companyWebsite"],
    },
    companyLogo: {
        type: String,
    },
    companyDescription: {
        type: String,
        required: [true, "Please enter a companyDescription"],
    },
    companyType: {
        type: String,
        required: [true, "Please enter a companytype"],
    },
    CTC: {
        type: String,
        required: [true, "Please enter a CTC"],
    },
    diversity: {
        type: String,
        required: [true, "Please enter a diversity"],
    },
    hiringMonths: {
        type: String,
        required: [true, "Please enter a hiringMonths"],
    },
    
},
    { timestamps: true, });

module.exports = mongoose.model("Company", companySchema);
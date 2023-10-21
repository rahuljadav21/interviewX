const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    rounds:{
        type: Number,
        required: [true, "Please enter a rounds"],
    },
    difficulty:{
        type: String,
        required: [true, "Please enter a difficulty"],
    },
    experience:{
        type: String,
        required: [true, "Please enter a expirience"],
    },
    placementType:{
        type: String,
        required: [true, "Please enter a placementType"],
    },
    isPlaced:{
        type: Boolean,
        required: [true, "Please enter a isPlaced"],
    },
    company:{
        type: String,
        required: [true, "Please enter a company"],
    },
    user:{
        type: String,
        required: [true, "Please enter a user"],
    },
    profile:{
        type: String,
        required: [true, "Please enter a profile"],
    },
    CTCoffered:{
        type: String,
        required: [true, "Please enter a offer"],
    },
    feedback:{
        type: String,
        required: [true, "Please enter a feedback"],
    },
    location:{
        type: String,
        required: [true, "Please enter a location"],
    },
    mode:{
        type: String,
        required: [true, "Please enter a mode"],
    },

},
{ timestamps: true, });

module.exports = mongoose.model("Interview", interviewSchema);

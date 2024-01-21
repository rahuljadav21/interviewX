const mongoose = require('mongoose');

const InterviewExperienceSchema = new mongoose.Schema({
  batch: {
    type: String,
    required: [true, "Please add batch"]
  },
  branch: {
    type: String,
    required: [true, "Please add branch"]
  },
  candidateName: {
    type: String,
    required: [true, "Please add candidate's name"],
    minlength: [2, "Name should have at least 2 characters"],
    maxlength: [50, "Name cannot exceed 50 characters"]
  },
  codechef: {
    type: String,
    
  },
  codeforces: {
    type: String,
    
  },
  companyName: {
    type: String,
    required: [true, "Please add company name"],
    minlength: [2, "Minimum 2 characters required"],
    maxlength: [100, "Maximum 100 characters allowed"]
  },
  degree: {
    type: String,
    default: "B.Tech"
  },
  difficulty: {
    type: Number,
    default: 1
  },
  driveType: {
    type: String,
    minlength: [2, "Minimum 2 characters required"],
    maxlength: [50, "Maximum 50 characters allowed"]
  },
  email: {
    type: String,
    required: [true, "Please add email"],
    minlength: [5, "Minimum 5 characters required"],
    maxlength: [100, "Maximum 100 characters allowed"]
  },
  experience: {
    type: String,
  },
  hiringMonth: {
    type: String,
    require : [true, "Please add a valid month"],
  },
  hiringYear: {
    type: String,
    minlength: [4, "Please add a valid year"],
    maxlength: [4, "Please add a valid year"]
  },
  jobType: {
    type: String,
    minlength: [2, "Minimum 2 characters required"],
    maxlength: [50, "Maximum 50 characters allowed"]
  },
  leetcode: {
    type: String,
    
  },
  github: {
    type: String,
    
  },
  linkedIn: {
    type: String,
    
  },
  mobile: {
    type: String,
    
  },
  offeredCTC: {
    type: String,
    minlength: [2, "Minimum 2 characters required"],
    maxlength: [50, "Maximum 50 characters allowed"]
  },
  offeredRole: {
    type: String,
    minlength: [2, "Minimum 2 characters required"],
    maxlength: [100, "Maximum 100 characters allowed"]
  },
  rounds: {
    type: Number,
    min: [1, "Minimum 1 round required"],
  },
  verified: {
    type: Boolean,
    default: false
  },
});

const InterviewExperience = mongoose.model('InterviewExperience', InterviewExperienceSchema);

module.exports = InterviewExperience;

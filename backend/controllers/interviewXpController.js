const InterviewExperienceSchema = require('../models/interviewExperience');
const Company = require("../models/companyModel");

const createInterviewExperience = async (req, res) => {
    try {
        const interviewExperience = await InterviewExperienceSchema.create(req.body);
        const company = await Company.create({
            companyName:req.body.companyName,
            label:req.body.companyName
        })
        res.status(201).json({ interviewExperience });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getVerifiedInterviewExperiences = async (req, res) => {

    try {
        const interviewExperiences = await InterviewExperienceSchema.find({ verified: true });
        res.status(200).json({
            count: interviewExperiences.length,
            interviewExperiences
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getInterviewExperiences = async (req, res) => {

    try {
        const interviewExperiences = await InterviewExperienceSchema.find({});
        res.status(200).json({
            count: interviewExperiences.length,
            interviewExperiences
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getInterviewExperienceById = async (req, res) => {
    try {
        const interviewExperience = await InterviewExperienceSchema.findById(req.params.id);
        res.status(200).json({ interviewExperience });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteInterviewExperienceById = async (req, res) => {
    try {
        const interviewExperience = await InterviewExperienceSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({ interviewExperience });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const verifyInterviewExperienceById = async (req, res) => {
    try {
        const interviewExperience = await InterviewExperienceSchema.findByIdAndUpdate(req.params.id, { verified: true });
        res.status(200).json({ interviewExperience });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {createInterviewExperience, getVerifiedInterviewExperiences, getInterviewExperiences, getInterviewExperienceById, verifyInterviewExperienceById,deleteInterviewExperienceById}; 


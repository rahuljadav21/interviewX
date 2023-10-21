const Interview = require("../models/interviewModel");

const createInterview = async (req, res) => {
    try {
        const interview = await Interview.create(req.body);
        res.status(201).json({ interview });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getInterviews = async (req, res) => {

    try {
        const interviews = await Interview.find({});
        res.status(200).json({
            count: interviews.length,
            interviews
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getInterviewByCompany = async (req, res) => {
    try {
        const interviews = await Interview.find({ company: req.params.company });
        res.status(200).json({
            count: interviews.length,
            interviews
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getInterviewByUser = async (req, res) => {
    try {
        const interviews = await Interview.find({ user: req.params.user });
        res.status(200).json({
            count: interviews.length,
            interviews
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getInterview = async (req, res) => {
    try {
        const interview = await Interview.findById(req.params.id);
        res.status(200).json({ interview });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateInterview = async (req, res) => {
    try {
        const interview = await Interview.findById(req.params.id);
        if (!interview) return res.status(404).json({ message: "Interview not found" });

        const updatedInterview = await Interview.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({ interview: updatedInterview });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteInterview = async (req, res) => {
    try {
        const interview = await Interview.findById(req.params.id);
        if (!interview) return res.status(404).json({ message: "Interview not found" });
        await interview.deleteOne();

        res.status(200).json({ interview });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    createInterview,
    getInterviews,
    getInterviewByCompany,
    getInterviewByUser,
    getInterview,
    updateInterview,
    deleteInterview
}




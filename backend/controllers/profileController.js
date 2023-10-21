const Profile = require("../models/profileModel");
const User = require("../models/userModel");

const createProfile = async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.status(201).json({ profile });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getProfiles = async (req, res) => {

    try {
        const profiles = await Profile.find({});
        res.status(200).json({
            count: profiles.length,
            profiles
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getProfileByCompany = async (req, res) => {
    try {
        const profiles = await Profile.find({ company: req.params.company });
        res.status(200).json({
            count: profiles.length,
            profiles
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getProfileByUser = async (req, res) => {
    try {
        const profiles = await Profile.find({ user: req.params.user });
        res.status(200).json({
            count: profiles.length,
            profiles
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getProfileByDegree = async (req, res) => {
    try {
        const profiles = await Profile.find({ degree: req.params.degree });
        res.status(200).json({
            count: profiles.length,
            profiles
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}   

const getProfile = async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);
        res.status(200).json({ profile });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateProfile = async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);
        if (!profile) return res.status(404).json({ message: "Profile not found" });

        const updatedProfile = await Profile.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({ profile: updatedProfile });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteProfile = async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);
        if (!profile) return res.status(404).json({ message: "Profile not found" });
        await profile.deleteOne();

        res.status(200).json({ profile });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { createProfile, getProfiles, getProfileByCompany, getProfileByUser,getProfileByDegree,getProfile, updateProfile, deleteProfile };

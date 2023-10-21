const User = require("../models/userModel");
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getUsers = async (req, res) => {

    try {
        const users = await User.find({});
        res.status(200).json({
            count: users.length,
            users
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({ user: updatedUser });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        await user.deleteOne();

        res.status(200).json({ user });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
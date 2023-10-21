const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');


const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ msg: "Please enter all fields!!" });
        }
        if (validator.isEmail(email) == false) {
            return res.status(400).json({ msg: "Please enter valid email" });
            // throw new Error("Please enter valid email");
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);


        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            // passwordConfirm:req.body.passwordConfirm,
            photo: req.body.photo
        });
        const user = await newUser.save();
        res.status(200).json(user);

    } catch (err) {
        res.status(400).json(err);
    }
};

const login = async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        // console.log(isMatch);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials,Password Not Match" });
        }

        const { password, role, ...rest } = user._doc;

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "15d" }
        );

        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn,
            sameSite: "strict"
        }).status(200).json({ token, ...rest, role });



    } catch (err) {
        return res.status(400).json({ msg: "Invalid credentials,Acces not Granted" });
    }
};

module.exports = { register, login };

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
        return res.status(401).json({ msg: "Unauthorized" });
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        req.user = user;
        next();
    });
}

const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id == req.params.id || req.user.role == 'admin') {
            next();
        } else {
            return res.status(401).json({ msg: "Unauthorized" });
        }
    });
}

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.role == 'admin') {
            next();
        } else {
            return res.status(401).json({ msg: "Unauthorized" });
        }
    });
}

module.exports = { verifyToken, verifyUser, verifyAdmin };
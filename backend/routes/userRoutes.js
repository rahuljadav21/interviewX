const express = require("express");
const router = express.Router();
const { getUsers, getUser, createUser, deleteUser, updateUser } = require("../controllers/userController");
// const { verifyUser, verifyAdmin } = require("../middleware/authMiddleware");

// router.route("/").get(verifyAdmin, getUsers).post(createUser);
// router.route("/:id").get(verifyUser, getUser).delete(verifyUser, deleteUser).put(verifyUser, updateUser);

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);


module.exports = router;

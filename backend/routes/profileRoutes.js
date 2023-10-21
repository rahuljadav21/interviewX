const express = require("express");
const router = express.Router();
const {getProfiles, getProfileByCompany, getProfileByUser,getProfileByDegree, getProfile, createProfile, updateProfile} = require("../controllers/profileController");
// const { verifyUser, verifyAdmin } = require("../middleware/authMiddleware");

// router.route("/").get(verifyAdmin, getProfiles).post(verifyUser, createProfile);
// router.route("/:id").get(verifyUser, getProfile).put(verifyUser, updateProfile);

// router.route("/company/:company").get(verifyUser, getProfileByCompany);
// router.route("/user/:user").get(verifyUser, getProfileByUser);
// router.route("/degree/:degree").get(verifyUser, getProfileByDegree);

router.route("/").get(getProfiles).post(createProfile);
router.route("/:id").get(getProfile).put(updateProfile);

router.route("/company/:company").get(getProfileByCompany);
router.route("/user/:user").get(getProfileByUser);
router.route("/degree/:degree").get(getProfileByDegree);


module.exports = router;


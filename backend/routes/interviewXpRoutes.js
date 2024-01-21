const express = require("express");
const router = express.Router();
const { createInterviewExperience, 
    getInterviewExperiences,
    getInterviewExperienceById,
    deleteInterviewExperienceById,
    getVerifiedInterviewExperiences,
    verifyInterviewExperienceById
 } = require('../controllers/interviewXpController');

router.route("/").post(createInterviewExperience);
router.route("/all").get(getInterviewExperiences);
router.route("/:id").get(getInterviewExperienceById);
router.route("/:id/delete").delete(deleteInterviewExperienceById); 
router.route("/").get(getVerifiedInterviewExperiences);
router.route("/:id/verify").put(verifyInterviewExperienceById);

module.exports = router;


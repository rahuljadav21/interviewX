const express = require("express");
const router = express.Router();
const { createInterview,
    getInterviews,
    getInterviewByCompany,
    getInterviewByUser,
    getInterview,
    updateInterview,
    deleteInterview } = require("../controllers/interviewController");
// const { verifyUser, verifyAdmin } = require("../middleware/authMiddleware");

// router.route("/").get(verifyUser, getInterviews).post(verifyUser, createInterview);
// router.route("/:id").get(verifyUser, getInterview).put(verifyUser, updateInterview).delete(verifyUser, deleteInterview);
// router.route("/company/:company").get(verifyUser, getInterviewByCompany);
// router.route("/user/:user").get(verifyUser, getInterviewByUser);

router.route("/").get(getInterviews).post(createInterview);
router.route("/:id").get(getInterview).put(updateInterview).delete(deleteInterview);
router.route("/company/:company").get(getInterviewByCompany);
router.route("/user/:user").get(getInterviewByUser);

module.exports = router;


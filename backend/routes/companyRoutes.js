const express = require("express");
const router = express.Router();
const {getCompany, getCompanies, createCompany, updateCompany, deleteCompany} = require("../controllers/companyController");
// const { verifyUser, verifyAdmin } = require("../middleware/authMiddleware");

// router.route("/").get(verifyUser, getCompanies).post(verifyAdmin, createCompany);
// router.route("/:id").get(verifyUser, getCompany).put(verifyAdmin, updateCompany).delete(verifyAdmin, deleteCompany);

router.route("/").get(getCompanies).post(createCompany);
router.route("/:id").get(getCompany).put(updateCompany).delete(deleteCompany);

module.exports = router;

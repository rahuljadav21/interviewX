const Company = require("../models/companyModel");

const createCompany = async (req, res) => {
    try {
        const company = await Company.create(req.body);
        res.status(201).json({ company });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getCompanies = async (req, res) => {

    try {
        const companies = await Company.find({});
        res.status(200).json({
            count: companies.length,
            companies
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getCompany = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        res.status(200).json({ company });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateCompany = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) return res.status(404).json({ message: "Company not found" });

        const updatedCompany = await Company.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({ company: updatedCompany });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteCompany = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) return res.status(404).json({ message: "Company not found" });
        await company.deleteOne();

        res.status(200).json({ company });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { createCompany, getCompanies, getCompany, updateCompany, deleteCompany };

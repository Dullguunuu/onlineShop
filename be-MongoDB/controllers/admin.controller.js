const Admin = require("../models/admin.model")

exports.getAll = async (req, res) => {
    try {
        const getAllAdmin = await Admin.find({});
        res.json({ status: true, result: getAllAdmin });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.getOne = async (req, res) => {
    const { _id } = req.params;
    try {
        const getOneAdmin = await Admin.findById({ _id });
        res.json({ status: true, result: getOneAdmin });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.create = async (req, res) => {
    try {
        const createdAdmin = await Admin.create(req.body);
        res.json({ status: true, result: createdAdmin });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.update = async (req, res) => {
    const { _id } = req.params;
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate({ _id }, req.body, { new: true, });
        res.json({ status: true, result: updatedAdmin });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.delete = async (req, res) => {
    const { _id } = req.params;
    try {
        const deletedAdmin = await Admin.deleteOne({ _id });
        res.json({ status: true, result: deletedAdmin });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};


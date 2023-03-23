const Category = require("../models/category.model")

exports.getAll = async (req, res) => {
    try {
        const getAllCategories = await Category.find({});
        res.json({ status: true, result: getAllCategories });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.getOne = async (req, res) => {
    const { _id } = req.params;
    try {
        const getOneCategory = await Category.findById({ _id });
        res.json({ status: true, result: getOneCategory });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.create = async (req, res) => {
    try {
        const createdCategory = await Category.create(req.body);
        res.json({ status: true, result: createdCategory });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.update = async (req, res) => {
    const { _id } = req.params;
    try {
        const updatedCategory = await Category.findByIdAndUpdate({ _id }, req.body, { new: true, });
        res.json({ status: true, result: updatedCategory });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.delete = async (req, res) => {
    const { _id } = req.params;
    try {
        const deletedCategory = await Category.deleteOne({ _id });
        res.json({ status: true, result: deletedCategory });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};


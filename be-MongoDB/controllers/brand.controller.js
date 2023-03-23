const Brand = require("../models/brand.model")


exports.getAll = async (req, res) => {
    try {
        const getAllBrand = await Brand.find({});
        res.json({ status: true, result: getAllBrand });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.getOne = async (req, res) => {
    const { _id } = req.params;
    try {
        const getOneBrand = await Brand.findById({ _id });
        res.json({ status: true, result: getOneBrand });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.create = async (req, res) => {
    try {
        const createdBrand = await Brand.create(req.body);
        res.json({ status: true, result: createdBrand });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.update = async (req, res) => {
    const { _id } = req.params;
    try {
        const updatedBrand = await Brand.findByIdAndUpdate({ _id }, req.body, { new: true, });
        res.json({ status: true, result: updatedBrand });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.delete = async (req, res) => {
    const { _id } = req.params;
    try {
        const deletedBrand = await Brand.deleteOne({ _id });
        res.json({ status: true, result: deletedBrand });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};


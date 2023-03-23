const Product = require("../models/product.model")

exports.getAll = async (req, res) => {
    try {
        const getAllProduct = await Product.find({});
        res.json({ status: true, result: getAllProduct });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.getOne = async (req, res) => {
    const { _id } = req.params;
    try {
        const getOneProduct = await Product.findById({ _id });
        res.json({ status: true, result: getOneProduct });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.create = async (req, res) => {
    try {
        const createdProduct = await Product.create(req.body);
        res.json({ status: true, result: createdProduct });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.update = async (req, res) => {
    const { _id } = req.params;
    try {
        const updatedProduct = await Product.findByIdAndUpdate({ _id }, req.body, { new: true, });
        res.json({ status: true, result: updatedProduct });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.delete = async (req, res) => {
    const { _id } = req.params;
    try {
        const deletedProduct = await Product.deleteOne({ _id });
        res.json({ status: true, result: deletedProduct });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};


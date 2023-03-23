const Customer = require("../models/customer.model")

exports.getAll = async (req, res) => {
    try {
        const getAllCustomer = await Customer.find({});
        res.json({ status: true, result: getAllCustomer });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.getOne = async (req, res) => {
    const { _id } = req.params;
    try {
        const getOneCustomer = await Customer.findById({ _id });
        res.json({ status: true, result: getOneCustomer });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.create = async (req, res) => {
    try {
        const createdCustomer = await Customer.create(req.body);
        res.json({ status: true, result: createdCustomer });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.update = async (req, res) => {
    const { _id } = req.params;
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate({ _id }, req.body, { new: true, });
        res.json({ status: true, result: updatedCustomer });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.delete = async (req, res) => {
    const { _id } = req.params;
    try {
        const deletedCustomer = await Customer.deleteOne({ _id });
        res.json({ status: true, result: deletedCustomer });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};


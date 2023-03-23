const Order = require("../models/order.model")

exports.getAll = async (req, res) => {
    try {
        const getAllOrder = await Order.find({}).populate("customerId").populate("productId");
        res.json({ status: true, result: getAllOrder });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.getOne = async (req, res) => {
    const { _id } = req.params;
    try {
        const getOneOrder = await Order.findById({ _id }).populate("customerId").populate("productId");
        res.json({ status: true, result: getOneOrder });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.create = async (req, res) => {
    try {
        const createdOrder = await Order.create(req.body).populate("customerId").populate("productId");
        res.json({ status: true, result: createdOrder });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.update = async (req, res) => {
    const { _id } = req.params;
    try {
        const updatedOrder = await Order.findByIdAndUpdate({ _id }, req.body, { new: true, }).populate("customerId").populate("productId");
        res.json({ status: true, result: updatedOrder });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.delete = async (req, res) => {
    const { _id } = req.params;
    try {
        const deletedOrder = await Order.deleteOne({ _id });
        res.json({ status: true, result: deletedOrder });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};


const Menu = require("../models/menu.model")

exports.getAll = async (req, res) => {
    try {
        const getAllMenu = await Menu.find({});
        res.json({ status: true, result: getAllMenu });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.getOne = async (req, res) => {
    const { _id } = req.params;
    try {
        const getOneMenu = await Menu.findById({ _id });
        res.json({ status: true, result: getOneMenu });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.create = async (req, res) => {
    try {
        const createdMenu = await Menu.create(req.body);
        res.json({ status: true, result: createdMenu });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.update = async (req, res) => {
    const { _id } = req.params;
    try {
        const updatedMenu = await Menu.findByIdAndUpdate({ _id }, req.body, { new: true, });
        res.json({ status: true, result: updatedMenu });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.delete = async (req, res) => {
    const { _id } = req.params;
    try {
        const deletedMenu = await Menu.deleteOne({ _id });
        res.json({ status: true, result: deletedMenu });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};


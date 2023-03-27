const Admin = require("../models/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const dotenv = require("dotenv");
const getToken = require("../middleware/getToken");

dotenv.config();


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

exports.register = async (req, res) => {
    const { firstName, lastName, userName, email, phone, image, password } = req.body;

    if (!firstName || !lastName || !userName || !email || !phone || !image || !password) {
        res
            .status(500)
            .send({ status: false, message: "Medeelelee buren oruulna uu" });
        return;
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    if (hashedPassword) {
        const newAdmin = new Admin({
            firstName,
            lastName,
            userName,
            email,
            phone,
            image,
            password: hashedPassword,
        });

        const result = await newAdmin.save();

        if (result) {
            res.status(200).send({
                status: true,
                message: "Amjilttai hadgalalgdlaa",
            });
            return;
        } else {
            res.status(500).send({
                status: false,
                message: "Hadgalahad aldaa garlaa",
            });
            return;
        }
    } else {
        res.status(500).send({
            status: false,
            message: "Password amjilttai encrypt hiigdeegui bna",
        });
        return;
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res
            .status(500)
            .send({ status: false, message: "Medeelelee buren oruulna uu" });
        return;
    }

    const oneAdmin = await Admin.findOne({ email });

    if (oneAdmin && (await bcrypt.compare(password, oneAdmin.password))) {

        const token = getToken(oneAdmin)

        res
            .status(200)
            .send({ status: true, data: oneAdmin, message: "Success", token });
        return;
    } else {
        res.status(400).send({
            status: false,
            message: "The password or email you’ve entered is incorrect. ",
        });
        return;
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


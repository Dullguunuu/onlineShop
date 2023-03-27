const Customer = require("../models/customer.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const dotenv = require("dotenv");
const getToken = require("../middleware/getToken");

dotenv.config();

const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY;

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

exports.register = async (req, res) => {
    const { firstName, lastName, userName, phone, email, password } = req.body;

    if (!firstName || !lastName || !userName || !phone || !email || !password) {
        res
            .status(500)
            .send({ status: false, message: "Medeelelee buren oruulna uu" });
        return;
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    if (hashedPassword) {
        const newCustomer = new Customer({
            firstName,
            lastName,
            userName,
            phone,
            email,
            password: hashedPassword,
        });

        const result = await newCustomer.save();

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

    const oneCustomer = await Customer.findOne({ email });

    if (oneCustomer && (await bcrypt.compare(password, oneCustomer.password))) {

        const token = getToken(oneCustomer)
        // const token = jwt.sign({ user: oneCustomer }, process.env.TOKEN_SECRET_KEY, {
        //     expiresIn: "24h",
        // });

        res
            .status(200)
            .send({ status: true, data: oneCustomer, message: "Success", token });
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


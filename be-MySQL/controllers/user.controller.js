const { response } = require("express");
const fs = require("fs");
const { request } = require("http");
const { parse } = require("path");
const uuid = require("uuid");

const userService = require("../model/user-service")

exports.get = async (req, res) => {
    const { id } = req.params
    if (!id)
        return res.json({ status: false, message: "user id not found" })
    try {
        const result = await userService.getUser(id);
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err })
    }
}

exports.getAll = async (req, res) => {
    const { limit } = req.query;
    try {
        const result = await userService.getUsers(limit);
        if (result && result.length > 0) {
            res.json({ status: true, result })
        }
    } catch (err) {
        console.log(err);
        res.json({ status: false, message: err })
    }
}

exports.create = async (req, res) => {
    const { firstName, lastName, username, email, phone, image, password } = req.body;

    const newObj = { firstname, lastname, email };

    try {
        const result = await userService.createUser(newObj);
        if (result && result.affectedRows > 0) {
            res.json({ status: true, message: "Success" })
        } else {
            res.json({ status: false, message: "Nemehed aldaa garlaa" })
        }
    } catch (err) {
        res.json({ status: false, message: err })
    }

}

exports.update = async (req, res) => {

    const { id } = req.params;

    if (!id)
        return res.json({ status: false, message: "user id not found" })

    try {
        const result = await userService.updateUser(id, req.body);
        if (result && result[0].affectedRows > 0) {
            res.json({ status: true, message: "Success" })
        } else {
            res.json({ status: false, message: "Zasahad aldaa garlaa" })
        }
    } catch (err) {
        res.json({ status: false, message: err })
    }
}

exports.delete = async (req, res) => {
    const { id } = req.params;

    if (!id)
        return res.json({ status: false, message: "user id not found" })

    try {
        const result = await userService.deleteUser(id);
        if (result && result.affectedRows > 0) {
            res.json({ status: true, message: "Success" })
        } else {
            res.json({ status: false, message: "Successfully deleted" })
        }
    } catch (err) {
        res.json({ status: false, message: err })
    }

}
const { response } = require("express");
const fs = require("fs");
const { request } = require("http");
const { parse } = require("path");
const uuid = require("uuid")

const dataFile = process.cwd() + "/data/menu.json";

exports.get = (req, res) => {
    const { id } = req.params
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const menuData = data ? JSON.parse(data) : []

        const filteredMenu = menuData.filter((e) => e.id == id)
        return res.json({ status: true, result: filteredMenu })
    })
}

exports.getAll = (req, res) => {
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const savedData = data ? JSON.parse(data) : []

        return res.json({ status: true, result: savedData })
    })
};

exports.create = (request, res) => {
    const { menuName, link, position } = request.body;
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : []
        const newObj = { id: uuid.v4(), menuName, link, position }

        parsedData.push(newObj);

        fs.writeFile(dataFile, JSON.stringify(parsedData), (writeErr) => {
            if (writeErr) {
                return res.json({ status: false, message: writeErr })
            }
            return res.json({ status: true, result: parsedData })
        })
    })
};

exports.update = (req, res) => {
    const { menuName, link, position } = req.body;
    const { id } = req.params
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }
        const parsedData = data ? JSON.parse(data) : [];

        const updateData = parsedData.map((menuObj) => {
            if (menuObj.id == id) {
                return { ...menuObj, menuName, link, position }
            } else {
                return menuObj
            }
        })

        fs.writeFile(dataFile, JSON.stringify(updateData), (writeErr) => {
            if (writeErr) {
                return res.json({ status: false, message: writeErr });
            }
            return res.json({ status: true, result: updateData })
        })
    })
}

exports.delete = (req, res) => {
    const { id } = req.params;
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : []

        const deletedData = parsedData.filter((e) => e.id != id)

        fs.writeFile(dataFile, JSON.stringify(deletedData), (writeErr) => {
            if (writeErr) {
                return res.json({ status: false, message: writeErr })
            }
            return res.json({ status: true, result: deletedData })
        })
    })
}
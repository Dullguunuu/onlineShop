const fs = require("fs");
const { parse } = require("path");
const uuid = require("uuid");

const dataFile = process.cwd() + "/data/user.json"

exports.get = (req, res) => {
    const { id } = req.params
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const userData = data ? JSON.parse(data) : [];

        const filteredUser = userData.filter((e) => e.id == id)
        return res.json({ status: true, result: filteredUser })
    })
}

exports.getAll = (req, res) => {
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const savedData = data ? JSON.parse(data) : [];
        return res.json({ status: true, result: savedData })
    })
}

exports.create = (req, res) => {
    const { firstName, lastName, username, email, phone, image, password } = req.body;
    console.log(req.body)
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : [];

        const newObj = { id: uuid.v4(), firstName, lastName, username, email, phone, image, password };
        parsedData.push(newObj)

        fs.writeFile(dataFile, JSON.stringify(parsedData), (writeErr) => {
            if (writeErr) {
                return res.json({ status: false, message: writeErr })
            }
            return res.json({ status: true, result: parsedData })
        })
    })
}

exports.update = (req, res) => {
    const { firstName, lastName, username, email, phone, image, password } = req.body;
    const { id } = req.params;

    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : [];

        const updateData = parsedData.map((userObj) => {
            if (userObj.id == id) {
                return { ...userObj, firstName, username, lastName, email, phone, image, password }
            }
            else {
                return userObj
            }
        })

        fs.writeFile(dataFile, JSON.stringify(updateData), (writeErr) => {
            if (writeErr) {
                return res.json({ status: false, message: writeErr })
            } else {
                return res.json({ status: true, result: updateData })
            }
        })
    })

}

exports.delete = (req, res) => {
    const { id } = req.params;

    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : [];

        const deletedData = parsedData.filter((e) => e.id != id)

        fs.writeFile(dataFile, JSON.stringify(deletedData), (writeErr) => {
            if (writeErr) {
                return res.json({ status: false, message: writeErr })
            }
            return res.json({ status: true, result: deletedData })
        })
    })
}
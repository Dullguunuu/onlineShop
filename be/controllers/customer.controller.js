const fs = require("fs");
const { parse } = require("path");
const uuid = require("uuid");

const dataFile = process.cwd() + "/data/customer.json"

exports.get = (req, res) => {
    const { id } = req.params
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const customerData = data ? JSON.parse(data) : []

        const filteredCustomer = customerData.filter((e) => e.id == id)
        return res.json({ status: true, result: filteredCustomer })
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
    const { firstName, lastName, username, phone, email, password } = req.body;
    console.log(req.body)
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : [];

        const newObj = { id: uuid.v4(), firstName, lastName, username, phone, email, password };
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
    const { firstName, lastName, username, phone, email, password } = req.body;
    const { id } = req.params;

    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : [];

        const updateData = parsedData.map((customerObj) => {
            if (customerObj.id == id) {
                return { ...customerObj, firstName, lastName, username, phone, email, password }
            }
            else {
                return customerObj
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


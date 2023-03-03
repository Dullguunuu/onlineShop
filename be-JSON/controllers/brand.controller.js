const fs = require("fs");
const { parse } = require("path");
const uuid = require("uuid");

const dataFile = process.cwd() + "/data/brand.json"

exports.get = (req, res) => {
    const { id } = req.params
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const brandData = data ? JSON.parse(data) : [];

        const filteredBrand = brandData.filter((e) => e.id == id)
        return res.json({ status: true, result: filteredBrand })
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
    const { brandName, brandLink } = req.body;
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : [];

        const newObj = { id: uuid.v4(), brandName, brandLink };
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
    const { brandName, brandLink } = req.body;
    const { id } = req.params;

    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : [];

        const updateData = parsedData.map((brandObj) => {
            if (brandObj.id == id) {
                return { ...brandObj, brandName, brandLink }
            }
            else {
                return brandObj
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
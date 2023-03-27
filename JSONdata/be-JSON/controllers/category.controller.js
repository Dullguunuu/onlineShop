const fs = require("fs")
const uuid = require("uuid")

const dataFile = process.cwd() + "/data/category.json";

exports.get = (req, res) => {
    const { id } = req.params
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const cateData = data ? JSON.parse(data) : []

        const filteredCate = cateData.filteredCate((e) => e.id == id)
        return res.json({ status: true, result: filteredCate })
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
}

exports.create = (req, res) => {
    const { categoryName, categoryLink } = req.body;
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : [];
        const newObj = { id: uuid.v4(), categoryName, categoryLink };
        parsedData.push(newObj);

        fs.writeFile(dataFile, JSON.stringify(parsedData), (writeErr) => {
            if (writeErr) {
                return res.json({ status: false, message: writeErr })
            }
            return res.json({ status: true, result: parsedData })
        })
    })
}

exports.update = (req, res) => {
    const { categoryName, categoryLink } = req.body;
    const { id } = req.params;
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : []

        const updateData = parsedData.map((cateObj) => {
            if (cateObj.id == id) {
                return { ...cateObj, categoryName, categoryLink }
            }
            else {
                return cateObj
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
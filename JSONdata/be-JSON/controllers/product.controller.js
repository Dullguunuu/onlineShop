const fs = require("fs");
const { parse } = require("path");
const uuid = require("uuid");

const dataFile = process.cwd() + "/data/product.json"

exports.get = (req, res) => {
    const { id } = req.params
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const productData = data ? JSON.parse(data) : [];

        const filteredProduct = productData.filter((e) => e.id == id)
        return res.json({ status: true, result: filteredProduct })
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
    const { productName, categoryId, brandId, price, salePercent, description, quantity, thumbImage, images, updateDate, createdUser, updatedUser } = req.body;
    console.log(req.body)
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : [];

        const newObj = { id: uuid.v4(), productName, categoryId, brandId, price, salePercent, description, quantity, thumbImage, images, createdDate: Date.now(), updateDate, createdUser, updatedUser };
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
    const { productName, categoryId, brandId, price, salePercent, description, quantity, thumbImage, images, createdDate, createdUser, updatedUser } = req.body;
    const { id } = req.params;

    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : [];

        const updateData = parsedData.map((productObj) => {
            if (productObj.id == id) {
                return { ...productObj, productName, categoryId, brandId, price, salePercent, description, quantity, thumbImage, images, createdDate, updateDate: Date.now(), createdUser, updatedUser }
            }
            else {
                return productObj
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
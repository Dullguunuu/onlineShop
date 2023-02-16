const fs = require("fs");
const { parse } = require("path");
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const saltRounds = 3;
const myKey = "1234!@#$"

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
    fs.readFile(dataFile, "utf-8", async (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : [];

        const newPassword = await bcrypt.hash(password + myKey, saltRounds)

        const newObj = {
            id: uuid.v4(),
            firstName,
            lastName,
            username,
            phone,
            email,
            password: newPassword,
            favoriteProducts: [],
            mostViewProducts: [],
            createdDate: Date.now(),
        };

        parsedData.push(newObj)

        fs.writeFile(dataFile, JSON.stringify(parsedData), (writeErr) => {
            if (writeErr) {
                return res.json({ status: false, message: writeErr })
            }
            return res.json({ status: true, message: "Successfully Added", result: parsedData })
        })
    })
}

exports.update = (req, res) => {
    const { firstName, lastName, username, phone, email, password, favoriteProducts, mostViewProducts, lastLoginDate } = req.body;
    const { id } = req.params;

    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : [];

        const updateData = parsedData.map((customerObj) => {
            if (customerObj.id == id) {
                return {
                    ...customerObj,
                    firstName,
                    lastName,
                    username,
                    phone,
                    email,
                    password,
                    favoriteProducts,
                    mostViewProducts,
                    lastLoginDate,
                    updateData: Date.now()
                }
            }
            else {
                return customerObj
            }
        })

        fs.writeFile(dataFile, JSON.stringify(updateData), (writeErr) => {
            if (writeErr) {
                return res.json({ status: false, message: writeErr })
            } else {
                return res.json({ status: true, result: "Successfully Updated" })
            }
        })
    })

}

exports.delete = (req, res) => {
    const { id } = req.params;

    if (!id)
        return res.json({ status: false, message: "user ID not found" })

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
            return res.json({ status: true, result: "Successfully Deleted" })
        })
    })
}

exports.login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.json({
            status: false,
            message: "The password or email you’ve entered is incorrect. "
        })

    fs.readFile(dataFile, "utf-8", async (readErr, data) => {
        if (readErr)
            ({
                status: false, message: readErr
            })

        const parsedData = data ? JSON.parse(data) : [];
        let user;
        for (let i = 0; i < parsedData.length; i++) {
            if (email == parsedData[i].email) {
                const decrypt = await bcrypt.compare(
                    password + myKey,
                    parsedData[i].password
                );

                if (decrypt) {
                    user = {
                        id: parsedData[i].id,
                        username: parsedData[i].username,
                        firstName: parsedData[i].firstName,
                        lastName: parsedData[i].lastName,
                        phone: parsedData[i].phone,
                        email: parsedData[i].email,
                    };
                    break;
                }
            }
        }

        console.log(user)

        if (user) {
            return res.json({
                status: true,
                result: user,
            });
        }
        else {
            return res.json({
                status: false,
                message: "The password or email you’ve entered is incorrect."
            })
        }
    })
}


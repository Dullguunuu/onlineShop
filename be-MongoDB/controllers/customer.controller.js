const Customer = require("../models/customer.model")

exports.getAll = async (req, res) => {
    const getAllCustomer = await Customer.find();
    console.log(getAllCustomer);
    res.json({ message: "Test", result: getAllCustomer });
};

exports.create = async (req, res) => {
    const newCustomer = { firstName: "", lastName: "", userName: "", phone: 0, email: "", likedProducts: [], password: "" };
    const createCustomer = await Customer.create(newCustomer);
    console.log(createCustomer);
    res.json({ message: "Success", result: createCustomer });
};
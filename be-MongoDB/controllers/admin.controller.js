const Admin = require("../models/admin.model")

exports.getAll = async (req, res) => {
    const getAllAdmin = await Admin.find();
    console.log(getAllAdmin);
    res.json({ message: "Test", result: getAllAdmin });
};

exports.create = async (req, res) => {
    const newAdmin = { firstName: "", lastName: "", userName: "", email: "", phone: 0, image: "", password: "" };
    const createAdmin = await Admin.create(newAdmin);
    console.log(createAdmin);
    res.json({ message: "Success", result: createAdmin });
};

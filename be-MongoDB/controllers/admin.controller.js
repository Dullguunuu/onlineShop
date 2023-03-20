const Admin = require("../models/admin.model")

exports.getAll = async (req, res) => {
    const getAllAdmin = await Admin.find();
    console.log(getAllAdmin);
    res.json({ message: "Test", result: getAllAdmin });
};

exports.create = async (req, res) => {
    const newAdmin = { firstName: "Samsung", categoryLink: "/samsung" };
    const createAdmin = await Category.create(newAdmin);
    console.log(createAdmin);
    res.json({ message: "Success", result: createAdmin });
};


// firstName: String,
// lastName: String,
// userName: String,
// email: String,
// phone: Number,
// image: Buffer,
// password: SchemaTypes,
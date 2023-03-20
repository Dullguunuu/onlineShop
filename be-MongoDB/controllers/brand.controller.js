const Brand = require("../models/brand.model")

exports.getAll = async (req, res) => {
    const getAllBrand = await Brand.find();
    console.log(getAllBrand);
    res.json({ message: "Test", result: getAllBrand });
};

exports.create = async (req, res) => {
    const newBrand = { BrandName: "Samsung", BrandLink: "/samsung" };
    const createBrand = await Brand.create(newBrand);
    console.log(createBrand);
    res.json({ message: "Success", result: createBrand });
};

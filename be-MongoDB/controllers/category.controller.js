const Category = require("../models/category.model")

exports.getAll = async (req, res) => {
    const getAllCate = await Category.find();
    console.log(getAllCate);
    res.json({ message: "Test", result: getAllCate });
};

exports.create = async (req, res) => {
    const newCate = { categoryName: "Samsung", categoryLink: "/samsung" };
    const createCate = await Category.create(newCate);
    console.log(createCate);
    res.json({ message: "Success", result: createCate });
};
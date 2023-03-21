const Product = require("../models/product.model")

exports.getAll = async (req, res) => {
    const getAllProduct = await Product.find();
    console.log(getAllProduct);
    res.json({ message: "Test", result: getAllProduct });
};

exports.create = async (req, res) => {
    const newProduct = {
        productName: "", categoryId: "", brandId: "", price: 0, salePercent: 0, description: "",
        quantity: 0, thumbImage: "", images: [], createdUser: ""
    };
    const createProduct = await Product.create(newProduct);
    console.log(createProduct);
    res.json({ message: "Success", result: createProduct });
};
const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        productName: String,
        categoryId: String,
        brandId: String,
        price: Number,
        salePercent: Number,
        description: String,
        quantity: Number,
        thumbImage: String,
        images: [String],
        createdUser: String,
    },
    { collection: "Products", timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;


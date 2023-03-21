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
        createdDate: {
            type: Date,
            default: Date.now
        },
        createdUser: String,
    },
    { collection: "Products" }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;


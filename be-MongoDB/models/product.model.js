const { default: mongoose, Schema } = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        productName: String,
        categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
        brandId: { type: Schema.Types.ObjectId, ref: "Brand" },
        price: Number,
        salePercent: Number,
        description: String,
        quantity: Number,
        thumbImage: String,
        images: [String],
        createdAdmin: { type: Schema.Types.ObjectId, ref: "Admin" },
    },
    { collection: "Products", timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;


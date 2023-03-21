const { default: mongoose } = require("mongoose");

const brandSchema = new mongoose.Schema(
    {
        brandName: String,
        brandLink: String,
    },
    { collection: "Brands" }
);

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
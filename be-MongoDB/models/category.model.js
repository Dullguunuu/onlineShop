const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        categoryName: String,
        categoryLink: String,
    },
    { collection: "Categories" }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
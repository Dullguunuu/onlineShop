const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        categoryName: String,
        categoryLink: String,
    },
    { collection: "Category" }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
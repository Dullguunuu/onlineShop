const { default: mongoose } = require("mongoose");

const menuSchema = new mongoose.Schema(
    {
        menuName: String,
        menuLink: String,
        position: Number,
    },
    { collection: "Menu" }
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
const { default: mongoose } = require("mongoose");

const menuSchema = new mongoose.Schema(
    {
        menuName: String,
        menuLink: String,
        position: Number,
    },
    { collection: "Menus" }
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
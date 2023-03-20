const Menu = require("../models/menu.model")

exports.getAll = async (req, res) => {
    const getAllMenu = await Menu.find();
    console.log(getAllMenu);
    res.json({ message: "Test", result: getAllMenu });
};

exports.create = async (req, res) => {
    const newMenu = { menuName: "Home", menuLink: "/home", position: 0 };
    const createMenu = await Menu.create(newMenu);
    console.log(createMenu);
    res.json({ message: "Success", result: createMenu });
};
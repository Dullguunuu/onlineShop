const { Router } = require("express");
const menu = require("../controllers/menu.controller");

const route = Router();

route.get("/", menu.getAll);
route.get("/create", menu.create);

module.exports = route;
const { Router } = require("express");
const category = require("../controllers/category.controller");

const route = Router();

route.get("/", category.getAll);
route.get("/create", category.create);

module.exports = route;
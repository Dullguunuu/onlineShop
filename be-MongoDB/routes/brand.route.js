const { Router } = require("express");
const brand = require("../controllers/brand.controller");

const route = Router();

route.get("/", brand.getAll);
route.get("/create", brand.create);

module.exports = route;
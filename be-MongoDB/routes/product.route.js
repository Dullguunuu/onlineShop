const { Router } = require("express");
const product = require("../controllers/product.controller");

const route = Router();

route.get("/", product.getAll);
route.get("/create", product.create);

module.exports = route;
const { Router } = require("express");
const customer = require("../controllers/customer.controller");

const route = Router();

route.get("/", customer.getAll);
route.get("/create", customer.create);

module.exports = route;
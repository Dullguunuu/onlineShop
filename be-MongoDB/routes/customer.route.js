const { Router } = require("express");
const customer = require("../controllers/customer.controller");
const auth = require("../middleware/auth");

const route = Router();

route.get("/customer", auth, customer.getAll);
route.get("/customer/:_id", auth, customer.getOne);
route.put("/customer/:_id", auth, customer.update);
route.delete("/customer/:_id", auth, customer.delete);

route.post("/customer/register", customer.register);
route.post("/customer/login", customer.login);

module.exports = route;
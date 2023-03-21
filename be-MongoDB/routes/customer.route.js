const { Router } = require("express");
const customer = require("../controllers/customer.controller");

const route = Router();

route.get("/customer", customer.getAll);
route.get("/customer/:_id", customer.getOne);
route.post("/customer", customer.createCustomer);
route.put("/customer/:_id", customer.updateCustomer);
route.delete("/customer/:_id", customer.deleteCustomer);

module.exports = route;
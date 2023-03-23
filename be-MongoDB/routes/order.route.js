const { Router } = require("express");
const order = require("../controllers/order.controller");

const route = Router();

route.get("/order", order.getAll);
route.get("/order/:_id", order.getOne);
route.post("/order", order.create);
route.put("/order/:_id", order.update);
route.delete("/order/:_id", order.delete);

module.exports = route;
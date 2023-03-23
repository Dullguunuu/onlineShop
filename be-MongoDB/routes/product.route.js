const { Router } = require("express");
const product = require("../controllers/product.controller");

const route = Router();

route.get("/product", product.getAll);
route.get("/product/:_id", product.getOne);
route.post("/product", product.create);
route.put("/product/:_id", product.update);
route.delete("/product/:_id", product.delete);

module.exports = route;
const { Router } = require("express");
const product = require("../controllers/product.controller");
const auth = require("../middleware/auth");


const route = Router();

route.get("/product", auth, product.getAll);
route.get("/product/:_id", auth, product.getOne);
route.post("/product", auth, product.create);
route.put("/product/:_id", auth, product.update);
route.delete("/product/:_id", auth, product.delete);

module.exports = route;
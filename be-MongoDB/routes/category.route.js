const { Router } = require("express");
const category = require("../controllers/category.controller");

const route = Router();

route.get("/category", category.getAll);
route.get("/category/:_id", category.getOne);
route.post("/category", category.create);
route.put("/category/:_id", category.update);
route.delete("/category/:_id", category.delete);

module.exports = route;
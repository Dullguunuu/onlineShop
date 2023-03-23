const { Router } = require("express");
const brand = require("../controllers/brand.controller");

const route = Router();

route.get("/brand", brand.getAll);
route.get("/brand/:_id", brand.getOne);
route.post("/brand", brand.create);
route.put("/brand/:_id", brand.update);
route.delete("/brand/:_id", brand.delete);

module.exports = route;
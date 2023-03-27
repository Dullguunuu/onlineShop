const { Router } = require("express");
const brand = require("../controllers/brand.controller");
const auth = require("../middleware/auth");


const route = Router();

route.get("/brand", auth, brand.getAll);
route.get("/brand/:_id", auth, brand.getOne);
route.post("/brand", auth, brand.create);
route.put("/brand/:_id", auth, brand.update);
route.delete("/brand/:_id", auth, brand.delete);

module.exports = route;
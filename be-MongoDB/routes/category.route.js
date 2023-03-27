const { Router } = require("express");
const category = require("../controllers/category.controller");
const auth = require("../middleware/auth");


const route = Router();

route.get("/category", auth, category.getAll);
route.get("/category/:_id", auth, category.getOne);
route.post("/category", auth, category.create);
route.put("/category/:_id", auth, category.update);
route.delete("/category/:_id", auth, category.delete);

module.exports = route;
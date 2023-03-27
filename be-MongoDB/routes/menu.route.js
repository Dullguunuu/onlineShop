const { Router } = require("express");
const menu = require("../controllers/menu.controller");
const auth = require("../middleware/auth");


const route = Router();

route.get("/menu", auth, menu.getAll);
route.get("/menu/:_id", auth, menu.getOne);
route.post("/menu", auth, menu.create);
route.put("/menu/:_id", auth, menu.update);
route.delete("/menu/:_id", auth, menu.delete);

module.exports = route;
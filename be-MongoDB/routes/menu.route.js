const { Router } = require("express");
const menu = require("../controllers/menu.controller");

const route = Router();

route.get("/menu", menu.getAll);
route.get("/menu/:_id", menu.getOne);
route.post("/menu", menu.create);
route.put("/menu/:_id", menu.update);
route.delete("/menu/:_id", menu.delete);

module.exports = route;
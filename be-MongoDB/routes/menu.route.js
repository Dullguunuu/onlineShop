const { Router } = require("express");
const menu = require("../controllers/menu.controller");

const route = Router();

route.get("/menu", menu.getAll);
route.get("/menu/:_id", menu.getOne);
route.post("/menu", menu.createMenu);
route.put("/menu/:_id", menu.updateMenu);
route.delete("/menu/:_id", menu.deleteMenu);

module.exports = route;
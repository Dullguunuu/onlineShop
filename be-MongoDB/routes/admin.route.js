const { Router } = require("express");
const admin = require("../controllers/admin.controller");

const route = Router();

route.get("/", admin.getAll);
route.get("/create", admin.create);

module.exports = route;
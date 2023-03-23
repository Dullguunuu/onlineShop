const express = require('express')
const admin = require("../controllers/admin.controller.js");

const route = express.Router();

route.get("/admin", admin.getAll);
route.get("/admin/:_id", admin.getOne);
route.post("/admin", admin.create);
route.put("/admin/:_id", admin.update);
route.delete("/admin/:_id", admin.delete);

module.exports = route;
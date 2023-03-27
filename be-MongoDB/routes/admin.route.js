const express = require('express')
const admin = require("../controllers/admin.controller.js");
const auth = require("../middleware/auth");

const route = express.Router();

route.get("/admin", auth, admin.getAll);
route.get("/admin/:_id", auth, admin.getOne);
route.put("/admin/:_id", auth, admin.update);
route.delete("/admin/:_id", auth, admin.delete);

route.post("/admin/register", admin.register);
route.post("/admin/login", admin.login);

module.exports = route;
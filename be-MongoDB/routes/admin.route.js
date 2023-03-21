const { Router } = require("express");
const admin = require("../controllers/admin.controller");

const route = Router();

route.get("/admin", admin.getAll);
route.get("/admin/:_id", admin.getOne);
route.post("/admin", admin.createAdmin);
route.put("/admin/:_id", admin.updateAdmin);
route.delete("/admin/:_id", admin.deleteAdmin);

module.exports = route;
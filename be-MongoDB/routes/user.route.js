const express = require("express");

const router = express.Router()
const user = require("../controllers/user.controller.js")

router.get("/user/:id", user.get);
router.get("/user", user.getAll);
router.post("/user", user.create);
router.put("/user/:id", user.update);
router.delete("/user/:id", user.delete);

module.exports = router;
const express = require("express");

const router = express.Router()
const category = require("../controllers/category.controller")

router.get("/category/:id", category.get);
router.get("/category", category.getAll);
router.post("/category", category.create);
router.put("/category/:id", category.update);
router.delete("/category/:id", category.delete);

module.exports = router;
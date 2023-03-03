const express = require("express");

const router = express.Router()
const product = require("../controllers/product.controller.js")

router.get("/product/:id", product.get);
router.get("/product", product.getAll);
router.post("/product", product.create);
router.put("/product/:id", product.update);
router.delete("/product/:id", product.delete);

module.exports = router;
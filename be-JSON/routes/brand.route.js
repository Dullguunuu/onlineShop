const express = require("express");

const router = express.Router()
const brand = require("../controllers/brand.controller")

router.get("/brand/:id", brand.get);
router.get("/brand", brand.getAll);
router.post("/brand", brand.create);
router.put("/brand/:id", brand.update);
router.delete("/brand/:id", brand.delete);

module.exports = router;
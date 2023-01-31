const express = require("express")

const router = express.Router();
const menu = require("../controllers/menu.controller.js")

router.
    router.get("/menu", menu.getAll)
router.post("/menu", menu.create)
router.delete("/menu/:id", menu.delete)
router.put("/menu", menu.update)

module.exports = router;
const express = require("express");

const router = express.Router()
const customer = require("../controllers/customer.controller")

router.get("/customer/:id", customer.get);
router.get("/customer", customer.getAll);
router.post("/customer", customer.create);

router.put("/customer/:id", customer.update);
router.delete("/customer/:id", customer.delete);
router.post("/customer/login", customer.login)

module.exports = router;
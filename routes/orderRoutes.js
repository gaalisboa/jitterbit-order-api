const express = require("express")
const router = express.Router()

const controller = require("../controllers/orderController")
const auth = require("../middleware/auth")

router.post("/", auth, controller.createOrder)
router.get("/list", auth, controller.listOrders)
router.get("/:orderId", auth, controller.getOrder)
router.put("/:orderId", auth, controller.updateOrder)
router.delete("/:orderId", auth, controller.deleteOrder)

module.exports = router
const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        customerId: String,
        totalPrice: Number,
        orderedDate: {
            type: Date,
            default: Date.now
        },
        status: String,
        orderDetails: [{
            orderId: String,
            productId: String,
            quantity: Number,
        },],
    },
    { collection: "Order" }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

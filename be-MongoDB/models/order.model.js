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
            productId: String,
            quantity: Number,
            currentPrice: Number,
        },],
    },
    { collection: "Orders" }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

const { default: mongoose, Schema } = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        customerId: { type: Schema.Types.ObjectId, ref: "Customer" },
        totalPrice: Number,
        status: String,
        orderDetails: [{
            productId: { type: Schema.Types.ObjectId, ref: "Product" },
            quantity: Number,
            currentPrice: Number,
        },],
    },
    { collection: "Orders", timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

const { default: mongoose } = require("mongoose");

const customerSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        userName: String,
        phone: Number,
        email: String,
        likedProducts: [String],
        password: String,
    },
    { collection: "Customers" }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;

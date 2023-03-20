const { default: mongoose, SchemaTypes } = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        userName: String,
        email: String,
        phone: Number,
        image: Buffer,
        password: SchemaTypes,
    },
    { collection: "User" }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
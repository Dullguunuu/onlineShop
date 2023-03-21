const port = 6060;
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const menuRoute = require("./routes/menu.route");
const categoryRoute = require("./routes/category.route");
const brandRoute = require("./routes/brand.route");
const adminRoute = require("./routes/admin.route");
const productRoute = require("./routes/product.route");
const customerRoute = require("./routes/customer.route");
// const orderRoute = require("./routes/order.route")

mongoose
    .connect(process.env.MONGO_DB_URI)
    .then(() => console.log("Database successfully connected"))
    .catch((err) => console.log(err));

app.use(cors())
app.use(express.json())

app.use("/api", menuRoute);
app.use("/api", categoryRoute);
app.use("/api", brandRoute);
app.use("/api", adminRoute);
app.use("/api", productRoute);
app.use("/api", customerRoute);
// app.use("/api", orderRoute);

app.get("/api", (req, res) => {
    res.json({ message: "Welcome to Rest API" })
})

app.listen(port, () => console.log("server is running on " + port))
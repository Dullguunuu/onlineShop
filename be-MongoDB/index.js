const port = 6060;
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const menuRoute = require("./routes/menu.route");
const categoryRoute = require("./routes/category.route");
const brandRoute = require("./routes/brand.route");
const adminRoute = require("./routes/admin.route");
const productRoute = require("./routes/product.route")
const customerRoute = require("./routes/customer.route")

mongoose
    .connect("mongodb+srv://Dulguunuu:zzr1GErVY0xW89aG@cluster0.10hyhux.mongodb.net/onlineShop")
    .then(() => console.log("Database successfully connected"))
    .catch((err) => console.log(err));

// app.use(cors())
// app.use(express.json())

app.use("/menu", menuRoute);
app.use("/category", categoryRoute);
app.use("/brand", brandRoute);
app.use("/admin", adminRoute);
app.use("/product", productRoute)
app.use("/customer", customerRoute)

app.get("/api", (req, res) => {
    res.json({ message: "Welcome Rest API" })
})

app.listen(port, () => console.log("server is running on " + port))
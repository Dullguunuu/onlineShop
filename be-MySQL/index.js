const port = 6060;
const express = require("express")
const cors = require("cors")
const app = express()

const menuRouter = require("./routes/menu.route.js")
const categoryRouter = require("./routes/category.route.js")
const brandRouter = require("./routes/brand.route.js")
const userRouter = require("./routes/user.route.js")
const productRouter = require("./routes/product.route.js")
const customerRouter = require("./routes/customer.route.js")

const fs = require("fs");
const { request } = require("http");

app.use(cors())
app.use(express.json())

app.use("/api", menuRouter)
app.use("/api", categoryRouter)
app.use("/api", brandRouter)
app.use("/api", userRouter)
app.use("/api", productRouter)
app.use("/api", customerRouter)

app.get("/api", (request, response) => {
    response.json({ message: "Welcome Rest API" })
})

app.listen(port, () => console.log("server is running"))
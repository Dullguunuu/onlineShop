const port = 6060;
const express = require("express")
const cors = require("cors")
const app = express()

const menuRouter = require("./routes/menu.route.js")

const fs = require("fs");
const { request } = require("http");

app.use(cors())
app.use(express.json())

app.use("/api", menuRouter)

app.get("/api", (request, response) => {
    response.json({ message: "Welcome Rest API" })
})

app.listen(port, () => console.log("server is running"))
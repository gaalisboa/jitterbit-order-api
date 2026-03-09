const express = require("express")
const mongoose = require("mongoose")

const orderRoutes = require("./routes/orderRoutes")
const authRoutes = require("./routes/authRoutes")

const app = express()

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/orders")
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.log(err))

app.use("/order", orderRoutes)
app.use("/auth", authRoutes)

app.listen(3000, () => {
    console.log("API rodando na porta 3000")
})
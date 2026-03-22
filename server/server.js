const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Debug: check if env is loaded
console.log("MONGO_URI:", process.env.MONGO_URI);

// ✅ MongoDB Atlas connection (Standard URI, no extra options needed)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.error("❌ MongoDB error:", err));

app.get("/", (req, res) => {
    res.send("API running");
});

app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
});
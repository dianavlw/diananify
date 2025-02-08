const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/api/products", (req, res) => {
  res.json([{ id: 1, name: "Product A", price: 29.99 }, { id: 2, name: "Product B", price: 49.99 }]);
});

app.listen(5000, () => console.log("Server running on port 5000"));


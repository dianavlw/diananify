require("dotenv").config();
console.log("JWT SECRET:", process.env.JWT_SECRET);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;
const User = require("./models/User"); // Import User model

// ✅ Import Product Routes
const productRoutes = require("./routes/productRoutes"); // <-- ADD THIS LINE

app.get("/clear-users", async (req, res) => {
  await User.deleteMany({});
  res.send("✅ All users deleted!");
});

// ✅ Middleware (Must be before routes)
app.use(express.json()); // Allows JSON parsing
app.use(cors()); // Enables CORS for frontend requests

// ✅ Import & Use Routes
const authRoutes = require("./routes/authRoutes"); 
app.use("/api/auth", authRoutes); // Base path for authentication routes
app.use("/api/products", productRoutes); // ✅ Add this line to enable /api/products

// ✅ Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

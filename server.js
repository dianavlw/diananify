require('dotenv').config();
console.log('JWT SECRET:', process.env.JWT_SECRET);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// ✅ Import Models
const User = require('./models/User');

// ✅ Import Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes'); // <--- 🔥 RIGHT HERE

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// 🔧 Utility route (optional)
app.get('/clear-users', async (req, res) => {
  await User.deleteMany({});
  res.send('✅ All users deleted!');
});

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// ✅ Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

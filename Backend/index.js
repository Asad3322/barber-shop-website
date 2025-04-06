const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const connectDB = require('./Utils/db');
const authRouter = require('./Routes/authRoutes');
const productRoutes = require('./Routes/productRoutes');
const imageRoutes = require('./Routes/imageRoutes');
const serviceRoutes = require('./Routes/serviceRoutes'); // ✅ Add this line
const bookingRoutes = require('./Routes/bookingRoutes');

dotenv.config();
connectDB();

const app = express();

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: 'GET,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};
app.use(cors(corsOptions));

app.use(express.json());

// Existing routes
app.use('/auth', authRouter);
app.use('/api/products', productRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/services', serviceRoutes); // ✅ Mount the new service routes
app.use('/api/bookings', bookingRoutes); // ✅ Mount the booking route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

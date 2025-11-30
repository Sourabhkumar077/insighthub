import express , {json} from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js'

dotenv.config();

const app = express();

app.use(json());


// mounting the auth routes
app.use('/api/auth', authRoutes);


// Health check route
app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

// Start server + connect DB
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/insighthub');
    app.listen(5000, () => {
      console.log("🚀 Server is running on port 5000");
    });
  } catch (error) {
    console.error("❌ Startup error:", error);
    process.exit(-1);
  }
};

start();

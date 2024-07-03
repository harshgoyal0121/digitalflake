// src/server.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import categoryRoutes from './routes/category';
import productRoutes from './routes/product';
import bcrypt from 'bcryptjs'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI as string).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.use(cors());
app.use(express.json());
const fun = async ()=>{
  const password = "AdminPassword12";
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt); 
  const pass = "AdminPassword12";
  const result = await bcrypt.compare(pass, hashedPassword);
  console.log(result);
}
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('api/product', productRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
fun();
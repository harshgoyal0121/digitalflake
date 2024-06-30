// src/server.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

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
app.use(express.static(path.join(__dirname, '../../client/src/Components')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/src/Components/Login/Login.tsx'));
});

import authRoutes from './routes/auth';
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

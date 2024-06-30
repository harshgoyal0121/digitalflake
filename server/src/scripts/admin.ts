// src/scripts/addAdmin.ts
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User, { IUser } from '../models/user';

dotenv.config();

const createAdminUser = async () => {
  const email = 'harsh@gmail.com';  
  const password = 'AdminPassword12'; 
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('Admin user already exists');
      return;
    }
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt); 
    const adminUser = new User({ email, password });
    await adminUser.save();

    console.log('Admin user created successfully');
  } catch (err) {
    console.error('Error creating admin user:', err);
  } finally {
    await mongoose.disconnect();
  }
};
createAdminUser();

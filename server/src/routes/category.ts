// src/routes/category.ts
import { Router } from 'express';
import Category from '../models/category';

const router = Router();

router.get('/', async(req, res) =>{
  try{
    const categories = await Category.find();
    res.status(200).json(categories);
  }catch(error){
    res.status(500).json({message: 'Server error', error});
  }
})
router.post('/', async (req, res) => {
  const { name, description, status } = req.body;
  try {
    const newCategory = new Category({ name, description, status });
    await newCategory.save();
    res.status(201).json({ message: 'Category created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});
export default router;

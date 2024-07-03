// src/routes/category.ts
import { Router } from 'express';
import Product from '../models/product';

const router = Router();

router.get('/', async(req, res) =>{
  try{
    const products = await Product.find();
    res.status(200).json(products);
  }catch(error){
    res.status(500).json({message: 'Server error', error});
  }
})
router.post('/', async (req, res) => {
  console.log("Hello");
  const { iD,name, packSize, category, mrp, image ,status } = req.body;
  // if(Product.findOne({name})){
  //   return res.status(500).json({message: "This product is already exist"});
  // }
  
  try {
    const newCategory = new Product({ iD,name, packSize, category, mrp, image ,status});
    await newCategory.save();
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});
export default router;

import { Schema, model } from 'mongoose';

interface IProduct {
  iD: number,
  name: string;
  packSize: string;
  category: string;
  mrp: string;
  image: string;
  status;
}

const ProductSchema = new Schema<IProduct>({
  iD: {type: Number, required: true},
  name: { type: String, required: true },
  packSize: { type: String, required: true },
  category: { type: String, required: true },
  mrp: { type: String, required: true },
  image: { type: String, required: true },
  status: { type: String, required: true },
});

const Product = model<IProduct>('Product', ProductSchema);

export default Product;
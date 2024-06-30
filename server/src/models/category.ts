import { Schema, model } from 'mongoose';

interface ICategory {
  name: string;
  description: string;
  status: string;
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
});

const Category = model<ICategory>('Category', categorySchema);

export default Category;

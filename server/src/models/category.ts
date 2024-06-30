import { Schema, model } from 'mongoose';

interface ICategory {
  iD: number,
  name: string;
  description: string;
  status: string;
}

const categorySchema = new Schema<ICategory>({
  iD: {type: Number, required: true},
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
});

const Category = model<ICategory>('Category', categorySchema);

export default Category;
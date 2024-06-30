import React from "react";
import Home from "../Home/Home";
import Category from "../Category/Category";
import Product from "../Product/Product";
import AddCategory from "../AddCategory/AddCategory";

interface CategoryWrapperProps {
  setAddNewClicked: () => void;
}

const CategoryWrap: React.FC<CategoryWrapperProps> = ({ setAddNewClicked }) => {
  return <Category setAddNewClicked={setAddNewClicked} />;
};

const componentMap: { [key: number]: React.ComponentType<any> } = {
  1: Home,
  2: CategoryWrap,
  3: Product,
  4: AddCategory,
};

export default componentMap;

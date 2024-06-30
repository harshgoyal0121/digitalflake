import React, { useState } from "react";
import s from "./addCategory.module.scss";
import ArrowBackwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";
const AddCategory = () => {
  const options = [
    { label: "Active", value: 1 },
    { label: "Inactive", value: 2 },
  ];
  const [value, setValue] = useState<Number>(0);
  const handleClick = (event:any) => {
    setValue(event.target.value);
  };
  return (
    <div className={s.container}>
      <div className={s.categoryNav}>
        <IconButton>
          <ArrowBackwardIcon className={s.arrow} />
        </IconButton>
        <p className={s.content}>Add Category</p>
      </div>
      <div className={s.aboutCategory}>
        <form action="">
          <div className={s.formBox}>
            <div className={s.categoryInput}>
              <input className={s.inputButton} type="text" name="categoryName" />
              <label htmlFor="categoryName" className={s.categoryName}>
                Category Name
              </label>
            </div>
            <div className={s.categoryInput}>
              <input className={s.inputButton} type="text" name="categoryName" />
              <label htmlFor="categoryName" className={s.categoryName}>
                Description
              </label>
            </div>
            <div className={s.categoryInput}>
              <select className={s.inputButton} onChange={handleClick}>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
              <label htmlFor="categoryName" className={s.categoryName}>
                Status
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;

import React, { useState } from "react";
import s from "./category.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import upDownIcon from "../../Assets/upDownButton.svg";
import Icon1 from "../../Assets/categoryIcon1.svg";
import SearchBar from "../SearchBar/SearchBar";

interface CategoryProps {
  setAddNewClicked: () => void;
}

interface RowData {
  id: number;
  name: string;
  description: string;
  status: string;
}

const Category: React.FC<CategoryProps> = ({ setAddNewClicked }) => {
  const handleSearch = (searchValue: string) => {
    console.log("Searching for:", searchValue);
  };
  const handleClick = () => {
    setAddNewClicked();
  };
  return (
    <div className={s.container}>
      <div className={s.categoryNav}>
        <div
          className="categImg"
          style={{ marginLeft: 10, marginRight: 25, marginTop: 8 }}
        >
          <img src={Icon1} alt="" />
        </div>
        <div className={s.cateName}>Category</div>
        <div>
          <SearchBar handleSearch={handleSearch} />
        </div>
        <div>
          <button className={s.addNew} onClick={handleClick}>
            Add New
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;

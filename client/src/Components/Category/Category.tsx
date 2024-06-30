import React, { useState, useEffect } from "react";
import s from "./category.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import upDownIcon from "../../Assets/upDownButton.svg";
import Icon1 from "../../Assets/categoryIcon1.svg";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";

interface CategoryProps {
  setAddNewClicked: () => void;
}

interface RowData {
  _id: number;
  name: string;
  description: string;
  status: string;
}

const Category: React.FC<CategoryProps> = ({ setAddNewClicked }) => {
  const [rows, setRows] = useState<RowData[]>([]);
  
  const columns: GridColDef<RowData>[] = [
    {
      field: "iD",
      width: 100,
      hideSortIcons: true,
      disableColumnMenu: true,
      renderHeader: () => (
        <div className={s.headerContainer}>
          <span style={{ fontWeight: "bold" }}>ID</span>
          <img
            src={upDownIcon}
            alt="Menu Icon"
            className={s.customMenuIcon}
          />
        </div>
      ),
    },
    {
      field: "name",
      width: 240,
      hideSortIcons: true,
      disableColumnMenu: true,
      renderHeader: () => (
        <div className={s.headerContainer}>
          <span style={{ fontWeight: "bold" }}>NAME</span>
          <img
            src={upDownIcon}
            alt="Menu Icon"
            className={s.customMenuIcon}
          />
        </div>
      ),
    },
    {
      field: "description",
      width: 400,
      hideSortIcons: true,
      disableColumnMenu: true,
      renderHeader: () => (
        <div className={s.headerContainer}>
          <span style={{ fontWeight: 'bold', paddingLeft: "30v" }}>DESCRIPTION</span>
          <img
            src={upDownIcon}
            alt="Menu Icon"
            className={s.customMenuIcon}
          />
        </div>
      ),
    },
    {
      field: "status",
      width: 210,
      hideSortIcons: true,
      disableColumnMenu: true,
      renderHeader: () => (
        <div className={s.headerContainer}>
          <span style={{ fontWeight: "bold" }}>STATUS</span>
          <img
            src={upDownIcon}
            alt="Menu Icon"
            className={s.customMenuIcon}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/category");
        setRows(response.data);
        console.log(rows);
      } catch (error) {
        console.log("Error in fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

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
      <div>
        <Box sx={{ height: "75vh", width: "169.5vh", borderRadius: "1vw"}}>
          <DataGrid
            style={{ border: 0 }}
            className={s.customTable}
            rows={rows}
            columns={columns}
            hideFooter
            getRowId={(row) => row._id}
            getRowClassName={() => s.customRow}
          />
        </Box>
      </div>
    </div>
  );
};

export default Category;

import React, { useState, useEffect } from "react";
import s from "./product.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import upDownIcon from "../../Assets/upDownButton.svg";
import ProductIcon from "../../Assets/product.svg";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";

interface ProductProps {
  setAddNewProductClicked: () => void;
}

interface RowData {
  _id: number;
  name: string;
  packSize: string;
  category: string;
  mrp: string;
  image: string;
  status: string;
}

const Product: React.FC<ProductProps> = ({ setAddNewProductClicked }) => {
  const [rows, setRows] = useState<RowData[]>([]);

  const columns: GridColDef<RowData>[] = [
    {
      field: "iD",
      width: 90,
      hideSortIcons: true,
      disableColumnMenu: true,
      renderHeader: () => (
        <div className={s.headerContainer}>
          <span style={{ fontWeight: "bold" }}>ID</span>
          <img src={upDownIcon} alt="Menu Icon" className={s.customMenuIcon} />
        </div>
      ),
    },
    {
      field: "name",
      width: 130,
      hideSortIcons: true,
      disableColumnMenu: true,
      renderHeader: () => (
        <div className={s.headerContainer}>
          <span style={{ fontWeight: "bold" }}>NAME</span>
          <img src={upDownIcon} alt="Menu Icon" className={s.customMenuIcon} />
        </div>
      ),
    },
    {
      field: "packSize",
      width: 140,
      hideSortIcons: true,
      disableColumnMenu: true,
      renderHeader: () => (
        <div className={s.headerContainer}>
          <span style={{ fontWeight: "bold", paddingLeft: "30v" }}>
            PACK SIZE
          </span>
          <img src={upDownIcon} alt="Menu Icon" className={s.customMenuIcon} />
        </div>
      ),
    },
    {
      field: "category",
      width: 150,
      hideSortIcons: true,
      disableColumnMenu: true,
      renderHeader: () => (
        <div className={s.headerContainer}>
          <span style={{ fontWeight: "bold" }}>CATEGORY</span>
          <img src={upDownIcon} alt="Menu Icon" className={s.customMenuIcon} />
        </div>
      ),
    },
    {
      field: "mrp",
      width: 140,
      hideSortIcons: true,
      disableColumnMenu: true,
      renderHeader: () => (
        <div className={s.headerContainer}>
          <span style={{ fontWeight: "bold" }}>MRP</span>
          <img src={upDownIcon} alt="Menu Icon" className={s.customMenuIcon} />
        </div>
      ),
    },
    {
      field: "image",
      width: 160,
      hideSortIcons: true,
      disableColumnMenu: true,
      renderHeader: () => (
        <div className={s.headerContainer}>
          <span style={{ fontWeight: "bold" }}>IMAGE</span>
          <img src={upDownIcon} alt="Menu Icon" className={s.customMenuIcon} />
        </div>
      ),
      renderCell: (params) =>(        
      <Box
          component= "img"
          sx = {{height: 40, width: '40%'}}
          src = {params.value}
          alt = {params.row.name}
        />
      ),
    },
    {
      field: "status",
      width: 180,
      hideSortIcons: true,
      disableColumnMenu: true,
      renderHeader: () => (
        <div className={s.headerContainer}>
          <span style={{ fontWeight: "bold" }}>STATUS</span>
          <img src={upDownIcon} alt="Menu Icon" className={s.customMenuIcon} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/product");
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
    setAddNewProductClicked();
  };

  return (
    <div className={s.container}>
      <div className={s.categoryNav}>
        <div
          className="categImg"
          style={{ marginLeft: 10, marginRight: 25, marginTop: 8 }}
        >
          <img src={ProductIcon} alt="" />
        </div>
        <div className={s.cateName}>Product</div>
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
        <Box sx={{ height: "75vh", width: "169.5vh", borderRadius: "1vw" }}>
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

export default Product;

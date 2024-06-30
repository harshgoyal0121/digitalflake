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
  id: number;
  name: string;
  description: string;
  status: string;
}

const Category: React.FC<CategoryProps> = ({ setAddNewClicked }) => {
  const [rows, setRows] = useState<RowData[]>([]);
  const columns: GridColDef<RowData>[] = [
    {
      field: "id",
      headerName: "ID",
      width: 25,
      renderCell: (params) => <img src={upDownIcon} alt="" />,
    },
    {
      field: "name",
      headerName: "NAME",
      width: 210,
      renderCell: (params) => <img src={upDownIcon} alt="" />,
    },
    {
      field: "description",
      headerName: "DESCRIPTION",
      width: 210,
      renderCell: (params) => <img src={upDownIcon} alt="" />,
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 210,
      renderCell: (params) => <img src={upDownIcon} alt="" />,
    },
    // {
    //   field: "actions",
    //   headerName: "",
    //   width: 40,
    //   sortable: false,
    //   renderCell: (params) => (
    //     <IconButton onClick={() => handleArrowClick(params.row.id)}>
    //       <ArrowForwardIcon />
    //     </IconButton>
    //   ),
    // },
  ];
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/category");
        setRows(response.data);
      } catch (error) {
        console.log("Error in fethcing categories:", error);
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
        <Box sx={{ height: "75vh", width: "169.5vh", borderRadius: "1vw" }}>
          <DataGrid
            style={{ border: 0, backgroundColor: "gray", borderRadius: 0 }}
            // key={rowUpdate}
            rows={rows}
            columns={columns}
            hideFooter
            columnHeaderHeight={0}
            getRowId={(row) => row.id} // Ensure DataGrid can uniquely identify rows
          />
        </Box>
      </div>
    </div>
  );
};

export default Category;

import React, { useState, useCallback, useEffect } from "react";
import s from "./style.module.scss";
import userImage from "../../Assets/account_icon.svg";
import homeImg from "../../Assets/home.svg";
import categoryImg from "../../Assets/category.svg";
import productImg from "../../Assets/product.svg";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, IconButton } from "@mui/material";
import ComponentMap from "../Category/CategoryWrapper";
import { useLocation } from "react-router-dom";
import { set } from "mongoose";

interface RowData {
  id: number;
  imageUrl: string;
  infoName: string;
}

const rows: RowData[] = [
  { id: 1, imageUrl: homeImg, infoName: "Home" },
  { id: 2, imageUrl: categoryImg, infoName: "Category" },
  { id: 3, imageUrl: productImg, infoName: "Products" },
];
const Dashboard: React.FC = () => {
  const [selectedRowId, setSelectedRowId] = useState<number>(1);
  const [rowUpdate, setRowUpdate] = useState<number>(0);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.rowId) setSelectedRowId(location.state.rowId);
  }, [location.state]);

  const handleArrowClick = useCallback((id: number) => {
    setSelectedRowId(id);
    setRowUpdate((prev) => prev + 1);
  }, []);

  const handleAddNewClick = useCallback(() => {
    setSelectedRowId(4);
    setRowUpdate((prev) => prev + 1);
  }, []);
  const columns: GridColDef<RowData>[] = [
    {
      field: "imageUrl",
      headerName: "",
      width: 25,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="image"
          style={{ width: "3vh", height: "auto" }}
        />
      ),
    },
    { field: "infoName", headerName: "", width: 210 },
    {
      field: "actions",
      headerName: "",
      width: 40,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => handleArrowClick(params.row.id)}>
          <ArrowForwardIcon />
        </IconButton>
      ),
    },
  ];
  const getRowClassName = (params: GridRowParams) => {
    return params.id === selectedRowId ? s.clicked_row : "";
  };
  const SelectedComponent = ComponentMap[selectedRowId];
  return (
    <div className={s.body}>
      <div className={s.navbar}>
        <div className={s.nav_item}>
          <div className={s.boxOnD}>
            <div className={s.square}>[)</div>
            {/* <div className={s.bracket}>)</div> */}
          </div>
          <div className={s.digital}>digital</div>
          <div className={s.flake}>flake</div>
        </div>
        <div className={s.nav_item}>
          <button className={s.nav_img}>
            <img src={userImage} alt="not avail" />
          </button>
        </div>
      </div>
      <div className={s.info_body}>
        <div className={s.body_category}>
          <Box sx={{ height: "88vh", width: "52vh" }}>
            <DataGrid
              style={{ border: 0, backgroundColor: "gray", borderRadius: 0 }}
              key={rowUpdate}
              rows={rows}
              columns={columns}
              hideFooter
              columnHeaderHeight={0}
              getRowId={(row) => row.id} // Ensure DataGrid can uniquely identify rows
              getRowClassName={getRowClassName}
            />
          </Box>
        </div>
        <div className={s.data}>
          {SelectedComponent && (
            <SelectedComponent
              {...(selectedRowId === 2
                ? { setAddNewClicked: handleAddNewClick }
                : {})}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

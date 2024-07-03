import React, { ReactHTMLElement, useState } from "react";
import s from "./addProduct.module.scss";
import ArrowBackwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const options = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];
  const [iD, setID] = useState<number>(101);
  const [name, setName] = useState<string>("");
  const [packSize, setPackSize] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [mrp, setMrp] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [status, setStatus] = useState(options[0].label);
  const navigate = useNavigate();

  const handleFormClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/product", {
        iD,
        name,
        packSize,
        category,
        mrp,
        image,
        status,
      });
      console.log("Response:", response.data);
      setID((prevID) => prevID + 1);
      navigate("/dashboard", { state: { trowId: 3 } });
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
    }
  };
  const handleImgeInput = (e: any) => {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className={s.container}>
      <div className={s.categoryNav}>
        <IconButton>
          <ArrowBackwardIcon
            className={s.arrow}
            onClick={() => navigate("/dashboard", { state: { rowId: 3 } })}
          />
        </IconButton>
        <p className={s.content}>Add Product</p>
      </div>
      <div className={s.aboutCategory}>
        <form onSubmit={handleFormClick}>
          <div className={s.formBox}>
            <div className={s.categoryInput}>
              <input
                className={s.inputButton}
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
              <label htmlFor="" className={s.categoryName}>
                Category
              </label>
            </div>
            <div className={s.inputBox}>
              <div className={s.categoryInput}>
                <input
                  className={s.inputButton}
                  value={name}
                  type="text"
                  name="categoryName"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="" className={s.categoryName}>
                  Product Name
                </label>
              </div>
              <div className={s.categoryInput}>
                <input
                  className={s.inputButton}
                  type="text"
                  name="packSize"
                  value={packSize}
                  onChange={(e) => setPackSize(e.target.value)}
                  required
                />
                <label htmlFor="" className={s.categoryName}>
                  Pack Size
                </label>
              </div>
              <div className={s.categoryInput}>
                <input
                  className={s.inputButton}
                  type="text"
                  name="mrp"
                  value={mrp}
                  onChange={(e) => setMrp(e.target.value)}
                  required
                />
                <label htmlFor="" className={s.categoryName}>
                  Mrp
                </label>
              </div>
              <div className={s.categoryInput}>
                <input
                  className={s.inputButton}
                  type="file"
                  name="image"
                  // value={image}
                  onChange={handleImgeInput}
                  required
                />
                <label htmlFor="" className={s.categoryName}>
                  Product Image
                </label>
              </div>
              <div className={s.categoryInput}>
                <select
                  className={s.inputButton}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  {options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <label htmlFor="" className={s.categoryName}>
                  Status
                </label>
              </div>
            </div>
            <div className={s.submitBox}>
              <div>
                <button
                  className={s.cancel}
                  onClick={() =>
                    navigate("/dashboard", { state: { rowId: 3 } })
                  }
                >
                  Cancel
                </button>
              </div>
              <div>
                <button className={s.save}>Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

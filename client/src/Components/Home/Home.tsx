import React from "react";
import s from "./home.module.scss";
import iconImg from "../../Assets/Icon.svg";

const Home = () => {
  return (
    <div className={s.container}>
      <img src={iconImg} alt="not avail" className={s.homeImg1} />
      <p style={{ fontSize: 26, fontWeight: 400 }}>
        Welcome to Digitalflake Admin
      </p>
    </div>
  );
};

export default Home;

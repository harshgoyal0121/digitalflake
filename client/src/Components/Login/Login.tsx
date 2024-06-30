import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import s from "./style.module.scss";
import bgImg from "../../Assets/Bg_icon.svg";
import iconImg from "../../Assets/Icon.svg";
import midEye from "../../Assets/mdi_eye-off.svg";
import Image from "react-bootstrap/Image";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // authentication
    try {
      const response = await axios.post("/api/auth", {
        email,
        password,
      });
      console.log("Response:", response.data);
      navigate("/dashboard");
      // Handle successful login (e.g., save token, redirect, etc.)
    } catch (error: any) {
      console.error("Error logging in:", error.response?.data || error.message);
      setError("wrong");
    }
  };

  return (
    <div className={s.loginContainer}>
      <Image src={bgImg} alt="Not Available" className={s.loginBg} />
      <div className={s.loginBox}>
        <Image src={iconImg} alt="Not Available" className={s.icon} />
        <p className={s.welcome}>Welcome to Digitalflake Admin</p>
        <div className={s.login_details}>
          <form onSubmit={handleSubmit}>
            <div className={s.form_group1}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={s.form_input}
              />
              <label htmlFor="" className={s.formLabel}>
                Email ID
              </label>
            </div>
            <div className={s.form_group2}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`${s.form_input} ${s.form_input2}`}
              />
              <button className={s.midEye}>
                <Image src={midEye} alt="Not avail" fluid />
              </button>
              <label htmlFor="" className={s.formLabel}>
                Password
              </label>
            </div>
            <div className={s.submit_box}>
              <button className={s.forgot_pass}>Forgot Password?</button>
              <button type="submit" className={s.form_submit}>
                Log In
              </button>
            </div>
          </form>
          {error && <p className={s.error}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;

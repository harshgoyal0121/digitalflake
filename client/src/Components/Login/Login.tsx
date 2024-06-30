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
    // Perform authentication here
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      console.log("Response:", response.data);
      // Handle successful login (e.g., save token, redirect, etc.)
    } catch (error: any) {
      console.error("Error logging in:", error.response?.data || error.message);
      setError("Invalid credentials");
    }
  };

  return (
    <div className={s.loginContainer}>
      <Image src={bgImg} alt="Not Available" className={s.loginBg} />
      <div className={s.loginBox}>
        <Image src={iconImg} alt="Not Available" className={s.icon} />
        <p
          className={s.welcome}
          // style={{ fontSize: 22, fontWeight: 400, color: "#717070" }}
        >
          Welcome to Digitalflake Admin
        </p>
        <div className={s.login_details}>
          <form onSubmit={handleSubmit}>
            <div className={s.form_group}>
              <fieldset>
                <legend>Email ID</legend>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={s.form_input}
                />
              </fieldset>
            </div>
            <div className={s.form_group}>
              <fieldset>
                <legend>Password</legend>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={s.form_input}
                  />
                  <button className={s.midEye}>
                    <Image src={midEye} alt="Not avail" fluid />
                  </button>
                </div>
              </fieldset>
            </div>
            <div className={s.submit_box}>
              <button className={s.forgot_pass}>Forgot Password?</button>
              <button
                type="submit"
                className={s.form_submit}
                onClick={() => navigate("/dashboard")}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

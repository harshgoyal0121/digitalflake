import React, { useState } from "react";
import s from "./style.module.scss";
import bgImg from "../../Assets/Bg_icon.svg";
import iconImg from "../../Assets/Icon.svg";
import midEye from "../../Assets/mdi_eye-off.svg";
import Image from 'react-bootstrap/Image';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // e.preventDefault();
    // Handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
    // Perform authentication here
  };

  return (
    <div className={s.loginContainer}>
      <Image src={bgImg} alt="Not Available" className={s.loginBg} />
      <div className={s.loginBox}>
        <Image src={iconImg} alt="Not Available" className={s.icon} />
        <p style={{ fontSize: 26, fontWeight: 400 }}>
          Welcome to Digitalflake Admin
        </p>
        <div className={s.login_details}>
          <form onSubmit={handleSubmit}>
            <div className={s.form_group}>
            <fieldset>
              <legend>Email Id</legend>
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
                <div style={{display: "flex", flexDirection: "row"}}>
                  <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={s.form_input}
                />
                <button className={s.midEye}><Image src= {midEye} alt="Not avail" fluid/></button>
                </div>
              </fieldset>
            </div>
            <div className={s.submit_box}>
            <button className={s.forgot_pass}>Forgot Password?</button>
            <button type="submit" className={s.form_submit}>Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
import React from "react";
import { Images } from "../../assets/index";
import "./login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="login-parent-container">
        <div className="login-container">
          <div className="split">
            <img src={Images.home} alt="home" className="home-logo" />
          </div>
          <div className="split form-container">
            <form>
              <h3>HSCL</h3>
              <div className="input-container">
                <label>Unit</label>
                <select id="unit" className="form-control-select">
                  <option>Bokaro</option>
                  <option>Durgapur</option>
                  <option>Bhilai</option>
                  <option>Rourkela</option>
                  <option>Visakhapatnam</option>
                </select>
              </div>
              <div className="input-container">
                <label>Email Id</label>
                <input
                  type="text"
                  id="email_id"
                  name="email_id"
                  className="form-control"
                />
              </div>
              <div className="input-container">
                <label>Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                />
              </div>
              <div className="input-container">
                <button className="login-button">Login</button>
              </div>
              <p className="forgot-password">Forgot Password?</p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

import React from "react";
import "./Home.css";
import Sidebar from "../common/Sidebar";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Sidebar>
          <p>Working</p>
        </Sidebar>
      </div>
    );
  }
}

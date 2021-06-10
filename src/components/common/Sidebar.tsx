import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { SidebarMenu } from "./SidebarMenu";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul>
        {SidebarMenu.map((item: any, index: number) => {
          return (
            <li key={index}>
              <Link to={item.link}>
                <div>{item.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

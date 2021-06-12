import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { SidebarMenu } from "./SidebarMenu";
interface Props {
  children: any;
}
const Sidebar = ({ children }: Props) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <ul className="list">
          {SidebarMenu.map((item: any, index: number) => {
            return (
              <Link key={index} to={item.link} className="link-content">
                <li className="sidebar-content">
                  <div>{item.title}</div>
                </li>
              </Link>
              // <li key={index} className="sidebar-content">
              //   <Link to={item.link} className="link-content">
              //     <div>
              //       {item.icon}
              //       {item.title}
              //     </div>
              //   </Link>
              // </li>
            );
          })}
        </ul>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Sidebar;

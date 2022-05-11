import React from "react";
import PropTypes from "prop-types";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#FE7A15" : "white",
    };
  };

  return (
    <div className="app__header">
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="service" to="/" style={navLinkStyles}>
              <LocalFireDepartmentIcon />
              <span>Dịch vụ</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="product" to="/products" style={navLinkStyles}>
              <ShoppingCartIcon />
              <span>Sản phẩm</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="menu">
        <div className="icon">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}

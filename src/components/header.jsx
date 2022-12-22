import "../styles/header.css";
import React from "react";
import { logo } from "../assets/export-images";
import { Link } from "react-router-dom";
import { MenuDrawer } from "./menu-drawer";
import { CartDrawer } from "./cart-drawer";

const Header = () => {
  return (
    <nav>
      <MenuDrawer />
      <Link to="/">
        <img id="logo" src={logo} />
      </Link>
      <div className="menu">
        <Link to="/in-stock">EN STOCK</Link>
        <Link to="/select-knot">PERSONALIZADAS</Link>
        <Link to="/gallery">GALERÍA</Link>
      </div>
      <CartDrawer />
    </nav>
  );
};

export { Header };

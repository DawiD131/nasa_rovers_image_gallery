import React from "react";
import "../Sass/components/navbar.scss";
import nasa_logo from "../img/nasa_logo.png";
import FilterPanel from "../components/FilterPanel";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar__logo">
        <img src={nasa_logo} width="60px" height="50px" />
      </div>
      <h1 className="Navbar__header">NASA rovers image gallery</h1>
    </nav>
  );
};

export default Navbar;

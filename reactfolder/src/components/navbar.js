import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <NavLink to="/" className="nav-link active">Home </NavLink>
        <NavLink to="/menu" className="nav-link">Menú</NavLink>
        <NavLink to="/kitchen" className="nav-link">Kitchen</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;


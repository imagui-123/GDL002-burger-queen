import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <NavLink to="/" className="nav-link active">Home </NavLink>
        <NavLink to="/waiter" className="nav-link">Breakfast</NavLink>
        <NavLink to="/lunchMenu" className="nav-link">Lunch</NavLink>
        <NavLink to="/kitchen" className="nav-link">Kitchen</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;


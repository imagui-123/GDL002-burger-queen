import React, {Component} from "react";
import { Link } from "react-router-dom";
import logo from "../img/icono3.png";
import styled from "styled-components";
import {ButtonContainer} from "./Button";


export default class NavBar extends Component {
  render(){
  return (
    <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand"></img>
        </Link>
        <ul className="navbar-nav align-items-center">
        <Link to="/" className="nav-link">
          Menú
        </Link>
        <Link to="/kitchen" className="nav-link">
          Kitchen
        </Link>
        </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
            <span className="mr-2">
            <i className="fas fa-cart-plus" />
            </span>
            Order
          </ButtonContainer>
      </Link>
    </Nav>
  );
}
}

const Nav = styled.nav`
background: var(--mainMaroon);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;


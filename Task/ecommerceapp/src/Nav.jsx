import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./CSS/Nav-Page.css";

function Nav() {
  return (
    <>
      <nav>
        <div id="left">
          <h1>e-commerce </h1>
        </div>
        <div id="right">
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/product">product</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Nav;

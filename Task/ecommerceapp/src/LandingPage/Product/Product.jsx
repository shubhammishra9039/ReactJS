import React from "react";
import "../../CSS/Product-Page.css";
import { NavLink, Outlet } from "react-router-dom";

function Product() {
  return (
    <>
      Product
      <nav id="product-nav">
        <NavLink  to="mobile" exact activeClassName="active-link">
          Mobile
        </NavLink>
        <NavLink  to="laptop"> Laptop</NavLink>
        <NavLink to="cloth">Cloth</NavLink>
      </nav>
      <div className="Nested-Menu">
      <Outlet/>
      </div>
    </>
  );
}

export default Product;

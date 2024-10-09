import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Page.css";

function Page() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
    </>
  );
}

export default Page;

import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      About
      <hr />
      <nav>
        <Link to="CEO">CEO</Link>
        <Link to="MD">MD</Link>
      </nav>
    </>
  );
}

export default About;

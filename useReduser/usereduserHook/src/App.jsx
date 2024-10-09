import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./Router/Home";
import About from "./Router/About";
import Team from "./Router/Team";
import Page from "./Router/Page";
import Contact from "./Router/Contact";
import CEO from "./Router/CEO";
import MD from "./Router/MD";

function App() {
  return (
    <BrowserRouter>
      <Page />
      <hr/>
      <About/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/CEO" element={<CEO/>}/>
          <Route path="/MD" element={<MD/>}/>
        </Route>
        <Route path="/team" element={<Team />} />
       
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Home from "./LandingPage/Home/Home";
import About from "./LandingPage/About/About";
import Product from "./LandingPage/Product/Product";

import Contact from "./LandingPage/Contactus/Contact";
import Laptop from "./LandingPage/Product/Laptop/Laptop";
import Cloth from "./LandingPage/Product/cloth/Cloth";
import Mobile from "./LandingPage/Product/Mobile/Mobile";
import ProductDetail from "./LandingPage/ProductDeatil/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <ProductDetail/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />}>
            <Route path="mobile" element={<Mobile />} />
            <Route path="Laptop" element={<Laptop />} />
            <Route path="cloth" element={<Cloth />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

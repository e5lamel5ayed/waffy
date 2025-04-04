import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../Nav";
import Herro from "./Herro/Herro";
import Cards from "./Cards/Cards";
import Footer from "../../Sections/Footer/Footer";

function Blog() {
  return (

    <div className="Blog">
      <Nav/>
      <Herro/>
      <Cards/>
      <Footer />

    </div>
  );
}

export default Blog;

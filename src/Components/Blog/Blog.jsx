import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "../Nav";
import Herro from "./Herro/Herro";
import Cards from "./Cards/Cards";

function Blog() {
  return (

    <div className="Blog">
      <Nav />
      <Herro />
      <Cards />

    </div>
  );
}

export default Blog;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../Nav";

import Footer from "../../Sections/Footer/Footer";
import EmploymentCard from "./Employment-Card/Employment-Card";
import FormEmployment from "./Form-Employment/Form-Employment";

function Employment() {
  return (

    <div className="Employment">
      <Nav/>
      <EmploymentCard/>
      <FormEmployment/>
      <Footer />

    </div>
  );
}

export default Employment;

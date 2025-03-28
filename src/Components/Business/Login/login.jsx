import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
  return (
    <div className="container py-1">
    <div className="row  ">
      <div className="nav text-end col-md-12 d-flex align-items-center justify-content-between">
       <img src="\src\assets\img\waffyLogo.svg"></img>

        <button className="btn btn-success d-flex align-items-center gap-2 px-3 py-2">
          <i className="fab fa-whatsapp fa-lg"></i>
          <span>تواصل معنا</span>
        </button>
      </div>
    </div>
  </div>

  );
};

export default Login;

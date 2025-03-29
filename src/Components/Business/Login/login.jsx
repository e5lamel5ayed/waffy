import React from "react";
import './login.css'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-white" style={{height:'100vh'}}>
      <div className="nav-bar bg-white ">
        <div className="container w-75 d-flex justify-content-between align-items-center ">
          {/* زر التواصل مع واتساب */}
          <button className="btnn   border px-4 d-flex align-items-center">

            تواصل معنا
            <img src="\src\assets\img\whatsapp.svg" className="text-success mx-2"></img>
          </button>

          <Link to='/' style={{textDecoration:"none"}}>
            <h3 className="fw-bold m-0 text-dark">وفّي</h3>
          </Link>
        </div>
      </div>

      <div className="top-section" />

      <div className="profile-img">
        <img src="\src\assets\img\auth.svg" alt="Profile" className="img-fluid" />
      </div>


      <div className="container text-center phone-card mt-1">
        <h3 className="fw-bold">أهلًا بك في وفـي، أدخل رقم جوالك</h3>

        <div className=" p-3 mx-auto" style={{ maxWidth: 440 }}>
          <div className="input-group ">
            <span className="input-group-text py-3">
              <img src="\src\assets\img\saudi_flag.svg" alt="SA" width="30" />
            </span>
            <input type="text" className="form-control" placeholder="+966 567XXXXXX" />
          </div>
          <button className="next   mt-3 w-100 fw-bold" disabled >التالي</button>
        </div>
      </div>
    </div>



  );
};

export default Login;
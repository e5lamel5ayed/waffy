import React from "react";
import "./section1.css";
//-------------------------

function Section1() {
  return (
  
    <div className="sec1 container-fluid d-flex align-items-center justify-content-center">
    <div className="row w-100 justify-content-around mt-4">
      {/* الجزء الأيسر - الصورة */}
      <div className="col-md-7 d-flex  justify-content-center">
        <img
          src="/src/assets/Group-7887711.webp"
          className="img-fluid"
          alt="Illustration"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
  
      {/* الجزء الأيمن - النص والنموذج */}
      <div className="col-md-5 d-flex flex-column ">
        <h3 className="fs-2 text-end ">وفّي، شريكك المالي في عالم الوساطة</h3>
        <p className=" text-end fs-5 mt-3">
          مع وفّي نضمن الأموال، لتركز على عملك كوسيط ضامن لإدارة المعاملات بثقة وأمان
        </p>
  
        <div className="form p-4  mt-5">
          <p className="fw-bold  text-end fs-5 mt-3">سجل رقم جوالك للتواصل</p>
          <input
            type="text"
            className="form-control mb-3  text-end "
            placeholder="الإسم"
          />
          <input
            type="number"
            className="form-control mb-3  text-end "
            placeholder="رقم الجوال"
          />
          <button className="btn btn-primary w-100  fw-bold">سجل الآن</button>
        </div>
      </div>
    </div>
  </div>
  

 
  );
}

export default Section1;

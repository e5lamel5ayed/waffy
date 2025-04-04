import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function Herro() {
  return (
  
    <div className="Blog">

<div className="Herro mt-5 py-3 d-flex flex-column justify-content-center align-items-center">
<p className="text-dark">المدونة</p>
<h1 className="fw-bold mb-4">مرحبا بك في مدونة وفي</h1>
<p className="text-dark">الطريقة الأئمن للبيع والشراء بين الأفراد</p>

<div className="container d-flex justify-content-center align-items-center mt-5 gap-5 py-4 fs-4 text-muted" dir="rtl">
    <a>الكل</a>
    <a>الأخبار</a>
    <a>البائع</a>
    <a>المشتري</a>
    <a>كيف نحفظ الأموال</a>

</div>

</div>

    </div>
  );
}

export default Herro;

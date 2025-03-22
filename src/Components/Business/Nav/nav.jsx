import React from 'react';
import './nav.css'
//-------------------------

function Nav() {
  return (
    <>
 <nav className="navbar bg-white shadow-sm py-4 px-4">
  <div className="container-fluid d-flex justify-content-between align-items-center">
    {/* زر تسجيل الدخول */}
    <button className="btn btn-dark ">تسجيل الدخول</button>

    {/* روابط التنقل */}
    <div className="d-flex gap-4">
      <a href="#" className="text-dark text-decoration-none fw-semibold">وفّي أفراد</a>
      <a href="#" className="text-dark text-decoration-none fw-semibold">الأسئلة الشائعة</a>
      <a href="#" className="text-dark text-decoration-none fw-semibold">كيف تستخدم وفّي</a>
      <a href="#" className="text-dark text-decoration-none fw-semibold">لماذا وفّي</a>
    </div>

    {/* اللوجو */}
    <img
      src="/src/assets/photo_2025-03-21_17-33-57.jpg"
      alt="Logo"
      className="logo"
      style={{ height: "40px" }}
    />
  </div>
</nav>

    </>
  );
}

export default Nav;
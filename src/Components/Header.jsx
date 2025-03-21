import React from 'react';
import  '../CSS/nav.css'
//-------------------------------
function Header() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
        <button className="login-btn">تسجيل الدخول</button>
          

          <div className="nav-links">
            <a href="#">تحدث معنا</a>
            <a href="#">التوظيف</a>
            <a href="#">المدونة</a>
            <a href="#">وفّي أعمال</a>
            <a href="#">الأسئلة الشائعة</a>
            <a href="#">الميزات</a>
          </div>
          <h1 className="logo">وفّي</h1>
          
        </div>
      </nav>

      
    </div>
  );
}

export default Header;

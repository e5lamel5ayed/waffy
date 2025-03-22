import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import '../CSS/nav.css';

function Nav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Login Button */}
          <button className="login-btn">تسجيل الدخول</button>

          {/* Menu Button */}
          <button className="menu-btn" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>

          {/* Regular Links */}
          <div className="nav-links">
            <a href="#">تحدث معنا</a>
            <a href="#">التوظيف</a>
            <a href="#">المدونة</a>
            <a href="#">وفّي أعمال</a>
            <a href="#">الأسئلة الشائعة</a>
            <a href="#">الميزات</a>
          </div>

          {/* Logo */}
          <h1 className="logo">وفّي</h1>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={() => setSidebarOpen(false)}>
          &times;
        </div>
        <a href="#">تحدث معنا</a>
        <a href="#">التوظيف</a>
        <a href="#">المدونة</a>
        <a href="#">وفّي أعمال</a>
        <a href="#">الأسئلة الشائعة</a>
        <a href="#">الميزات</a>
        <button className="login-btn">تسجيل الدخول</button>
      </div>
    </div>
  );
}

export default Nav;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import '../CSS/nav.css';
//-------------------------------------------------
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
          <Link to="/login" className="login-btn">تسجيل الدخول</Link>

          {/* Menu Button */}
          <button className="menu-btn" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>

          {/* Regular Links */}
          <div className="nav-links">
            <Link to="/contact">تحدث معنا</Link>
            <Link to="/jobs">التوظيف</Link>
            <Link to="/blog">المدونة</Link>
            <Link to="/business">وفّي أعمال</Link>
            <Link to="/faq">الأسئلة الشائعة</Link>
            <Link to="/features">الميزات</Link>
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
        <Link to="/contact">تحدث معنا</Link>
        <Link to="/jobs">التوظيف</Link>
        <Link to="/blog">المدونة</Link>
        <Link to="/business">وفّي أعمال</Link>
        <Link to="/faq">الأسئلة الشائعة</Link>
        <Link to="/features">الميزات</Link>
        <Link to="/login" className="login-btn">تسجيل الدخول</Link>
      </div>
    </div>
  );
}

export default Nav;

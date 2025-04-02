import React, { useState } from "react";
import { Menu } from "lucide-react";
import "./secondNav.css";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import LogoutIcon from '@mui/icons-material/Logout';

//-------------------------

function SecondNav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <nav className="navbar  bg-white  py-4 {`navbar ${isScrolled ? 'scrolled' : ''}`}">
        <div className=" container-fluid  justify-content-between align-items-center" style={{ width: '90%' }}>
          {/* زر تسجيل الدخول */}

          {isLoggedIn ? (
            <Link to="/login">
              <button className="btnlog" onClick={handleLogout}>
                تسجيل الحروج
                <LogoutIcon style={{marginLeft:'10px'}}/>
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btnlog">تسجيل الدخول</button>
            </Link>)}
          {/* Menu Button */}
          <button className="menu-btn" onClick={toggleSidebar}>
            <Menu color="#000" size={38} />
          </button>
          {/* روابط التنقل */}
          <div className=" gap-4 nav-links text-dark text-decoration-none fw-semibold nav-links-mop">

            {isLoggedIn && (
              <Link to="/ticket">التذاكر</Link>
            )}
            <Link to="/"> وفّي أفراد</Link>
            <ScrollLink to="faq-section" style={{ cursor: 'pointer' }} smooth={true} duration={500}>الأسئلة الشائعة</ScrollLink>
            <ScrollLink to="how" style={{ cursor: 'pointer' }} smooth={true} duration={500}>  كيف تستخدم وفّي </ScrollLink>
            <ScrollLink to="why-wafi" style={{ cursor: 'pointer' }} smooth={true} duration={500}>  لماذا وفّي</ScrollLink>

          </div>

          {/* اللوجو */}
          <Link to={"/"}>
            <img
              src="/src/assets/img/photo_2025-03-21_17-33-57.jpg"
              alt="Logo"
              className="logo"
              style={{ height: "40px" }}
            />
          </Link>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={() => setSidebarOpen(false)}>
          &times;
        </div>
        {isLoggedIn && (
          <Link className="text-dark text-decoration-none fw-semibold" to="/ticket">التذاكر</Link>
        )}
        <a href="#" className="text-dark text-decoration-none fw-semibold">
          وفّي أفراد
        </a>
        <a href="#" className="text-dark text-decoration-none fw-semibold">
          الأسئلة الشائعة
        </a>
        <a href="#" className="text-dark text-decoration-none fw-semibold">
          كيف تستخدم وفّي
        </a>
        <a href="#" className="text-dark text-decoration-none fw-semibold">
          لماذا وفّي
        </a>
      </div>
    </>
  );
}

export default SecondNav;

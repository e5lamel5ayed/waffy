import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import "../Components/nav.css";
import LogoutIcon from '@mui/icons-material/Logout';
function Nav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.reload();
    navigate('/login');
  };
  
  const phoneNumber = "+966553043449";
  const message = "مرحباً، أريد الاستفسار عن...";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container container-fluid">
          {isLoggedIn ? (
            <Link className="login-btn" onClick={handleLogout}>
              تسجيل الخروج
              <LogoutIcon style={{ marginLeft: '10px' }} />
            </Link>
          ) : (
            <Link to="/login" className="login-btn">تسجيل الدخول</Link>
          )}

          <button className="menu-btn" onClick={toggleSidebar}>
            <Menu size={30} />
          </button>

          <div className="nav-links ">
            {isLoggedIn && (
              <Link to="/ticket">التذاكر</Link>
            )}
            <a style={{cursor:'pointer'}} onClick={openWhatsApp}>تحدث معنا</a>
            <a href="#employment">التوظيف</a>
            <a href="#blog">المدونة</a>
            <a href="#business">وفّي أعمال</a>
            <ScrollLink to="faq-section2" style={{ cursor: 'pointer' }} smooth={true} duration={500}>الأسئلة الشائعة</ScrollLink>
            <ScrollLink to="slider-container" style={{ cursor: 'pointer' }} smooth={true} duration={500}>الميزات</ScrollLink>
          </div>
          <Link className='text-decoration-none' to="/">

            <h1 className="logo">وفّي</h1>
          </Link>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={() => setSidebarOpen(false)}>&times;</div>
        <ScrollLink to="slider-container" smooth={true} duration={500} onClick={() => setSidebarOpen(false)} className="custom-scroll-link">
          الميزات
        </ScrollLink>
        <ScrollLink to="faq-section2" smooth={true} duration={500} onClick={() => setSidebarOpen(false)} className="custom-scroll-link">
          الأسئلة الشائعة
        </ScrollLink>
        <a href="#business">وفّي أعمال</a>
        <a href="#blog">المدونة</a>
        <a href="#employment">التوظيف</a>
        {isLoggedIn && (
          <Link to="/ticket">التذاكر</Link>
        )}
        <a onClick={openWhatsApp}>تحدث معنا</a>

      </div>
    </div>
  );
}

export default Nav;
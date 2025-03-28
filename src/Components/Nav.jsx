import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import "../Components/nav.css";
//-----------------------------------------------------------
function Nav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/login" className="login-btn">تسجيل الدخول</Link>

          <button className="menu-btn" onClick={toggleSidebar}>
            <Menu size={30} />
          </button>

          <div className="nav-links">
            <a href="#contact">تحدث معنا</a>
            <a href="#jobs">التوظيف</a>
            <a href="#blog">المدونة</a>
            <a href="#business">وفّي أعمال</a>
            <ScrollLink to="faq-section" style={{cursor:'pointer'}}  smooth={true} duration={500}>الأسئلة الشائعة</ScrollLink>
            <ScrollLink to="slider-container" style={{cursor:'pointer'}} smooth={true} duration={500}>الميزات</ScrollLink>
          </div>

          <h1 className="logo">وفّي</h1>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={() => setSidebarOpen(false)}>&times;</div>
        <a href="#contact">تحدث معنا</a>
        <a href="#jobs">التوظيف</a>
        <a href="#blog">المدونة</a>
        <a href="#business">وفّي أعمال</a>
        <ScrollLink 
  to="faq-section" 
  smooth={true} 
  duration={500} 
  onClick={() => setSidebarOpen(false)}
  className="custom-scroll-link"
>
  الأسئلة الشائعة
</ScrollLink>

         <ScrollLink 
            to="features-section" 
            smooth={true} 
            duration={500} 
            onClick={() => setSidebarOpen(false)}
            className="custom-scroll-link"
          >
  الميزات         
          </ScrollLink>
        <Link to="/login" className="login-btn">تسجيل الدخول</Link>
      </div>
    </div>
  );
}

export default Nav;
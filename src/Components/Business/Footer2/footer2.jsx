import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import "./footer2.css";

function Footer2() {
  return (
    <footer className="footer-container" dir="rtl">
      <div className="container-fluid px-5">
        
        {/* القسم العلوي */}
        <div className="footer-top">
          <div className="footer-logo">
            <img
              src="\src\assets\img\PNG-02-1-1024x664.webp"
              className="logo-img"
              alt="Image"
            />
            <p className="logo-text">
              الوسيط الآمن<br /> للتعامل بين الأفراد
            </p>
          </div>
          <div className="footer-links ">
            <a href="#" className="footer-link">لماذا وفي</a>
            <a href="#" className="footer-link">كيف تستخدم وفي</a>
            <a href="#" className="footer-link">وفي أفراد</a>
            <a href="#" className="footer-link">اتصل بنا</a>
          </div>
        </div>

        {/* القسم السفلي */}
        <div className="footer-bottom fw-600">
          <div className="footer-rights ">
            <p>وفي
              ©2024  جميع <br/>الحقوق محفوظة</p>
          </div>

          <div className="footer-center">
            <span>Powered By Gotrah</span>
            <a href="#" className="footer-policy">الشروط والأحكام</a>
            <a href="#" className="footer-policy">سياسة الخصوصية</a>
          </div>

          <div className="footer-social ">
            <a href="#"><FaXTwitter size={30} /></a>
            <a href="#"><FaInstagram size={30} /></a>
            <a href="#"><FaFacebook size={30} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer2;

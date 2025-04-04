import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import "./footer2.css";
import { Box } from "@mui/material";

function Footer2() {
  return (
    <footer className="footer-container" dir="rtl">
      <div className="container-fluid px-5">

        <Box sx={{ borderTop: "1px solid #fff", mt: 0, pt: 3, display: "flex", justifyContent: "center", margin: "auto" }}>
          <div className="footerr-top d-flex gap-5 justify-content-between w-100 px-5" dir="rtl">
            <div className="footerr-logo">
              <img
                src="/assets/footelogo.webp"
                className="logo-img2"
                alt="Image"
              />
              <p className="logo-text2">
                الوسيط الآمن<br className="text-black"/> للتعامل بين الأفراد
              </p>
            </div>
            <div className="footer-links2 ">
              <a href="#" className="footer-link2">لماذا وفي</a>
              <a href="#" className="footer-link2">كيف تستخدم وفي</a>
              <a href="#" className="footer-link2">وفي أفراد</a>
              <a href="#" className="footer-link2">اتصل بنا</a>
            </div>
          </div>
        </Box>


        {/* القسم السفلي */}
        <div className="footer-bottom fw-600">
          <div className="footer-rights ">
            <p>وفي
              ©2024  جميع <br />الحقوق محفوظة</p>
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

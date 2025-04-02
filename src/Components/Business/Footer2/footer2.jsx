import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

import "./footer2.css";
//-------------------------

function Footer2() {
  return (
    <footer className="bg-light py-2 mt-5  " dir="rtl">
      <div className="Container-fluid mx-5">
        <Row className="justify-content-between align-items-center mb-5">
          <Col
            md={4}
            className="text-md-start text-center d-flex align-items-center"
          >
            <img
              src="\src\assets\img\PNG-02-1-1024x664.webp"
              style={{ width: "120px", height: "70px" }}
              className="border-start border-1 border-dark px-3"
              alt="Image"
            />{" "}
            <p className="px-3 text-end text-dark fs-4">
              الوسيط الآمن<pre /> للتعامل بين الأفراد
            </p>
          </Col>
          <Col md={4} className="d-flex justify-content-center fs-5 gap-2">
            <a href="#" className="px-2 text-dark text-decoration-none">
              لماذا وفي
            </a>
            <a href="#" className="px-2 text-dark text-decoration-none">
              كيف تستخدم وفي
            </a>
            <a href="#" className="px-2 text-dark text-decoration-none">
              وفي أفراد
            </a>
            <a href="#" className="px-2 text-dark text-decoration-none">
              اتصل بنا
            </a>
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col md={2} className="text-md-start text-center">
        <p className="mb-0 text-end text-dark">جميع الحقوق محفوظة ©2024 وفي</p>
        </Col>

          <Col md={7} className=" text-center fs-5 mx-auto gap-4 text-dark">

          <span className="mx-2">Powered By Gotrah</span>

            <a href="#" className="mx-2 text-dark text-decoration-none">
              الشروط والأحكام
            </a>
            <a href="#" className="mx-2 text-dark text-decoration-none">
              سياسة الخصوصية
            </a>
          </Col>

          <Col
            md={3}
            className="d-flex justify-content-md-end align-items-center text-dark fs-3"
          >
           <a href="#" className="mx-2 text-dark">
              <FaXTwitter size={28} />
            </a>
            <a href="#" className="mx-2 text-dark">
              <FaInstagram size={28} />
            </a>
        
            <a href="#" className="mx-2 text-dark">
              <FaFacebook size={28} />
            </a>
          </Col>

        </Row>
      </div>
    </footer>
  );
}

export default Footer2;

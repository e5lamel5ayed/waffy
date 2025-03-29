import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6"; 

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* شعار "وفي" */}
          <Col md={4} className="text-md-end mb-3 mb-md-0">
            <div>
              <h4 className="fw-bold">وفي</h4>
              <p className="text-muted mb-0">الوسيط الآمن للتعامل بين الأفراد</p>
            </div>
          </Col>

          {/* روابط القائمة */}
          <Col md={4} className="d-flex justify-content-center mb-3 mb-md-0">
            <ul className="list-unstyled d-flex gap-3">
              <li><a href="#" className="text-dark text-decoration-none">لماذا وفي</a></li>
              <li><a href="#" className="text-dark text-decoration-none">كيف تستخدم وفي</a></li>
              <li><a href="#" className="text-dark text-decoration-none">وفي أفراد</a></li>
              <li><a href="#" className="text-dark text-decoration-none">اتصل بنا</a></li>
            </ul>
          </Col>

          {/* أيقونات السوشيال ميديا */}
          <Col md={4} className="text-md-start text-center">
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-dark"><FaFacebook size={24} /></a>
              <a href="#" className="text-dark"><FaInstagram size={24} /></a>
              <a href="#" className="text-dark"><FaXTwitter size={24} /></a>
            </div>
          </Col>
        </Row>

        {/* الشروط والخصوصية */}
        <Row className="mt-3 text-center text-md-start">
          <Col md={6}>
            <p className="mb-0">
              <a href="#" className="text-dark text-decoration-none">الشروط والأحكام</a> |
              <a href="#" className="text-dark text-decoration-none"> سياسة الخصوصية</a>
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0">© 2024 وفي جميع الحقوق محفوظة | Powered By Gotrah</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

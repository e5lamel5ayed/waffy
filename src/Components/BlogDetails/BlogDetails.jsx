import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import Footer from "../../Sections/Footer/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHandshake, FaMoneyBillWave, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

import Nav from "../Nav";

const Data = [
  {
    img: "/assets/img/ph2.webp",
    title: "تبيع أو تشتري سيارة مستعملة ؟ إضمن حقوقك مع وفّي",
    text: "هل تدور في بالك فكرة شراء أو بيع سيارة مستعملة؟ ودك تشتري أو تبيع بس محتار ومخاف تواجه مشاكل؟ مع وفي، استخدم خدمة الضمان الحصرية…",
  },
  {
    img: "/assets/img/ph22.webp",
    title: "تبيع لوحات سيارات مميزة ؟ إضمن عربونك ودير مبيعاتك في مكان واحد",
    text: "هل تمتلك لوحات سيارات مميزة وترغب في بيعها؟ هل تبحث عن مكان واحد يوفر لك الأمان ويسهل عليك إدارة مبيعاتك؟ مع وفّي، يمكنك ضمان عربونك…",
  },
  {
    img: "/assets/img/ph1.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
];

function BlogDetails() {
  return (
    <div className="BlogDetails ">
      <Nav />

      {/* hero section */}
      <div className="heero ">
        <Container fluid className="text-white py-5" style={{ backgroundColor: '#121326' }}>
          <Row className="align-items-center mt-5 gap-5 mb-5">
            {/* القسم الأيسر - الأيقونات والمشاركة */}
            <Col md={5} className="text-md-end text-center mb-3 mb-md-0">
              <div className="d-inline-flex gap-2 ms-3 ">
                <a href="#" className="text-white border rounded p-2">
                  <FaXTwitter size={30} />
                </a>
                <a href="#" className="text-white border rounded p-2">
                  <FaInstagram size={30} />
                </a>
                <a href="#" className="text-white border rounded p-2">
                  <FaFacebook size={30} />
                </a>
                <a href="#" className="text-white border rounded p-2">
                  <FaWhatsapp size={30} />
                </a>
              </div>
              <span className="fw-bold px-3 fs-5">: مشاركة المقال عبر </span>
            </Col>

            {/* القسم الأيمن - النص */}
            <Col md={6} className="text-md-end text-center">
              <h1 className="fw-bold text-white mb-5 fs-1">
                تشتغل بالعمل الحر؟ اضمن <br />
                عرونك وكل مستحقاتك مع وفّي
              </h1>
              <p className="mt-2 text-white ">
                <span className="fw-bold ">بواسطة:</span> فريق وفي |
                <span className="fw-bold ms-2 mr-3">التاريخ: </span> 24-03-2024
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* details section */}
      <div className="details" style={{ width: '90%', margin :'-110px auto' }}>
        <Container
          fluid
          className="my-5 text-center p-0 "
          style={{ backgroundColor: "#f8fafb", borderRadius: '15px' }}
        >
          <img src="/assets/blogDetails.png" className="w-100" style={{ borderRadius: '15px' }} />
          <div className="container">

            {/* العنوان الرئيسي */}
            <h2 className="fw-bold text-dark fs-2 mt-5">
              هل أنت تعمل بالعمل الحر؟ تبي تضمن عرڤونك وتحمي كل مستحقاتك بطريقة
              موثوقة ومضمونة؟ مع خدمة وفّي ,تقدر تطمئن وتشتغل براحة بال وبثقة
            </h2>

            {/* زر التحميل */}
            <button
              className=" mt-3 px-4 py-3 fs-5 border-0 rounded-pill text-white"
              style={{ backgroundColor: "#0693e3" }}
            >
              حمّل تطبيق وَفِي الآن واحصل على ضمان في جميع معاملاتك
            </button>

            {/* قسم الأسئلة */}
            <div className="mt-5 text-end" dir="rtl">
              {/* لماذا تختار الخدمة؟ */}

              <h1 className="fw-bold  text-muted"> ليش تختار خدمة ضمان وفّي؟</h1>
              <p className="mb-4">
                <FaHandshake className="text-warning me-2" />
                <strong>ضمان العملاء:</strong> مع وفّي، يمكنك كفريلانسر ضمان
                استلام عربونك بأمان
              </p>
              <p className="mb-4">
                <FaMoneyBillWave className="text-warning me-2" />
                <strong>حماية المدفوعات:</strong> نحن هنا لضمان استلامك لكل
                مستحقاتك، حيث يتم حفظ العربون بشكل آمن حتى تكتمل الخدمة بالكامل
              </p>
              <p className="mb-4">
                <FaLock className="text-warning me-2" />
                <strong>سلامة المعاملات: </strong> توفر خدمة وفّي بيئة آمنة
                وموثوقة لإجراء المعاملات، مما يضمن سلامة عربونك ومستحقاتك
              </p>

              {/* كيف تعمل الخدمة؟ */}

              <h1 className="fw-bold  text-muted">كيف تعمل خدمة ضمان وَفِي؟</h1>
              <p className="mb-4">
                <strong>تحديد الشروط:</strong> قم بتحديد شروط العمل والمبلغ
                المطلوب كعرڤون.
              </p>
              <p className="mb-4">
                <strong>دفع العرڤون:</strong> نحن نقوم بحجز المبلغ بشكل آمن حتى
                اكتمال الخدمة.
              </p>

              <p className="mb-4">
                <strong> إتمام الخدمة:</strong> بمجرد إتمام الخدمة بالكامل ورضا
                العميل، يتم تحويل العربون ومستحقاتك بالكامل إليك
              </p>
            </div>

            <h1 className="fw-bold text-dark  mt-5 pt-5">
              انضم إلينا اليوم واستمتع بحماية عربونك ومستحقاتك كفريلانسر بثقة
              وأمان مع وفّي
            </h1>

            {/* زر التحميل */}
            <button
              className=" mt-3 px-4 py-3 mb-5 fs-5 border-0 rounded-pill text-white"
              style={{ backgroundColor: "#0693e3" }}
            >
              ابدأ معاملتك الآن
            </button>
          </div>
        </Container>
      </div>

      {/* another section  */}
      <div className="another mt-5">
        <div className="cards my-5 container-fluid" style={{ width: "95%" }}>
          <h1 className="fw-bold text-end my-5">مقالات أخرى</h1>
          <Row className="g-3 ">
            {Data.map((card, index) => (
              <Col md={4} key={index}>
                <Link class="text-decoration-none" to="/blog-details">
                  <Card className=" border-0 text-end">
                    <Card.Img
                      variant="top"
                      className="custom-img"
                      src={card.img}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold fs-4 mb-4 mt-3">
                        {card.title}
                      </Card.Title>
                      <Card.Text className=" fs-5">{card.text}</Card.Text>
                      <Link to="/blog-details">
                        <button className="fw-bold   border  ">
                          قراءة المزيد
                        </button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BlogDetails;

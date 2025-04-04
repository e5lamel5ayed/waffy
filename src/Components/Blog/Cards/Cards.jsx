import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Cards.css';

const cardsData = [
  {
    img: "/assets/img/ph2.webp",
    title: "تبيع أو تشتري سيارة مستعملة ؟ إضمن حقوقك مع وفّي",
    text: "هل تدور في بالك فكرة شراء أو بيع سيارة مستعملة؟ ودك تشتري أو تبيع بس محتار ومخاف تواجه مشاكل؟ مع وفي، استخدم خدمة الضمان الحصرية…",
  },
  {
    img: "/assets/img/ph22.webp",
    title: "تبيع لوحات سيارات مميزة ؟ إضمن عربونك ودير مبيعاتك في مكان واحد",
    text: "هل تمتلك لوحات سيارات مميزة وترغب في بيعها؟ هل تبحث عن مكان واحد يوفر لك الأمان ويسهل عليك إدارة مبيعاتك؟ مع وفّي، يمكنك ضمان عربونك…"
  },
  {
    img: "/assets/img/ph1.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
];

const Cards = () => {
  return (
    <div className="cards my-5 container-fluid">
      <Row className="g-4">
        {cardsData.map((card, index) => (
          <Col md={4} key={index}>
            <Card className=" border-0 text-end">
              <Card.Img variant="top"     className="custom-img" src={card.img} />
              <Card.Body>
                <Card.Title className="fw-bold fs-4 mb-4 mt-3">{card.title}</Card.Title>
                <Card.Text className=" fs-5">{card.text}</Card.Text>
                <button  className="fw-bold   border  ">
                  قراءة المزيد
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;

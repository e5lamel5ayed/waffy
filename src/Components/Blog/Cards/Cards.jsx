import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


import { Link } from "react-router-dom";

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
  {
    img: "/assets/img/ph6.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph5.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph4.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph9.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph8.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph7.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph12.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph11.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph10.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph15.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph14.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph13.jpg",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph18.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph17.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph16t.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph21.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph20.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph19.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph24.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph23.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph222.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph27.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph26.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph25.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph30.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph29.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph28.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph33.png",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph32.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph31.jpg",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph36.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph35.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph34.jpg ",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph38.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
  {
    img: "/assets/img/ph37.webp",
    title: "تشتغل بالعمل الحر ؟ اضمن عربونك وكل مستحقاتك مع وفّي",
    text: "هل أنت تعمل بالعمل الحر؟ تبغى تضمن عربونك وتحمي مستحقاتك بطريقة موثوقة...",
  },
];

const Cards = () => {
  return (
    <div className="cards my-5 container-fluid" style={{width:'95%'}}>
      <Row className="g-3 ">
        {cardsData.map((card, index) => (
          <Col md={4} key={index}>
                <Link class="text-decoration-none" to="/blog-details">

            <Card className=" border-0 text-end">
              <Card.Img variant="top"     className="custom-img" src={card.img} />
              <Card.Body>
                <Card.Title className="fw-bold fs-4 mb-4 mt-3">{card.title}</Card.Title>
                <Card.Text className=" fs-5">{card.text}</Card.Text>
               <Link to="/blog-details">
                <button  className="fw-bold   border  ">
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
  );
};

export default Cards;

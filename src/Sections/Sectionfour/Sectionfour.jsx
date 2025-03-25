import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import client from "../../assets/car.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";
import client6 from "../../assets/client6.png";
import client8 from "../../assets/client8.png";
import client9 from "../../assets/client9.png";

const Sectionfour = () => {
  const cardsData = [
    { id: 1, image: client, title: "تبيع او تشتري سيارة مستعملة ؟", text: "اضمن حقوقك مع وفّي" },
    { id: 2, image: client3, title: "تبيع لوحات سيارات مميزة؟", text: "اضمن عربونك ودير مبيعاتك في مكان واحد " },
    { id: 3, image: client4, title: "تشتغل بالعمل الحر ؟", text: "اضمن عربونك وكل مستحقاتك مع وفّي" },
    { id: 4, image: client5, title: "!سلمت  المشروع؟", text: "اضمن مستحقاتك مع وفّي" },
    { id: 5, image: client6, title: "تشتري جهاز مستعمل ؟", text: "اضمن حقوقك وجودة المنتج مع وفّي" },
    { id: 5, image: client8, title:    "تبيع حسابات رقمية ؟", text: "عزز ثقة عملائك وزيد مبيعاتك مع وفّي" },
    { id: 5, image: client9, title: "تحب تشتري وتبيع العاب ؟", text: "اضمن حقوقك وزيد مبيعاتك مع وفّي " },
  ];

  return (
    <div className="slider-container">
      <div className="slider-header" style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "50px", fontWeight: "bold" }}>ندعم العديد من المنتجات والخدمات، كل ما تحتاج إليه لمعاملة آمنة وسهلة</h2>
        <p style={{ fontSize: "25px", maxWidth: "600px", margin: "0 auto" }}>
          صممنا حلولًا تناسب احتياجاتك، بيع على وفي خدماتك مثل (الحسابات الرقمية)، ومنتجاتك مثل: (الإلكترونيات، لوحات السيارات، والألعاب)، والمزيد.
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
      >
        {cardsData.map((card) => (
          <SwiperSlide key={card.id}>
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
              <h3 style={{ fontSize: "35px", fontWeight: "bold" }}>{card.title}</h3>
              <p style={{ fontSize: "20px", marginTop: "5px" }}>{card.text}</p>
            </div>
            <img src={card.image} alt={`Card ${card.id}`} className="slider-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sectionfour;
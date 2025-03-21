import React from 'react';
import img from "../assets/img.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import extraImg from "../assets/step.png";
import '../CSS/nav.css';
//_________________________________________________
const steps = [
  { img: img, text: "البائع يسجل تفاصيل المنتج أو الخدمة" },
  { img: img2, text: "المشتري يدفع عبر وفّي" },
  { img: img3, text: "وفّي يحوّل الفلوس للبائع" },
  { img: img4, text: "وفّي يحوّل الفلوس للبائع" },
  { img: img5, text: "وفّي يحوّل الفلوس للبائع" }
];

function Hero() {
  return (
    <div className="hero">
      <h2> الوسيط الآمن في التعاملات المالية <span className="primary-text">وفّي</span></h2>
      <p>تجنب الإحتيال وتمتع بحلول دفع آمنة</p>

      <div className="steps">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="step">
              <img src={step.img} alt={`Step ${index + 1}`} />
              <p>{step.text}</p>
            </div>
            {index < steps.length - 1 && ( 
              <div className="extra-img">
                <img src={extraImg} alt="Extra Step" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <button className="cta-btn">سجل الآن</button>
    </div>
  );
}

export default Hero;

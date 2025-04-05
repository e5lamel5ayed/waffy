import React from 'react';
import img from "/assets/img.png";
import img2 from "/assets/img2.png";
import img3 from "/assets/img3.png";
import img4 from "/assets/img4.png";
import img5 from "/assets/img5.png";
import extraImg from "/assets/step.png";
import './hero.css';
import { Link } from 'react-router-dom';

//--------------------------------
const steps = [
  { img: img5, text: "وفّي يحوّل الفلوس للبائع" },
  { img: img4, text: "الـمشتري يوافق على الاستلام" },
  { img: img3, text: "البائع يسلم المنتج أو الخدمة" },
  { img: img2, text: "المشتري يدفع عبر وفّي" },
  { img: img, text: "البائع يسجل تفاصيل المنتج أو الخدمة" }
];

function Hero() {
  return (
    <div className="hero" style={{ padding: '50px 10%', textAlign: 'center' }}>
      <h2> الوسيط الآمن في التعاملات المالية <span className="primary-text">وفّي</span></h2>
      <p>تجنب الإحتيال وتمتع بحلول دفع آمنة</p>

      <div className="steps" style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="step" style={{ textAlign: 'center', maxWidth: '200px' }}>
              <img src={step.img} alt={`Step ${index + 1}`} style={{ width: '50%', borderRadius: '10px', height: "60%", color: '#404d58' }} />
              <p style={{ fontSize: '18px', fontWeight: '600', marginTop: '10px' }}>{step.text}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="extra-img">
                <img src={extraImg} alt="Extra Step" style={{ width: '100px', height: '30px' }} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <Link to="/Login">
        <button className="btn" style={{ marginTop: '30px', padding: '10px 20px', fontSize: '18px', }}>سجل الآن</button>
      </Link>
    </div>
  );
}

export default Hero;

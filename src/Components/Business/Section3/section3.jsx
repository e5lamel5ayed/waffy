import React from 'react';
import './section3.css'
//-------------------------

function Section3() {
  return (
    <section class="steps-section">
    <div class="container">
      <h2 class="section-title">كيف تستخدم وفّي لإتمام معاملاتك</h2>
  
      <div class="content">
        <div class="image-container">
          <img src="your-image-path.png" alt="طريقة استخدام وفّي" class="steps-image"/>
        </div>
  
        <div class="steps-list">
          <div class="step">
            <span class="step-number">1</span>
            <p><strong>الاتفاق:</strong> تسجيل الوسيط الضامن للاتفاق</p>
          </div>
  
          <div class="step">
            <span class="step-number">2</span>
            <p><strong>الدفع:</strong> المودع يقوم بدفع المبلغ</p>
          </div>
  
          <div class="step">
            <span class="step-number">3</span>
            <p><strong>الإيداع:</strong> وفّي يضمن استلام الأموال</p>
          </div>
  
          <div class="step">
            <span class="step-number">4</span>
            <p><strong>التقييم:</strong> المودع له يقدّم الوثائق</p>
          </div>
  
          <div class="step">
            <span class="step-number">5</span>
            <p><strong>التحويل:</strong> الوسيط يوافق على تحويل الأموال</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Section3;
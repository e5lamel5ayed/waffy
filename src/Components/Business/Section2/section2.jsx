import React from 'react';
import './section2.css'

//-------------------------

function Section2() {
  return (
//    <div className="container">

//     <div className="row">
//         <h2>لماذا وفّي؟</h2>
//         <p>استخدم وفّي، وأمن على أموال عملائك بثقة. مع وفّي، تضمن حماية موثوقة لأموال الأطراف في المعاملات التي تديرها</p>
//     </div>
//     <div className="row">

//         <div className="col-med-4">


//         </div>
//     </div>
//    </div>
<section class="why-wafi">
  <div class="container-fluid">
    <h2 class="section-title">لماذا وفّي؟</h2>
    <p class="section-description">
      استخدم وفّي، وأمن على أموال عملائك بثقة. مع وفّي، نضمن حماية موثوقة لأموال الأطراف في المعاملات التي تديرها
    </p>

    <div class="features">
      <div class="feature-box">
        <div className="row">
        <div className="col-md-3">
        <img src="\src\assets\a.svg" alt="وفّي يوفر الوقت" class="feature-icon"/>
        </div>
        </div>
        <div className="row"> 
       
        <p class="feature-text">وفّي يوفر الوقت والجهد في عملك</p>
      
        </div>
      </div>

      <div class="feature-box">
        <div className="row">
        <div className="col-md-3">
        <img src="\src\assets\money-1.svg" alt="حماية وضمان" class="feature-icon"/>
        </div>
        </div>
        <div className="row">
        <p class="feature-text">وفّي يقدم حماية وضمانًا لأموال عملائك</p>
        </div>
      </div>

      <div class="feature-box text-end">
        <div className="row">
            <div className="">
        <img src="\src\assets\Group-7887705-1.svg" alt="تسوية الأموال" class="feature-icon d-flex flex-start" />
        </div>
        </div>
        <div className="row">
        <p class="feature-text">وفّي يُسهّل عملك كوسيط في التسوية وإدارة أموال عملائك بكل يسر وأمان</p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Section2;

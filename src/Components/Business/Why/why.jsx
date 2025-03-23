import React from 'react';
import './why.css'

//-------------------------

function Why() {
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
    <h2 class="section-title mb-4">لماذا وفّي؟</h2>
    <p class="section-description mb-5">
      استخدم وفّي، وأمن على أموال عملائك بثقة. مع وفّي، نضمن حماية موثوقة لأموال الأطراف في المعاملات التي تديرها
    </p>
   
  <div className="row mb-5">
    {/* العنصر الأول */}
    <div className="col-md-4 d-flex justify-content-end">
      <div className="feature-box text-end p-4 " >
        <img src="/src/assets/img/a.svg" alt="وفّي يوفر الوقت" className="feature-icon mb-3" style={{ width: "50px", height: "50px" }} />
        <p className="feature-text m-0">وفّي يوفر الوقت والجهد في عملك</p>
      </div>
    </div>

    {/* العنصر الثاني */}
    <div className="col-md-4 d-flex justify-content-end">
      <div className="feature-box text-end p-4 "  >
        <img src="\src\assets\img\money-1.svg" alt="وفّي يوفر الوقت" className="feature-icon mb-3" style={{ width: "50px", height: "50px" }} />
        <p className="feature-text m-0">وفّي يقدم حماية وضمانًا لأموال عملائك.</p>
      </div>
    </div>

    {/* العنصر الثالث */}
    <div className="col-md-4 d-flex justify-content-end">
      <div className="feature-box text-end p-4 ">
        <img src="\src\assets\img\Group-7887705-1.svg" alt="وفّي يوفر الوقت" className="feature-icon mb-3" style={{ width: "50px", height: "50px" }} />
        <p className="feature-text m-0">وفّي يُسهّل عملك كوسيط في التسوية وإدارة أموال عملائك بكل يسر وأمان.</p>
      </div>
    </div>
  </div>
</div>


</section>

  );
}

export default Why;

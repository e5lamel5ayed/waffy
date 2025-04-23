import React from 'react';
import Lottie from "lottie-react";
import './how.css'
import playAnimation from '../../animation/Animation - 1742723749640.json'
//-------------------------

function How() {
  return (
    <div className="how container-fluid px-4 py-5">

      <div className="row">
        <div className="col-md-6 d-flex  justify-content-center mt-5 align-items-center">
          <Lottie animationData={playAnimation} style={{ position: 'absolute', cursor: 'pointer', width: '115px', color: '#1448B8' }} class="animation" />
          <img src="/assets/img/Imgur-magic.webp" class="palyVedio" style={{ maxWidth: "100%" }} />

        </div>

        <div className="col-md-6">
          <div className="row ">
            <div className="col-md-12 mt-5">
              <h1 class="text-end">كيف تستخدم وفي لإتمام معاملاتك</h1>
            </div>
          </div>
          < div className="row mt-4 py-2">
            <div className="num col-md-12 text-end d-flex justify-content-end">

              <div class="mt-3 px-3 ">
                <h4 class="mb-3" >الاتفاق:
                  <img draggable="false" role="img" class="emoji" alt="🤝" style={{ maxWidth: "30px" }} src="https://s.w.org/images/core/emoji/15.1.0/svg/1f91d.svg" />
                  تسجيل الوسيط الضامن للاتفاق</h4>
                <p class="mb-2 fs-5">بعد اتفاق الأطراف ووصولهم لحل مرضي للجميع يتم تسجيل الاتفاق لدى وفّي.</p>
              </div>
              <img style={{ maxWidth: '50px' }} src="/assets/img/1.webp" class="img-fluid feature-img" height="100px" />

            </div>
          </div>
          < div className="row  py-2">
            <div className="col-md-12 text-end d-flex justify-content-end">

              <div class="mt-3 px-3 ">
                <h4 class="mb-3" >الدفع:
                  <img draggable="false" style={{ maxWidth: "30px" }} role="img" class="emoji" alt="💳" src="https://s.w.org/images/core/emoji/15.1.0/svg/1f4b3.svg" />
                  المودع يقوم بدفع المبلغ </h4>
                <p class="mb-2 fs-5">يقوم الطرف المُطالب بإيداع الأموال بسدادها عبر وفّي.</p>
              </div>
              <img src="/assets/img/2.webp" class="img-fluid feature-img" />
              <div></div>

            </div>
          </div>
          < div className="row py-2">
            <div className="col-md-12 text-end d-flex  justify-content-end">

              <div class="mt-3 px-3 ">
                <h4 class="mb-3" >الإشعار:
                  <img draggable="false" style={{ maxWidth: "30px" }} role="img" class="emoji" alt="📩" src="https://s.w.org/images/core/emoji/15.1.0/svg/1f4e9.svg" />
                  وفّي يُبلغ الوسيط بإستلام الأموال
                </h4>
                <p class="mb-2 fs-5">نقوم بإبلاغ الوسيط بأستلام المبلغ المتفق عليه</p>
              </div>
              <img src="/assets/img/3.webp" class="img-fluid feature-img" />

            </div>
          </div>
          < div className="row py-2">
            <div className="col-md-12 text-end d-flex justify-content-end ">

              <div class="mt-3 px-3 ">
                <h4 class="mb-3" >التقديم:
                  <img draggable="false" style={{ maxWidth: "30px" }} role="img" class="emoji" alt="📝" src="https://s.w.org/images/core/emoji/15.1.0/svg/1f4dd.svg" />
                  المودع له يُقدم الوثائق</h4>
                <p class="mb-2 fs-5">يقوم المُطالب بإتمام الإجراءات المتفق عليها</p>
              </div>
              <img src="/assets/img/4.webp" class="img-fluid feature-img" />

            </div>
          </div>
          < div className="row py-1">
            <div className="col-md-12 text-end d-flex justify-content-end  align-items-center">

              <div class="mt-3 px-3 ">
                <h4 class="mb-2" >التحويل:
                  <img draggable="false" role="img" style={{ maxWidth: "30px" }} class="emoji" alt="💸" src="https://s.w.org/images/core/emoji/15.1.0/svg/1f4b8.svg"/>                  الوسيط يوافق على تحويل الأموال</h4>
                <p class="mb-2 fs-5">عند إكتمال الإجراءات يقوم الوسيط بالسماح بتحويل الأموال لمستحقها</p>
              </div>
              <img src="/assets/img/5.webp" class=" feature-img2" />

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default How;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "../Form-Employment/Form";

function FormEmployment() {
  return (
    <div className="FormEmployment">
      <div className="container">
        <div className="row text-center">
          <h1 className="fw-bold mb-2">انضم إلينا</h1>
          <p className="text-dark mb-5">
            نحن في وفّي، نؤمن بقدرتك على تحقيق المزيد. انضم إلينا وساهم في تشكيل
            مستقبل التكنولوجيا المالية. يرجى تعبئة البيانات التالية ورفع سيرتك
            الذاتية للتواصل معك :
          </p>
        </div>

      <Form/>
      </div>
    </div>
  );
}

export default FormEmployment;

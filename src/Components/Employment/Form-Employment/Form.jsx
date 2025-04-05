import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Form.css'


function Form() {
  return (
    <form className=" form  mt-3 p-2 text-muted fw-bold fs-5">
    <div className="   mt-3 p-4" dir="rtl">
      <div className="d-flex gap-1 col-md-12 col-12 mt-2">
        <div className="col-md-6 mt-2">
          <label className="form-label">
            الاسم الأول <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" className="form-control" id="r" required />
        </div>
        <div className="col-md-6 mt-2">
          <label className="form-label">
            {" "}
            الاسم الأخير<span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" className="form-control" id="" required />
        </div>
      </div>

      <div className="col-md-12 mt-2">
        <label className="form-label">
          {" "}
          البريد الإلكتروني<span style={{ color: "red" }}>*</span>
        </label>
        <input type="email" className="form-control" id="" required />
      </div>
      <div className="col-md-12 mt-2">
        <label className="form-label">
          {" "}
          رقم الهاتف<span style={{ color: "red" }}>*</span>
        </label>
        <input type="number" className="form-control" id="" required />
      </div>
      <div className="col-md-12 mt-2">
        <label className="form-label">
          {" "}
          الوظيفة/ المنصب <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" className="form-control" id="" required />
      </div>
      <div className="col-md-12 mt-2">
        <label className="form-label">
          {" "}
          القسم <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" className="form-control" id="" required />
      </div>
      <div className="col-md-12 mt-2">
        <label className="form-label">
          {" "}
          سنوات الخبرة <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" className="form-control" id="" required />
      </div>
      <div className="col-md-12 mt-2">
        <label className="form-label">
          رابط حساب LinkedIn <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" className="form-control" id="" required />
      </div>
      <div className="col-md-12 mt-2">
        <label className="form-label">
          الجنسية<span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" className="form-control" id="" required />
      </div>

      <div className="d-flex gap-1 col-md-12 col-12 mt-2">
        <div className="col-md-6 mt-2">
          <label className="form-label">
            المدينة <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" className="form-control" id="r" required />
        </div>
        <div className="col-md-6 mt-2">
          <label className="form-label">
            الدولة <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" className="form-control" id="" required />
        </div>
      </div>

      <div className="col-md-12 mt-2">
        <label className="form-label">التعليم (اختياري)</label>
        <input type="text" className="form-control" id="" required />
      </div>
      <div className="col-md-12 mt-2">
        <label className="form-label">الخبرة العملية (اختياري)</label>
        <input type="text" className="form-control" id="" required />
      </div>

      <div className="col-md-12 mt-2">
        <label className="form-label">
          فترة الإشعار <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" className="form-control" id="" required />
      </div>
      <div className="col-md-12 mt-2">
        <label className="form-label">
          الراتب الحالي (الريال السعودي)
          <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" className="form-control" id="" required />
      </div>
      <div className="col-md-12 mt-2">
        <label className="form-label">
          الراتب المتوقع (الريال السعودي)
          <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" className="form-control" id="" required />
      </div>

      <div className="col-md-5 mt-5 gap-5 d-flex">
        <label className="form-label ">
          السيرة الذاتية<span style={{ color: "red" }}>*</span>
        </label>
        <button type="file" className="form-control fw-bold p-3" id="" required  style={{ backgroundColor:"#6f757e",color:"white", maxWidth:"120px",maxHeight:"100px"}} > رفع الملف</button>
      </div>

      <div className="col-md-5 gap-4 mt-4 d-flex">
        <label className="form-label ">(اختياري) cover <br/>letter </label>
        <button type="file" className="form-control fw-bold p-3 " id="" required  style={{ backgroundColor:"#6f757e",color:"white", maxWidth:"120px",maxHeight:"100px"}}>رفع الملف</button>
      </div>

      {/* <div className="row mt-2 "> */}
        <button className="btn btn-primary w-100 col-md-12" style={{width:"100%"}}> إرسال</button>
      {/* </div> */}

    </div>
  </form>
    
  );
}

export default Form;

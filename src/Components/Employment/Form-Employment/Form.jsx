import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Form.css'


function Form() {
  return (
    <form className=" form  my-5 p-2 text-muted fw-bold fs-5">
      <div className="   mt-3 p-4" dir="rtl">
        <div className="d-flex gap-1 col-md-12 col-12 mt-2">
          <div className="col-md-6 mt-2">
            <label className="form-label label-color">
              الاسم الأول <span className="star-requerd">*</span>
            </label>
            <input type="text" className="form-control" id="r" required />
          </div>
          <div className="col-md-6 mt-2">
            <label className="form-label label-color">
              {" "}
              الاسم الأخير<span className="star-requerd">*</span>
            </label>
            <input type="text" className="form-control" id="" required />
          </div>
        </div>

        <div className="col-md-12 mt-2">
          <label className="form-label label-color">
            {" "}
            البريد الإلكتروني<span className="star-requerd">*</span>
          </label>
          <input type="email" className="form-control" id="" required />
        </div>
        <div className="col-md-12 mt-2">
          <label className="form-label label-color">
            {" "}
            رقم الهاتف<span className="star-requerd">*</span>
          </label>
          <input type="number" className="form-control" id="" required />
        </div>
        <div className="col-md-12 mt-2">
          <label className="form-label label-color">
            {" "}
            الوظيفة/ المنصب <span className="star-requerd">*</span>
          </label>
          <input type="text" className="form-control" id="" required />
        </div>
        <div className="col-md-12 mt-2">
          <label className="form-label label-color">
            {" "}
            القسم <span className="star-requerd">*</span>
          </label>
          <input type="text" className="form-control" id="" required />
        </div>
        <div className="col-md-12 mt-2">
          <label className="form-label label-color">
            {" "}
            سنوات الخبرة <span className="star-requerd">*</span>
          </label>
          <input type="text" className="form-control" id="" required />
        </div>
        <div className="col-md-12 mt-2">
          <label className="form-label label-color">
            رابط حساب LinkedIn <span className="star-requerd">*</span>
          </label>
          <input type="text" className="form-control" id="" required />
        </div>
        <div className="col-md-12 mt-2">
          <label className="form-label label-color">
            الجنسية<span className="star-requerd">*</span>
          </label>
          <input type="text" className="form-control" id="" required />
        </div>

        <div className="d-flex gap-1 col-md-12 col-12 mt-2">
          <div className="col-md-6 mt-2">
            <label className="form-label label-color">
              المدينة <span className="star-requerd">*</span>
            </label>
            <input type="text" className="form-control" id="r" required />
          </div>
          <div className="col-md-6 mt-2">
            <label className="form-label label-color">
              الدولة <span className="star-requerd">*</span>
            </label>
            <input type="text" className="form-control" id="" required />
          </div>
        </div>

        <div className="col-md-12 mt-2">
          <label className="form-label label-color">التعليم (اختياري)</label>
          <input type="text" className="form-control" id="" required />
        </div>
        <div className="col-md-12 mt-2">
          <label className="form-label label-color">الخبرة العملية (اختياري)</label>
          <input type="text" className="form-control" id="" required />
        </div>

        <div className="col-md-12 mt-2">
          <label className="form-label label-color">
            فترة الإشعار <span className="star-requerd">*</span>
          </label>
          <input type="text" className="form-control" id="" required />
        </div>
        <div className="col-md-12 mt-2">
          <label className="form-label label-color">
            الراتب الحالي (الريال السعودي)
            <span className="star-requerd">*</span>
          </label>
          <input type="text" className="form-control" id="" required />
        </div>
        <div className="col-md-12 mt-2">
          <label className="form-label label-color">
            الراتب المتوقع (الريال السعودي)
            <span className="star-requerd">*</span>
          </label>
          <input type="text" className="form-control" id="" required />
        </div>

        <div className="col-md-5 mt-5 gap-5 d-flex">
          <label className="form-label label-color ">
            السيرة الذاتية<span className="star-requerd">*</span>
          </label>
          <button type="file" className="form-control fw-bold p-3" id="" required style={{ backgroundColor: "#6f757e", color: "white", maxWidth: "120px", maxHeight: "100px", borderRadius: '1px' }} > رفع الملف</button>
        </div>

        <div className="col-md-5 gap-4 mt-4 d-flex">
          <label className="form-label label-color ">(اختياري) cover <br />letter </label>
          <button type="file" className="form-control fw-bold p-3 " id="" required style={{ backgroundColor: "#6f757e", color: "white", maxWidth: "120px", maxHeight: "100px", borderRadius: '1px' }}>رفع الملف</button>
        </div>

        <div className="row mt-2 ">
          <button
            style={{
              backgroundColor: " #1a7efb",
              color: " #fff",
              border: "none",
              borderRadius: "10px",
              width: " 90%",
              margin: "25px auto",
            }}
          > إرسال</button>
        </div>

      </div>
    </form>

  );
}

export default Form;

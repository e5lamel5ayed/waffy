import React from "react";
import "./Sectionthree.css";
import { Button } from "@mui/material";
import sellingImage from "../../assets/progres.png";

const Sectionthree = () => {
  return (
    <div className="selling-section">
      <div className="image-container">
        <img src={sellingImage} alt="Selling Illustration" />
      </div>
      <div className="content">
        <h2>
          <span className="highlight">ابدأ أول عملية بيع</span> في أقل من 60 ثانية
        </h2>
        <p>معاملاتك محمية تمامًا، زد مبيعاتك، واكسب ثقة عملائك</p>
        <div className="form-container expanded"> {/* أضفت كلاس جديد لتوسيع العرض */}
          <label htmlFor="ff_3_input_text_1" className="input-label">أنا أبيع</label>
          <input
            type="text"
            name="input_text_1"
            className="ff-el-form-control input-field"
            placeholder="تلفاز سمارت نوع سامسونج ٦٤ بوصة"
            data-name="input_text_1"
            id="ff_3_input_text_1"
            aria-invalid="false"
            aria-required="true"
          />
          <label htmlFor="ff_3_input_text_2" className="input-label">السعر</label>
          <input
            type="text"
            name="input_text_2"
            className="ff-el-form-control input-field"
            placeholder="450"
            data-name="input_text_2"
            id="ff_3_input_text_2"
            aria-invalid="false"
            aria-required="true"
          />
          <Button variant="contained" className="submit-btn">
            أنشئ معاملة
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sectionthree;

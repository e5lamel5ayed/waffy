import React, { useState } from "react";
import "./Form.css";
//==================================
function Form() {
  const [selectedJob, setSelectedJob] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);

  const jobOptions = [
    "Product Marketing Manager – Pipeline",
    "Business Development Manager",
    "Senior Business Developer",
    "Operations Specialist – Pipeline",
    "Senior Backend Engineer",
    "Senior QC Automation Test Engineer",
    "Lead Software Engineer",
    "Frontend Engineer (React JS)"
  ];

  const departmentOptions = [
    "الإدارة",
    "التصميم",
    "البرمجة",
    "التسويق",
    "التحليل",
    "المبيعات",
    "المحتوى",
    "الشبكات",
    "الموارد البشرية"
  ];

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleCoverLetterChange = (e) => {
    setCoverLetter(e.target.files[0]);
  };

  return (
    <>
    <div className="form-container">
      <form className="custom-form">
      
        <div className="name-fields">
          <div className="input-group">
            <label>الاسم الأول</label>
            <input type="text" placeholder="أدخل اسمك الأول" />
          </div>
          <div className="input-group">
            <label>الاسم الأخير</label>
            <input type="text" placeholder="أدخل اسمك الأخير" />
          </div>
        </div>


        <div className="input-group">
          <label>الوظيفة / المنصب</label>
          <select
            value={selectedJob}
            onChange={(e) => setSelectedJob(e.target.value)}
          >
            <option value="">يرجى الاختيار</option>
            {jobOptions.map((job, index) => (
              <option key={index} value={job}>
                {job}
              </option>
            ))}
          </select>
        </div>

   
        <div className="input-group">
          <label>القسم</label>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">يرجى الاختيار</option>
            {departmentOptions.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

      
        <div className="input-group">
          <label>سنوات الخبرة</label>
          <input type="number" placeholder="أدخل سنوات الخبرة" />
        </div>

       
        <div className="input-group">
          <label>رابط حساب LinkedIn</label>
          <input type="url" placeholder="https://www.linkedin.com/in/Username" />
        </div>

      
        <div className="input-group">
          <label>الجنسية</label>
          <input type="text" placeholder="أدخل جنسيتك" />
        </div>

      
        <div className="input-group">
          <label>المدينة</label>
          <input type="text" placeholder="أدخل مدينتك" />
        </div>

     
        <div className="input-group">
          <label>الدولة</label>
          <input type="text" placeholder="أدخل دولتك" />
        </div>

        
        <div className="input-group">
          <label>التعليم (اختياري)</label>
          <input type="text" placeholder="أدخل مستواك التعليمي" />
        </div>

       
        <div className="input-group">
          <label>الخبرة العملية (اختياري)</label>
          <input type="text" placeholder="أدخل الخبرات العملية السابقة" />
        </div>

       
        <div className="input-group">
          <label>فترة الإشعار</label>
          <input type="text" placeholder="أدخل فترة الإشعار" />
        </div>

        
        <div className="input-group">
          <label>الراتب الحالي (الريال السعودي)</label>
          <input type="number" placeholder="أدخل راتبك الحالي" />
        </div>

      
        <div className="input-group">
          <label>الراتب المتوقع (الريال السعودي)</label>
          <input type="number" placeholder="أدخل راتبك المتوقع" />
        </div>

       
        <div className="input-group">
          <label>السيرة الذاتية</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
          />
          <span>{resume ? resume.name : "No file chosen"}</span>
        </div>

        {/* cover letter */}
        <div className="input-group">
          <label>Cover Letter (اختياري)</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleCoverLetterChange}
          />
          <span>{coverLetter ? coverLetter.name : "No file chosen"}</span>
        </div>

        <button type="submit" className="submit-btn">إرسال</button>
      </form>
    
    </div>



</>
  );
}

export default Form;

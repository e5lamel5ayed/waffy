import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Briefcase } from 'lucide-react';
import '../JobCards/JobCards.css';
import Form from "../Form/Form";
import image from "/assets/Waffy-logo.png"
import Footer from "../Footer/Footer";
//-------------------------------------------
// data  
const jobData = [
  { title: "Business Development Manager", department: "الإدارة", experience: "مدير" },
  { title: "Senior Business Developer", department: "التصميم", experience: "مبتدئ" },
  { title: "Operations Specialist – Pipeline", department: "البرمجة", experience: "متوسط", imageSrc: { image } },
  { title: "Product Marketing Manager – Pipeline", department: "التسويق", experience: "مبتدئ",},
  { title: "Product Marketing Manager – Pipeline", department: "التحليل", experience: "متقدم", },
  { title: "Senior Backend Engineer", department: "المبيعات", experience: "مدير",  },
  { title: "Senior QC Automation Test Engineer", department: "المحتوى", experience: "مبتدئ",  },
  { title: "Frontend Engineer (React JS)", department: "الشبكات", experience: "متوسط", },
  { title: "Lead Software Engineer", department: "الموارد البشرية", experience: "مدير",  }
];
//----------------------------------------------------------------------------------------------------------
function JobCard({ id, title, department, experience,  }) {
  return (
    
    <div className="job-card">
      <div className="left-section">
        <div className="department-info">
          <Building2 className="icon" />
          <span className="department-text">{department}</span>
        </div>

        <div className="job-details">
          <div className="meta-info">
            <div className="meta-item">
              <Briefcase className="meta-icon" />
              <span className="meta-text">الخبرة</span>
              <span className="meta-text">{experience}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="title-section">
          <div className="title-badge">
            <h3 className="job-title">{title}</h3>
          </div>
          <img src={image} alt={title} className="job-image" />
          <Link to={`/job/${id}`} className="details-button">
            <ArrowLeft className="arrow-icon" />
            <span>التفاصيل</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function JobCards() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h3 className="title">الوظائف المتاحة</h3>
        <div className="job-list">
          {jobData.map((job, index) => (
            <JobCard
              key={index}
              id={index}
              title={job.title}
              department={job.department}
              experience={job.experience}
            />
          ))}
        </div>
        <Form />
      </div>
      <Footer/>
    </div>
  );
}

export default JobCards;

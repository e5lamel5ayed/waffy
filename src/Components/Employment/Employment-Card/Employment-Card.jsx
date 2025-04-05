import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";



const jobs = [
  {
    title: "Business Development Manager",
    experience: "Entry-level",
  },
  {
    title: "Senior Business Developer",
    experience: "Entry-level",
  },
  {
    title: "Operations Manager – Pipeline",
    experience: "Manager",
    department:"Operations",
  },
  {
    title: "Operations Specialist – Pipeline",
    experience: "Mid-level",
    department:"Operations",
  },
  {
    title: "Product Marketing Manager – Pipeline",
    experience: "Manager",
    department:"Marketing",
  },
  {
    title: "Social Media Specialist – Pipeline",
    experience: "Senior",
    department:"Marketing",
  },
  {
    title: "Senior Backend Engineer",
    experience: "Senior",
    department:"Tech",
  },
  {
    title: "Senior QC Automation Test Engineer",
    experience: "Senior",
    department:"Tech",
  },
  {
    title: "Frontend Engineer (React JS)",
    experience: "Senior",
    department:"Tech",
  },
  {
    title: "Lead Software Engineer",
    experience: "Lead",
    department:"Tech",
  },
];

function EmploymentCard() {
  return (
    <div className="EmploymentCard">
      <div className="container mt-5 mb-5">
        <h2 className="text-center fw-bold mb-5">الوظائف المتاحة</h2>
        <div className="row justify-content-center">
          {jobs.map((job, index) => (
            <div key={index} className="col-md-12 col-lg-12 mb-5">
              <div className="card  border-1 p-4">
                <div className="row align-items-center">
                  <div className="col-md-6 d-flex justify-content-center ">
                    <div className="col-md-6 d-flex align-items-center gap-5">
                      <div className="text-secondary text-center">
                      <FaBuilding size={18} className="me-2" />
                        <p className="mb-0">القسم</p>
                        <p className=" text-black">{job.department}</p>
                      </div>
                      <div className=" col-md-6 text-secondary text-center">
                      <FaBriefcase size={18} className="me-2" />

                        <p className="mb-0">الخبرة</p>
                        <p className=" text-black">{job.experience}</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-3 col-md-6 text-end">
                    <div>
                    <h4 className="fw-bold">{job.title}</h4>
                    <div className="d-flex text-end align-items-center gap-1 
                     fw-medium mt-1">
                          <FaArrowLeft />
    <span>التفاصيل</span>
  
              </div>
            </div>
                    <a href="#" className="d-inline-block mt-2">
                      <img
                        src="/assets/img/Waffy-logo.webp" // تأكد أن المسار صحيح
                        alt="وفي"
                        width="80"
                        height="80"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmploymentCard;

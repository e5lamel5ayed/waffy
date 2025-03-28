import React from 'react';
import './JobCards.css';
//---------------------------------
const JobCards = () => {
  const jobs = Array(10).fill({
    title: "Business Development Manager",
    department: "الوظائف الناحية",
    category: "القسم: التربة",
    level: "Entry-level",
    action: "التفاصيل +"
  });

  return (
    <div className="jobs-container">
      <h2 className="section-title">وفق</h2>
      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <div className="job-header">
              <span className="job-department">{job.department}</span>
            </div>
            <div className="job-content">
              <h3 className="job-title">{job.title}</h3>
              <div className="job-details">
                <span className="job-category">{job.category}</span>
                <span className="job-level">{job.level}</span>
              </div>
            </div>
            <div className="job-footer">
              <button className="details-btn">{job.action}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCards;
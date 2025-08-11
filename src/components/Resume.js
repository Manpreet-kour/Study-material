import React from 'react';
import './Resume.css';

const Resume = () => {
  const handleView = () => {
    window.open('/Manpreet_Kour_Resume.pdf', '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Manpreet_Kour_Resume.pdf';
    link.download = 'Manpreet_Kour_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-card">
          <div className="resume-content">
            <div className="resume-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H9H8" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="resume-title">Manpreet Kour - Resume</h3>
            <p className="resume-description">
              View or download my professional resume to learn more about my skills, 
              experience, and qualifications in Information Technology and Web Development.
            </p>
            <div className="resume-actions">
              <button className="btn btn-view" onClick={handleView}>
                View Resume
              </button>
              <button className="btn btn-download" onClick={handleDownload}>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

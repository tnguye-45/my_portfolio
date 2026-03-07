import { site, resume } from '../data/portfolio';
import './Resume.css';

function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <p className="section-intro">Experience and education.</p>
        <div className="resume-download">
          <a href={site.resumePdfUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Download PDF
          </a>
        </div>
        <div className="resume-content">
          <div className="resume-block">
            <h3 className="resume-block-title">Experience</h3>
            {resume.experience.map((job, i) => (
              <div key={i} className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-role">{job.role}</span>
                  <span className="resume-period">{job.period}</span>
                </div>
                <div className="resume-company">{job.company}</div>
                <ul className="resume-points">
                  {job.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="resume-block">
            <h3 className="resume-block-title">Education</h3>
            {resume.education.map((edu, i) => (
              <div key={i} className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-role">{edu.degree}</span>
                  <span className="resume-period">{edu.year}</span>
                </div>
                <div className="resume-company">{edu.school}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

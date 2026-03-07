import { about } from '../data/portfolio';
import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <h3 className="about-headline">{about.headline}</h3>
        <p className="about-bio">{about.bio}</p>
        <div className="about-skills">
          {about.skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

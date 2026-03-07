import { site } from '../data/portfolio';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-intro">Get in touch—email or socials.</p>
        <div className="contact-links">
          <a href={`mailto:${site.email}`} className="contact-link">
            {site.email}
          </a>
          {site.github && (
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
          )}
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;

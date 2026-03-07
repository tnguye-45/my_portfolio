import { site } from '../data/portfolio';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{site.name}</h1>
        <p className="hero-tagline">{site.tagline}</p>
        <p className="hero-desc">
          Coding projects, video & photo work, and my resume—all in one place.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#resume" className="btn btn-secondary">Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import { codingProjects } from '../data/portfolio';
import './CodingProjects.css';

function CodingProjects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Coding Projects</h2>
        <p className="section-intro">Things I've built with JavaScript, React, Node.js, and more.</p>
        <div className="projects-grid">
          {codingProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x340/1e1e24/7c3aed?text=Project';
                  }}
                />
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CodingProjects;

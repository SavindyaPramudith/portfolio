import { useState } from 'react';
import { projects } from '../data/portfolio';
import { Github, ExternalLink, Folder, Calendar, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Things I've built</p>

        {projects.length === 0 ? (
          <div className="projects-placeholder">
            <Folder size={64} />
            <h3>Projects Coming Soon</h3>
            <p>I'm currently working on exciting projects. Check back soon!</p>
          </div>
        ) : (
          <div ref={ref} className={`projects-grid ${isVisible ? 'animate-in' : ''}`}>
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card ${hoveredId === project.id ? 'hovered' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="project-card-inner">
                  <div className="project-header">
                    <div className="project-icon-wrapper">
                      <Folder className="project-icon" size={32} />
                    </div>
                    <div className="project-links">
                      {project.year && (
                        <span className="project-year">
                          <Calendar size={14} />
                          {project.year}
                        </span>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="project-link"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          className="project-link"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="project-title">
                    {project.title}
                    <ArrowUpRight size={18} className="title-arrow" />
                  </h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={tech} 
                        className="tech-tag"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

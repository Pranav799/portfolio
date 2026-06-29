import { ExternalLink, Code } from 'lucide-react';
import { Github } from './icons';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  visualClass: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Enterprise Dashboard Hub',
      category: 'Full-Stack Development',
      description: 'A high-performance administration dashboard engineered for tracking system vitals, manage user records, and monitor database operations in real-time.',
      tags: ['Angular', 'RxJS', 'Java', 'Spring Boot', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com',
      visualClass: 'gradient-blue-purple'
    },
    {
      id: 2,
      title: 'Microservice Async Hub',
      category: 'Backend Architecture',
      description: 'A high-throughput message-routing system handling asynchronous communication between distributed microservices using robust caching systems.',
      tags: ['Java', 'Spring Boot', 'RabbitMQ', 'Redis', 'Docker'],
      github: 'https://github.com',
      visualClass: 'gradient-charcoal-gold'
    },
    {
      id: 3,
      title: 'Editorial Web Portfolio',
      category: 'Frontend Engineering',
      description: 'A high-end, responsive, and interactive digital portfolio featuring clean typography, light/dark mode transitions, and smooth CSS animations.',
      tags: ['React', 'TypeScript', 'Vite', 'Vanilla CSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
      visualClass: 'gradient-light-gray'
    },
    {
      id: 4,
      title: 'Timezone Booking Engine',
      category: 'API Engineering',
      description: 'A secure, conflict-free meeting scheduling API capable of processing complex queries across multiple timezones dynamically.',
      tags: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'JUnit'],
      github: 'https://github.com',
      visualClass: 'gradient-sand-bronze'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">Selected Work</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Card visual header (Beautiful abstract gradient/code graphic) */}
              <div className={`project-visual ${project.visualClass}`}>
                <div className="visual-graphic-overlay">
                  <Code size={40} className="visual-icon" />
                  <span className="visual-tech-snippet">{project.tags[0]} // {project.tags[1]}</span>
                </div>
              </div>

              {/* Card details */}
              <div className="project-details">
                <div className="project-category-row">
                  <span className="project-category">{project.category}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <Github size={16} />
                    <span>Repository</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn primary"
                      aria-label={`Open live demonstration for ${project.title}`}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

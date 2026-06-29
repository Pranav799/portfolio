import { useState } from 'react';
import './Skills.css';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  level: string; // e.g. "Advanced", "Intermediate"
}

export default function Skills() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'frontend', level: 'Advanced' },
    { name: 'Angular', category: 'frontend', level: 'Intermediate' },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 'Advanced' },
    { name: 'TypeScript', category: 'frontend', level: 'Intermediate' },
    { name: 'HTML5 & CSS3', category: 'frontend', level: 'Advanced' },
    { name: 'Vanilla CSS', category: 'frontend', level: 'Advanced' },
    { name: 'Responsive Web Design', category: 'frontend', level: 'Advanced' },
    
    // Backend
    { name: 'Java', category: 'backend', level: 'Advanced' },
    { name: 'Spring Boot', category: 'backend', level: 'Advanced' },
    { name: 'RESTful APIs', category: 'backend', level: 'Advanced' },
    { name: 'Hibernate & JPA', category: 'backend', level: 'Intermediate' },
    { name: 'Microservices', category: 'backend', level: 'Intermediate' },
    { name: 'SQL & Database Design', category: 'backend', level: 'Advanced' },
    
    // Tools & Databases
    { name: 'PostgreSQL', category: 'tools', level: 'Intermediate' },
    { name: 'MySQL', category: 'tools', level: 'Advanced' },
    { name: 'Git & GitHub', category: 'tools', level: 'Advanced' },
    { name: 'Maven', category: 'tools', level: 'Intermediate' },
    { name: 'Docker', category: 'tools', level: 'Intermediate' },
    { name: 'REST Client / Postman', category: 'tools', level: 'Advanced' },
    { name: 'Linux / Command Line', category: 'tools', level: 'Intermediate' }
  ];

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">My Tech Stack</h2>
        </div>

        {/* Filter Navigation */}
        <div className="skills-filter-nav">
          {(['all', 'frontend', 'backend', 'tools'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat === 'tools' ? 'Tools & Databases' : cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-display-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-chip-wrapper animate-fade-in">
              <div className="skill-chip">
                <span className="skill-dot">✦</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

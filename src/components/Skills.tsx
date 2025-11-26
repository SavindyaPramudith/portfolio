import { skills } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code, Database, Wrench, FileCode } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const categories = [
    { key: 'languages', label: 'Languages', icon: <FileCode size={24} />, color: '#6366f1' },
    { key: 'frontend', label: 'Frontend', icon: <Code size={24} />, color: '#8b5cf6' },
    { key: 'backend', label: 'Backend', icon: <Database size={24} />, color: '#a855f7' },
    { key: 'tools', label: 'Tools & Others', icon: <Wrench size={24} />, color: '#d946ef' },
  ] as const;

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div ref={ref} className={`skills-grid ${isVisible ? 'animate-in' : ''}`}>
          {categories.map((category, catIndex) => (
            <div 
              key={category.key} 
              className="skill-category"
              style={{ animationDelay: `${catIndex * 0.15}s` }}
            >
              <div className="category-header">
                <div className="category-icon" style={{ background: `linear-gradient(135deg, ${category.color}, ${category.color}88)` }}>
                  {category.icon}
                </div>
                <h3>{category.label}</h3>
              </div>
              <div className="skill-list">
                {skills
                  .filter((skill) => skill.category === category.key)
                  .map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="skill-item"
                      style={{ animationDelay: `${(catIndex * 0.15) + (index * 0.05)}s` }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className={`skill-progress ${isVisible ? 'animate' : ''}`}
                          style={{ 
                            '--progress-width': `${skill.level}%`,
                            animationDelay: `${(catIndex * 0.15) + (index * 0.1) + 0.3}s`
                          } as React.CSSProperties}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

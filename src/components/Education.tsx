import { education } from '../data/portfolio';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Education.css';

const Education = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getIcon = (degree: string) => {
    if (degree.toLowerCase().includes('bsc') || degree.toLowerCase().includes('bachelor')) {
      return <GraduationCap size={20} />;
    } else if (degree.toLowerCase().includes('diploma')) {
      return <Award size={20} />;
    }
    return <BookOpen size={20} />;
  };

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic journey</p>

        <div ref={ref} className={`timeline ${isVisible ? 'animate-in' : ''}`}>
          {education.map((item, index) => (
            <div 
              key={item.id} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="timeline-marker">
                {getIcon(item.degree)}
                <div className="marker-pulse"></div>
              </div>
              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-title">{item.degree}</h3>
                <h4 className="timeline-institution">{item.institution}</h4>
                {item.description && (
                  <p className="timeline-description">{item.description}</p>
                )}
              </div>
              {index < education.length - 1 && <div className="timeline-line"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

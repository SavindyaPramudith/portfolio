import { personalInfo, certificates } from '../data/portfolio';
import { Code, GraduationCap, Target, Rocket, Award, MapPin, Mail, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const highlights = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Student',
      description: 'BSc Software Engineering',
    },
    {
      icon: <Code size={24} />,
      title: 'Developer',
      description: 'Full-Stack Enthusiast',
    },
    {
      icon: <Target size={24} />,
      title: 'Focus',
      description: 'Frontend Development',
    },
    {
      icon: <Rocket size={24} />,
      title: 'Passion',
      description: 'Building Solutions',
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>

        <div ref={ref} className={`about-content ${isVisible ? 'animate-in' : ''}`}>
          <div className="about-image-section">
            <div className="about-image">
              <img src={personalInfo.profileImage} alt={personalInfo.name} />
              <div className="about-image-decoration"></div>
              <div className="about-image-decoration dec-2"></div>
            </div>
            
            <div className="certificates-card">
              <h4><Award size={20} /> Certifications</h4>
              <ul>
                {certificates.map((cert) => (
                  <li key={cert.id}>
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-info">{cert.issuer} • {cert.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-text">
            <h3>Who am I?</h3>
            <p>{personalInfo.bio}</p>

            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="highlight-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="highlight-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="about-info">
              <div className="info-item">
                <MapPin size={18} />
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">{personalInfo.location}</span>
                </div>
              </div>
              <div className="info-item">
                <Mail size={18} />
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-value">{personalInfo.email}</span>
                </div>
              </div>
              <div className="info-item">
                <Phone size={18} />
                <div>
                  <span className="info-label">Phone</span>
                  <span className="info-value">{personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

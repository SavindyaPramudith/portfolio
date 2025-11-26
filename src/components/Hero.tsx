import { useEffect, useState } from 'react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import './Hero.css';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={24} />,
  linkedin: <Linkedin size={24} />,
  mail: <Mail size={24} />,
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const titles = ['Software Engineering Undergraduate', 'Full-Stack Developer', 'React Enthusiast', 'Problem Solver'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayTitle, setDisplayTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayTitle.length < currentTitle.length) {
          setDisplayTitle(currentTitle.slice(0, displayTitle.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayTitle.length > 0) {
          setDisplayTitle(currentTitle.slice(0, displayTitle.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayTitle, isDeleting, titleIndex, titles]);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-image-container">
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="hero-image"
          />
          <div className="image-ring"></div>
          <div className="image-ring ring-2"></div>
          <div className="status-badge">
            <span className="status-dot"></span>
            Available for opportunities
          </div>
        </div>
        
        <div className="hero-text">
          <p className="hero-greeting">
            <span className="wave">👋</span> Hello, I'm
          </p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-title">
            <span className="typing-text">{displayTitle}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-tagline">{personalInfo.tagline}</p>
          
          <div className="hero-social">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.name}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
            <a href="#" className="btn btn-outline">
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>
      </div>
      
      <a href="#about" className="scroll-indicator">
        <span>Scroll Down</span>
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;

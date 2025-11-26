import { personalInfo } from '../data/portfolio';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer-credit">
            Made with <Heart size={16} className="heart-icon" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

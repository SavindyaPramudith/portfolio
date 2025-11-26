import { useState } from 'react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { Send, Mail, MapPin, Github, Linkedin, Phone, User, MessageSquare, CheckCircle, XCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

// FormSubmit.co - Free unlimited email service, no signup required!
// Just uses your email address directly - emails go to savindyapramudith@gmail.com
// First submission will require email confirmation (one-time)

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  mail: <Mail size={20} />,
};

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
          _template: 'table',
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send');
      }
    } catch (error) {
      console.error('Email Error:', error);
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's work together</p>

        <div ref={ref} className={`contact-content ${isVisible ? 'animate-in' : ''}`}>
          <div className="contact-info">
            <h3>Let's talk about everything!</h3>
            <p>
              Feel free to reach out if you're looking for a developer, have a question,
              or just want to connect. I'm always open to discussing new opportunities.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="contact-label">Phone</span>
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="contact-label">Location</span>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label={link.name}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  {iconMap[link.icon]}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <MessageSquare size={24} />
              <span>Send me a message</span>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send size={18} className={isSubmitting ? 'sending' : ''} />
            </button>

            {submitStatus !== 'idle' && (
              <div className={`submit-status ${submitStatus}`}>
                {submitStatus === 'success' ? (
                  <CheckCircle size={20} />
                ) : (
                  <XCircle size={20} />
                )}
                <span>{statusMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

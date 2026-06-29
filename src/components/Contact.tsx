import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, FileText, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './icons';
import './Contact.css';

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const emailAddress = 'pranav.sde@gmail.com'; // Customizable professional email

  // Copy Email to Clipboard
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  // Handle Form Inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
      // Reset success status message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">05</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct info and links */}
          <div className="contact-info">
            <h3 className="contact-heading">
              Let's create something <span className="serif-font">extraordinary</span> together.
            </h3>
            
            <p className="contact-intro">
              Whether you have a project idea, want to collaborate on a full-stack system, or just want to chat about software engineering—my inbox is always open.
            </p>

            <div className="info-details">
              {/* Email Copier */}
              <div className="info-item email-item" onClick={handleCopyEmail}>
                <div className="info-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="info-text">
                  <span className="info-label">Email Me</span>
                  <span className="info-value">{emailAddress}</span>
                </div>
                <button 
                  className="copy-btn" 
                  aria-label="Copy email address"
                  title="Copy to clipboard"
                >
                  {emailCopied ? <Check size={16} className="copied-icon" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location */}
              <div className="info-item">
                <div className="info-icon-wrapper">
                  <MapPin size={18} />
                </div>
                <div className="info-text">
                  <span className="info-label">Based In</span>
                  <span className="info-value">India</span>
                </div>
              </div>
            </div>

            {/* Social Links & Resume */}
            <div className="contact-actions-row">
              <a 
                href="/resume_placeholder.pdf" // Placeholder path for resume
                download="Pranav_Resume.pdf"
                className="resume-download-btn"
              >
                <FileText size={16} />
                <span>Download Resume</span>
              </a>

              <div className="social-links-container">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-link"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-link"
                  aria-label="Visit GitHub profile"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="e.g. john@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  className="form-input textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="form-submit-btn"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight size={16} className="submit-arrow" />
                  </>
                )}
              </button>

              {/* Status messages */}
              {submitStatus === 'success' && (
                <div className="form-status-message success animate-fade-in">
                  <span>✦ Thank you! Your message has been sent successfully.</span>
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Footer info line */}
        <div className="footer-credits">
          <p>© 2026 Pranav. All Rights Reserved. Built with React & Vanilla CSS.</p>
        </div>
      </div>
    </section>
  );
}

import { ArrowDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Left Sidebar decorative vertical text */}
      <div className="sidebar-text sidebar-left-top">
        <span>SOFTWARE DEVELOPMENT ENGINEER</span>
      </div>
      <div className="sidebar-text sidebar-left-bottom">
        <span>2026</span>
      </div>

      <div className="container hero-container">
        {/* Left Column: Metrics, Title, Subtitle, Scroll Prompt */}
        <div className="hero-content animate-fade-in">
          {/* Metrics */}
          <div className="metrics-row">
            <div className="metric-item">
              <span className="metric-number">1.5+</span>
              <span className="metric-label">Years of Experience</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">10+</span>
              <span className="metric-label">Projects Completed</span>
            </div>
          </div>

          {/* Title Area */}
          <div className="hero-title-area">
            <h1 className="hero-huge-title">Hello</h1>
            <p className="hero-subtitle">
              — It's <span className="serif-font">Pranav</span>, an SDE at KJSDC
            </p>
          </div>

          {/* Scroll down prompt */}
          <div className="scroll-down-wrapper">
            <a href="#about" className="scroll-down-btn" aria-label="Scroll down to About section">
              <span>Scroll down</span>
              <ArrowDown size={14} className="scroll-arrow" />
            </a>
          </div>
        </div>

        {/* Right Column: Hero Portrait Image */}
        <div className="hero-image-wrapper">
          <div className="image-border-effect"></div>
          <img
            src="/hero_portrait.png"
            alt="Pranav - Software Development Engineer"
            className="hero-image"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

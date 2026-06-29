import { ArrowDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Hero Content: Metrics, Name, Designation, Scroll Prompt */}
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
            <h1 className="hero-huge-title">Pranav</h1>
            <p className="hero-subtitle">
              Software Development Engineer
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
      </div>
    </section>
  );
}

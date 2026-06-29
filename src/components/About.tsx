import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Left Column: Core statement */}
          <div className="about-statement-wrapper">
            <h3 className="about-statement">
              I believe in writing <span className="serif-font">clean, scalable code</span> that solves real-world problems and creates <span className="serif-font">delightful digital experiences</span>.
            </h3>
          </div>

          {/* Right Column: Detailed narrative */}
          <div className="about-narrative">
            <p className="narrative-paragraph">
              Hello! I am Pranav, a Software Development Engineer (SDE) with a passion for designing and building highly interactive, responsive, and robust web applications. With a solid academic foundation as a **Master of Computer Applications (MCA)** graduate, I bring a strong understanding of algorithms, database architectures, and software design principles.
            </p>
            
            <p className="narrative-paragraph">
              Currently, I work as an SDE at **KJSDC**, where I've spent the past **1.5 years** collaborating with cross-functional teams to engineer performance-oriented systems. My daily work revolves around full-stack development—refactoring legacy systems, building modular user interfaces, designing clean RESTful APIs, and optimizing database queries.
            </p>

            <p className="narrative-paragraph">
              When I'm not writing code, I keep myself updated with the latest trends in web technologies, explore design aesthetics, and experiment with frontend interactions to bridge the gap between form and function.
            </p>

            {/* Core Values grid */}
            <div className="about-values">
              <div className="value-item">
                <span className="value-label">01 / Engineering</span>
                <p className="value-desc">Focusing on scalability, testability, and clean architecture.</p>
              </div>
              <div className="value-item">
                <span className="value-label">02 / Design-Driven</span>
                <p className="value-desc">Bridging UI design aesthetics with responsive execution.</p>
              </div>
              <div className="value-item">
                <span className="value-label">03 / Communication</span>
                <p className="value-desc">Collaborative mindset with a focus on delivering value.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> SOFTWARE &amp; AI ENGINEER <span className="eyebrow-divider">/</span> BENGALURU, INDIA</p>
        <h1>Building useful<br /><span>intelligence</span> into software.</h1>
        <p className="hero-intro">I’m an AI and backend engineer who turns complex data into practical products, from RAG and LLM applications to reliable APIs. <strong>I’m a quick learner</strong> who adapts fast and enjoys taking ideas from prototype to production.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
          <a className="button button-quiet" href="/Gayathridevi_resume.pdf" download="Gayathridevi_resume.pdf">Download resume <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/gayathri-devi-b-260407220" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/Gayathridevi006" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="mailto:ms.gayathridevi6@gmail.com">Email ↗</a>
        </div>
      </div>
      <aside className="hero-card" aria-label="Professional summary">
        <div className="hero-card-top"><span>NOW BUILDING</span><span className="card-orbit" aria-hidden="true">✳</span></div>
        <div className="hero-card-visual" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="orbit-core">AI<span>+</span></div>
          <span className="orbit-node node-one">RAG</span><span className="orbit-node node-two">API</span><span className="orbit-node node-three">DATA</span>
        </div>
        <h2>AI, backend &amp; data engineering</h2>
        <p>RAG · LLM applications · Python · FastAPI · AWS</p>
        <div className="hero-card-foot"><span>ALETHIC INSIGHTS</span><span>2026 — NOW</span></div>
      </aside>
      <div className="hero-bottom"><span>04+ YEARS BUILDING IN PRODUCTION</span><a href="#experience">Scroll to explore <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}

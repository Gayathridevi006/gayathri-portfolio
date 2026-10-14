const projects = [
  { no: "01", name: "LoanLens AI", type: "AI-ASSISTED LOAN PROCESSING", description: "A local loan-processing prototype that consolidates applicant documents and explains risk signals for human review.", bullets: ["Normalizes CSV, Excel, JSON, and PDF inputs across nine REST endpoints.", "Combines sentiment analysis with rule-based fraud and credit-risk scorecards.", "Designed a Phase 2 agentic RAG flow for cited policy retrieval and cross-document checks."], stack: ["Python", "FastAPI", "React", "TypeScript", "scikit-learn"] },
  { no: "02", name: "AI Resume Builder for Veterans", type: "GENERATIVE AI · CAREER TOOLS", description: "A resume optimization tool that evaluates role fit and generates tailored, ATS-ready documents.", bullets: ["Scores resume relevance against job descriptions with TF-IDF and Logistic Regression.", "Uses T5 inference for skill translation and generates LaTeX resumes dynamically.", "Built a FastAPI backend for veteran profile ingestion and resume generation."], stack: ["Python", "FastAPI", "Hugging Face", "T5", "LaTeX"] },
  { no: "03", name: "AI-Powered Content Delivery", type: "GOOGLE MLB HACKATHON", description: "A personalized sports content experience shaped by user interactions and AI-generated content.", bullets: ["Designed a real-time content delivery system using GCP and data-driven recommendations.", "Built REST APIs and integrated AI model outputs for dynamic sports updates."], stack: ["GCP", "JavaScript", "REST APIs", "AI"] },
];

export default function Projects() {
  return (
    <section id="projects" className="section-block projects-section">
      <div className="section-wrap">
        <div className="section-heading"><p className="eyebrow">SELECTED WORK</p><h2>Projects</h2><p>Practical applications of machine learning, retrieval, and thoughtful backend design.</p></div>
        <div className="projects-grid">
          {projects.map((project) => <article className="project-card" key={project.no}>
            <div className="project-card-top"><span>{project.type}</span><span className="project-number">{project.no}</span></div>
            <h3>{project.name}</h3><p className="project-description">{project.description}</p>
            <ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

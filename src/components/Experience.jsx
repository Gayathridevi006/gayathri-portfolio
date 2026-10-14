const roles = [
  {
    period: "Jul 2026 — Present", role: "Software & AI Engineer II", company: "Alethic Insights · via HealthMinds Technologies", location: "Bengaluru, India", current: true,
    points: [
      "Building a multi-tenant Enterprise Intelligence platform with RAG over Power BI and SharePoint data.",
      "Developing ingestion, chunking, embeddings, and hybrid retrieval with PostgreSQL, pgvector, BM25, and OpenAI models.",
      "Turning account and project signals into delivery health insights, with drill-downs from executive summaries to account details.",
      "Designing in Figma and delivering full-stack features with React, FastAPI, and AWS CDK.",
    ],
  },
  {
    period: "Oct 2024 — Jul 2026", role: "Software Engineer", company: "OpenText · via Mastercom Technologies · Vodafone Idea", location: "Bengaluru, India",
    points: [
      "Owned production deployments of FastAPI microservices on AWS, configuring Nginx, SSL termination, rate limiting, and load balancing.",
      "Led L3 telecom platform support and root-cause analysis; maintained SLAs and reduced MTTR with runbooks.",
      "Managed CI/CD releases with review gates, staged rollouts, and rollback procedures for zero-downtime deployments.",
      "Built an AI prediction service for telecom operations using LLMs and machine learning models.",
    ],
  },
  {
    period: "Dec 2022 — Oct 2024", role: "Associate Product Engineer → Software Engineering Intern", company: "Crediwatch", location: "Bengaluru, India",
    points: [
      "Architected Celery pipelines for financial early-warning signals, moving data from MySQL, MongoDB, and APIs through Pandas transformations.",
      "Containerized services with Docker and Redis, then deployed them on AWS ECS for better isolation and horizontal scaling.",
      "Built Django maker-checker approval workflows with multi-role authorization and Google OAuth 2.0.",
      "Mentored three interns and collaborated with product and data science teams on APIs and signal definitions.",
    ],
  },
  {
    period: "Feb 2022 — Dec 2022", role: "Medical Technical Coordinator", company: "Maxlife Health Enterprises Pvt Ltd", location: "India",
    points: ["Led field engineering coordination and supported medical software and hardware operations."],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-wrap section-block">
      <div className="section-heading"><p className="eyebrow">THE PATH SO FAR</p><h2>Experience</h2><p>Building and operating reliable products across AI, telecom, and financial data.</p></div>
      <div className="timeline">
        {roles.map((item) => (
          <article className="role-card" key={item.company + item.period}>
            <div className="role-meta"><span className={item.current ? "role-current" : ""}>{item.period}</span><span>{item.location}</span></div>
            <div className="role-main"><div className="role-title-row"><h3>{item.role}</h3>{item.current && <span className="current-pill">CURRENT</span>}</div>
              <p className="role-company">{item.company}</p>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

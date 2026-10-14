const groups = [
  ["AI & retrieval", "RAG", "LLM APIs", "Embeddings", "BM25", "Prompt engineering", "Transformers", "TF-IDF", "scikit-learn"],
  ["Backend & data", "Python", "FastAPI", "Django", "Flask", "REST APIs", "Celery", "Pandas", "NumPy"],
  ["Frontend", "React", "TypeScript", "JavaScript", "Figma", "Playwright", "Selenium"],
  ["Cloud & systems", "AWS", "AWS CDK", "ECS", "EC2", "S3", "Docker", "Nginx", "CI/CD", "Linux"],
  ["Databases & messaging", "PostgreSQL", "pgvector", "MySQL", "MongoDB", "Redis", "RabbitMQ", "Hadoop"],
  ["Engineering", "System design", "Microservices", "Data pipelines", "RBAC", "Distributed systems", "Git", "SQLAlchemy"],
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrap section-block">
      <div className="section-heading"><p className="eyebrow">TOOLS I WORK WITH</p><h2>Skills &amp; strengths</h2><p>A practical toolkit for shipping end-to-end AI and data products.</p></div>
      <div className="skills-grid">{groups.map(([title, ...skills]) => <article className="skill-card" key={title}><h3>{title}</h3><div className="tag-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
    </section>
  );
}

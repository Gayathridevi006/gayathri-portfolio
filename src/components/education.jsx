const education = [
  { degree: "M.Tech in Data Science, AI & Machine Learning", school: "PES University", period: "Jul 2024 — Oct 2026", detail: "Weekend program · Bengaluru, India" },
  { degree: "B.E. in Medical Electronics", school: "Visvesvaraya Technological University · AIT", period: "Aug 2017 — Aug 2021", detail: "Bengaluru, India" },
];

export default function Education() {
  return (
    <section id="education" className="section-wrap section-block">
      <div className="section-heading"><p className="eyebrow">FOUNDATIONS</p><h2>Education</h2></div>
      <div className="education-grid">{education.map((item) => <article className="education-card" key={item.degree}><span className="education-period">{item.period}</span><h3>{item.degree}</h3><p>{item.school}</p><span className="education-detail">{item.detail}</span></article>)}</div>
    </section>
  );
}

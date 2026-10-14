export default function Contact() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="section-wrap contact-inner">
          <div><p className="eyebrow">HAVE A GOOD PROBLEM?</p><h2>Let’s build something<br /><span>that matters.</span></h2><p className="contact-intro">Open to conversations about AI products, backend systems, and data engineering.</p></div>
          <a className="button button-light" href="mailto:ms.gayathridevi6@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <footer className="site-footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">G</span><span>Gayathri Devi<span className="brand-dot">.</span></span></a><p>Designed &amp; built with care · Bengaluru, India</p><div className="footer-links"><a href="https://www.linkedin.com/in/gayathri-devi-b-260407220" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Gayathridevi006" target="_blank" rel="noreferrer">GitHub ↗</a></div><span className="copyright">© {new Date().getFullYear()}</span></footer>
    </>
  );
}

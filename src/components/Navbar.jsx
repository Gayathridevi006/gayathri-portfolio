export default function Navbar() {
  return (
    <section className="pt-5">
    <nav className="py-6">

      <div className="max-w-6xl mx-auto flex justify-between">

        <h1 className="font-bold">
          Gayathri Portfolio
        </h1>

        <div className="flex gap-8">

          <a href="#projects" className="hover:text-indigo-400">
            Projects
          </a>

          <a href="#experience" className="hover:text-indigo-400">
            Experience
          </a>

          <a href="#contact" className="hover:text-indigo-400">
            Contact
          </a>
          <a href="#architecture" className="hover:text-indigo-400">
            Architecture
          </a>

          <a href="#impact" className="hover:text-indigo-400">
            Impact
          </a>

        </div>

      </div>

    </nav>
    </section>
  );
}
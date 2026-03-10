export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Name */}

        <h1 className="text-lg font-bold text-indigo-400">
          👋 Hello, I'm Gayathri!
        </h1>

        {/* Navigation Links */}

        <div className="flex gap-6 text-gray-300 text-sm">

          <a href="#projects" className="hover:text-indigo-400 transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-indigo-400 transition">
            Skills
          </a>

          <a href="#experience" className="hover:text-indigo-400 transition">
            Experience
          </a>

          <a href="#architecture" className="hover:text-indigo-400 transition">
            Architecture
          </a>

          <a href="#impact" className="hover:text-indigo-400 transition">
            Impact
          </a>

          <a href="#contact" className="hover:text-indigo-400 transition">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}
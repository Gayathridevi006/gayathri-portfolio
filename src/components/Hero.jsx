export default function Hero() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* PROFILE IMAGE */}

        <div className="flex justify-center">

          <img
            src="/Profile_1.jpg"
            alt="Gayathri Devi"
            className="w-56 h-56 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />

        </div>

        {/* TEXT */}

        <div className="text-center md:text-left">

          <h1 className="text-5xl font-bold text-indigo-400">
            Gayathri Devi
          </h1>

          <p className="text-xl text-gray-400 mt-4">
            Python Backend Engineer | FastAPI | Django | AI Systems
          </p>

          <p className="mt-6 text-gray-400 max-w-lg">
            Backend engineer experienced in scalable APIs, telecom analytics,
            ETL pipelines and data-driven platforms.
          </p>

          <div className="flex gap-4 mt-8 justify-center md:justify-start">

            <a
              href="../assets/gayathri_cv.pdf"
              download
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg"
            >
              Download Resume
            </a>
            
            <a href="https://www.linkedin.com/in/gayathri-devi-b-260407220" className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-800">
              LinkedIn
            </a>

            <a
              href="https://github.com/Gayathridevi006"
              className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-800"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
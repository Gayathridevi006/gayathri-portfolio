export default function Education() {
  return (
    <section id="education" className="py-24 flex justify-center">

      <div className="max-w-5xl w-full">

        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
          Education
        </h2>

        <div className="space-y-8">

          {/* MTech */}

          <div className="border border-indigo-500 rounded-xl p-8 hover:shadow-indigo-500/30 hover:shadow-lg transition">

            <h3 className="text-xl font-semibold">
              M.Tech – Data Science, AI & Machine Learning
            </h3>

            <p className="text-gray-400 mt-2">
              PES University, Bangalore
            </p>

            <p className="text-gray-500 text-sm mt-1">
              July 2024 – July 2026 (Weekend Program)
            </p>

          </div>

          {/* PG Diploma */}

          <div className="border border-indigo-500 rounded-xl p-8 hover:shadow-indigo-500/30 hover:shadow-lg transition">

            <h3 className="text-xl font-semibold">
              PG Diploma – Embedded Systems & IoT
            </h3>

            <p className="text-gray-400 mt-2">
              Cranes Varsity, Bangalore
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Sept 2021 – Aug 2022
            </p>

          </div>

          {/* BE */}

          <div className="border border-indigo-500 rounded-xl p-8 hover:shadow-indigo-500/30 hover:shadow-lg transition">

            <h3 className="text-xl font-semibold">
              B.E – Medical Electronics
            </h3>

            <p className="text-gray-400 mt-2">
              Visvesvaraya Technological University (AIT), Bangalore
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Aug 2017 – Aug 2021
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
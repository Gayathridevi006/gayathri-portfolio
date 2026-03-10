export default function Experience() {
  return (
    <section id="experience" className="py-20">

      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
        Experience
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">

        {/* Mastercom */}

        <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:scale-[1.02] transition">

          <h3 className="text-xl font-bold">
            Software Engineer – Mastercom Technologies
          </h3>

          <p className="text-indigo-400 text-sm mt-1">
            Oct 2024 – Present | Bangalore
          </p>

          <ul className="text-gray-400 mt-4 space-y-2 list-disc list-inside">
            <li>Developed scalable backend APIs using FastAPI</li>
            <li>Processed large telecom datasets using Hadoop</li>
            <li>Optimized PostgreSQL queries and improved data reliability</li>
            <li>Handled L3 production incidents and system monitoring</li>
            <li>Implemented RBAC authentication for enterprise applications</li>
          </ul>

        </div>


        {/* Crediwatch */}

        <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:scale-[1.02] transition">

          <h3 className="text-xl font-bold">
            Associate Product Engineer – Crediwatch
          </h3>

          <p className="text-indigo-400 text-sm mt-1">
            Dec 2023 – Oct 2024 | Bangalore
          </p>

          <ul className="text-gray-400 mt-4 space-y-2 list-disc list-inside">
            <li>Built asynchronous pipelines using Celery and Redis</li>
            <li>Designed ETL systems for financial intelligence platforms</li>
            <li>Integrated MySQL and MongoDB data ingestion pipelines</li>
            <li>Deployed containerized services using Docker on AWS ECS</li>
            <li>Mentored interns on backend development and data pipelines</li>
          </ul>

        </div>

      </div>

    </section>
  );
}
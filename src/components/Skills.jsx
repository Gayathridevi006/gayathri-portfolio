export default function Skills() {
  return (
    <section id="skills" className="py-20">

      <h2 className="text-3xl font-bold text-center mb-12">
        Technical Skills
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Languages */}

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4 text-indigo-400">
            Languages
          </h3>

          <ul className="text-gray-400 space-y-2">
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </div>


        {/* Backend */}

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4 text-indigo-400">
            Backend
          </h3>

          <ul className="text-gray-400 space-y-2">
            <li>FastAPI</li>
            <li>Django</li>
            <li>Flask</li>
            <li>REST APIs</li>
            <li>Microservices</li>
          </ul>
        </div>


        {/* Data Engineering */}

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4 text-indigo-400">
            Data Engineering
          </h3>

          <ul className="text-gray-400 space-y-2">
            <li>Pandas</li>
            <li>NumPy</li>
            <li>Hadoop</li>
            <li>ETL Pipelines</li>
          </ul>
        </div>


        {/* Cloud & DevOps */}

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4 text-indigo-400">
            Cloud & DevOps
          </h3>

          <ul className="text-gray-400 space-y-2">
            <li>AWS EC2</li>
            <li>AWS S3</li>
            <li>AWS Lambda</li>
            <li>Docker</li>
            <li>Redis</li>
            <li>RabbitMQ</li>
          </ul>
        </div>


        {/* Databases */}

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4 text-indigo-400">
            Databases
          </h3>

          <ul className="text-gray-400 space-y-2">
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>AWS Athena</li>
          </ul>
        </div>


        {/* Tools */}

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4 text-indigo-400">
            Tools
          </h3>

          <ul className="text-gray-400 space-y-2">
            <li>Git</li>
            <li>Bitbucket</li>
            <li>Jira</li>
            <li>Postman</li>
            <li>Linux</li>
          </ul>
        </div>


        {/* Concepts */}

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4 text-indigo-400">
            Concepts
          </h3>

          <ul className="text-gray-400 space-y-2">
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>RBAC</li>
            <li>Distributed Systems</li>
          </ul>
        </div>

      </div>

    </section>
  );
}
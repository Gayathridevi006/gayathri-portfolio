export default function Projects() {
  return (
    <section id="projects" className="py-20">

      <h2 className="text-3xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* TRACE Project */}

        <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">

          <h3 className="text-xl font-semibold">
            TRACE – Technical Warranty Recommender
          </h3>

          <p className="text-gray-400 mt-3">
            AI system designed to analyze warranty claims and recommend 
            approval or rejection decisions using machine learning and NLP.
          </p>

          <ul className="text-gray-400 mt-4 list-disc list-inside space-y-1">
            <li>Analyzed warranty claim descriptions using NLP</li>
            <li>Integrated sensor and operational data for prediction</li>
            <li>Built ML pipeline to automate recommendation decisions</li>
          </ul>

          <p className="text-indigo-400 mt-4 text-sm">
            Tech: Python, Machine Learning, NLP, Data Analytics
          </p>

        </div>


        {/* VetDeploy */}

        <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">

          <h3 className="text-xl font-semibold">
            VetDeploy – Military to Corporate Job Mapper
          </h3>

          <p className="text-gray-400 mt-3">
            Full-stack platform mapping military veterans’ skills to 
            relevant corporate job roles.
          </p>

          <ul className="text-gray-400 mt-4 list-disc list-inside space-y-1">
            <li>Built REST APIs using FastAPI</li>
            <li>Designed UI using React</li>
            <li>Stored user and job data in MongoDB</li>
            <li>Containerized services with Docker</li>
          </ul>

          <p className="text-indigo-400 mt-4 text-sm">
            Tech: FastAPI, React, MongoDB, Docker
          </p>

        </div>


        {/* AI Sports Project */}

        <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">

          <h3 className="text-xl font-semibold">
            AI-Powered Personalized Sports Content
          </h3>

          <p className="text-gray-400 mt-3">
            System developed during the Google MLB Hackathon to deliver 
            personalized sports content using AI models.
          </p>

          <ul className="text-gray-400 mt-4 list-disc list-inside space-y-1">
            <li>Generated personalized sports updates using AI models</li>
            <li>Integrated GCP tools and Imagen models</li>
            <li>Connected frontend components with APIs</li>
          </ul>

          <p className="text-indigo-400 mt-4 text-sm">
            Tech: GCP, JavaScript APIs, AI Models
          </p>

        </div>


        {/* ETL Data Pipeline */}

        <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">

          <h3 className="text-xl font-semibold">
            Financial Early Warning ETL Pipeline
          </h3>

          <p className="text-gray-400 mt-3">
            Data pipeline built to process financial signals for banks
            and generate early warning alerts.
          </p>

          <ul className="text-gray-400 mt-4 list-disc list-inside space-y-1">
            <li>Processed financial data from multiple APIs</li>
            <li>Implemented asynchronous Celery task queues</li>
            <li>Generated alerts using Pandas data analysis</li>
          </ul>

          <p className="text-indigo-400 mt-4 text-sm">
            Tech: Python, Celery, Redis, MongoDB, Pandas
          </p>

        </div>

      </div>

    </section>
  );
}
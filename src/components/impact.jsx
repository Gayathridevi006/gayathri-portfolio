export default function Impact() {
  return (
    <section id="impact" className="py-20 px-6">

      <h2 className="text-3xl font-bold text-center mb-12">
        Engineering Impact
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-slate-800 p-8 rounded-xl text-center shadow-lg">
          <h3 className="text-4xl font-bold text-indigo-400">L3</h3>
          <p className="text-gray-400 mt-3">
            Production telecom platform support
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl text-center shadow-lg">
          <h3 className="text-4xl font-bold text-indigo-400">Celery</h3>
          <p className="text-gray-400 mt-3">
            Async processing pipelines
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl text-center shadow-lg">
          <h3 className="text-4xl font-bold text-indigo-400">TB+</h3>
          <p className="text-gray-400 mt-3">
            Large telecom datasets processed
          </p>
        </div>

      </div>

    </section>
  );
}
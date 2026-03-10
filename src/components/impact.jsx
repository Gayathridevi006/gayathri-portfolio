export default function Impact() {
  return (
    <section id="impact" className="py-20 px-6">

      <h2 className="text-3xl font-bold text-center mb-12">
        Engineering Impact
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3\ gap-8">

        <div className="bg-gradient-to-r from-indigo-700 to-white-500 text-white px-7 py-4 rounded-lg font-medium hover:opacity-90 transition shadow-lg">
          <h3 className="text-4xl font-bold text-white-400">L3</h3>
          <p className="text-white-500 mt-5">
            Production telecom platform support
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-700 to-white-500 text-white px-7 py-4 rounded-lg font-medium hover:opacity-90 transition shadow-lg">
          <h3 className="text-4xl font-bold text-white-400">Celery</h3>
          <p className="text-white-500 mt-5">
            Async processing pipelines
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-700 to-white-700 text-white px-7 py-4 rounded-lg font-medium hover:opacity-90 transition shadow-lg">
          <h3 className="text-4xl font-bold text-white-400">TB+</h3>
          <p className="text-white-500 mt-5">
            Large telecom datasets processed
          </p>
        </div>

      </div>

    </section>
  );
}
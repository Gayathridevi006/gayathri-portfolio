export default function Contact() {
  return (
    <section id="contact" className="py-32 flex justify-center">

      <div className="border border-indigo-500 rounded-xl p-10 max-w-xl w-full hover:shadow-indigo-500/30 hover:shadow-lg transition">

        <h2 className="text-4xl font-bold text-center mb-10 text-indigo-400">
          Contact
        </h2>

        <div className="space-y-6 text-gray-300">

          <div className="flex justify-between">
            <span className="font-semibold">📍 Location</span>
            <span>Bangalore, India</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">📧 Email</span>
            <a
              href="mailto:ms.gayathridevi6@gmail.com"
              className="text-indigo-400 hover:underline"
            >
              ms.gayathridevi6@gmail.com
            </a>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">💻 GitHub</span>
            <a
              href="https://github.com/Gayathridevi006"
              target="_blank"
              className="text-indigo-400 hover:underline"
            >
              github.com/Gayathridevi006
            </a>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">🔗 LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/gayathri-devi-b-260407220"
              target="_blank"
              className="text-indigo-400 hover:underline"
            >
              linkedin.com/in/gayathri-devi-b
            </a>
          </div>

        </div>

        <div className="border-t border-indigo-500 my-8"></div>

        <p className="text-center text-red-400 font-medium">
          Open to Backend / Data Engineering Roles 🚀
        </p>

      </div>

    </section>
  );
}
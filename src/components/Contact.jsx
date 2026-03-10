export default function Contact() {
  return (
    <section id="contact" className="py-20 flex justify-center">

      <div className="bg-slate-800 p-10 rounded-xl shadow-lg max-w-xl w-full text-center">

        <h2 className="text-3xl font-bold mb-8">
          Contact
        </h2>

        <div className="space-y-4 text-gray-300">

          <p>
            📍 <span className="font-semibold">Location:</span> Bangalore, India
          </p>

          <p>
            📧 <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:ms.gayathridevi6@gmail.com"
              className="text-indigo-400 hover:underline"
            >
              ms.gayathridevi6@gmail.com
            </a>
          </p>

          <p>
            💻 <span className="font-semibold">GitHub:</span>{" "}
            <a
              href="https://github.com/Gayathridevi006"
              target="_blank"
              className="text-indigo-400 hover:underline"
            >
              github.com/Gayathridevi006
            </a>
          </p>

          <p>
            🔗 <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/gayathri-devi-b-260407220"
              target="_blank"
              className="text-indigo-400 hover:underline"
            >
              linkedin.com/in/gayathri-devi-b
            </a>
          </p>

        </div>



        <div className="border-t border-gray-1000 my-8"></div>

        <p className="mt-8 text-gray-400">
          Open to Backend / Data Engineering Roles 🚀
        </p>

      </div>     

    </section>   

  );
}
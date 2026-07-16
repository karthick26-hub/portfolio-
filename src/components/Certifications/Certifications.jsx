import { motion } from "framer-motion";
import { FaAward, FaCalendarAlt, FaClock, FaExternalLinkAlt } from "react-icons/fa";

import guviCertificate from "../../assets/guvi certificate.png";

const Certifications = () => {
  const certificates = [
    {
      title: "Master Data Science Program",
      organization: "GUVI Geek Networks (IIT-M Incubated)",
      date: "June 2026",
      duration: "3 Months",
      image: guviCertificate,
      credential: "",
      skills: [
        "Python",
        "Machine Learning",
        "SQL",
        "Data Analytics",
        "Flask",
        "Streamlit",
      ],
    },
  ];

  return (
    <section id="certifications" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[5px] text-cyan-600">
            Certifications
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Professional Certifications
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Certifications that showcase continuous learning, technical
            expertise and commitment to professional development.
          </p>
        </motion.div>

        {/* Certificate */}

        <div className="flex justify-center">

          {certificates.map((certificate) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-lg transition-all duration-300 hover:border-cyan-500 hover:shadow-2xl"
            >
              <div className="grid lg:grid-cols-2">

                {/* Left */}

                <div className="bg-white p-6 flex items-center justify-center">

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full rounded-2xl border border-slate-200 shadow-md object-contain"
                  />

                </div>

                {/* Right */}

                <div className="p-8 lg:p-10">

                  <div className="flex items-center gap-4">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl text-cyan-600">

                      <FaAward />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-slate-900">
                        {certificate.title}
                      </h3>

                      <p className="mt-1 font-semibold text-cyan-600">
                        {certificate.organization}
                      </p>

                    </div>

                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">

                    <span className="flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">
                      <FaCalendarAlt />
                      {certificate.date}
                    </span>

                    <span className="flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">
                      <FaClock />
                      {certificate.duration}
                    </span>

                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                  {certificate.credential && (
                    <a
                      href={certificate.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10 inline-flex items-center gap-3 rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
                    >
                      View Credential
                      <FaExternalLinkAlt />
                    </a>
                  )}

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;
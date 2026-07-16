import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "B.Tech Artificial Intelligence & Data Science",
      college: "Meenakshi Sundararajan Engineering College",
      year: "2021 - 2025",
      description:
        "Focused on Artificial Intelligence, Machine Learning, Data Analytics, Python Programming, Database Management Systems, and Software Engineering.",
    },
    {
      degree: "GUVI Certified Programs",
      college: "GUVI Geek Networks",
      year: "2025 - 2026",
      description:
        "Completed hands-on training in Python, Flask, Machine Learning, SQL, Streamlit, Data Analytics, and real-world project development.",
    },
  ];

  return (
    <section id="education" className="bg-slate-50 py-24">
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
            Education
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Academic Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            My academic foundation and professional learning journey that
            strengthened my knowledge in Artificial Intelligence, Machine
            Learning, Data Analytics and Software Development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-10">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-cyan-500 hover:shadow-2xl"
            >
              <div className="flex flex-col gap-6 md:flex-row">
                {/* Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-100 text-4xl text-cyan-600">
                  <FaGraduationCap />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-lg font-semibold text-cyan-600">
                        {item.college}
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
                      {item.year}
                    </span>
                  </div>

                  <p className="mt-6 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
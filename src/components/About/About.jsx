import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";

import profile from "../../assets/profile.png";

const About = () => {
  const stats = [
    {
      number: "15+",
      title: "Technical Skills",
    },
    {
      number: "5+",
      title: "Projects Completed",
    },
    {
      number: "300+",
      title: "Coding Problems Solved",
    },
    {
      number: "100%",
      title: "Learning Mindset",
    },
  ];

  const skills = [
    {
      icon: <FaPython />,
      title: "Python Development",
    },
    {
      icon: <FaBrain />,
      title: "Machine Learning",
    },
    {
      icon: <FaDatabase />,
      title: "SQL & Data Analytics",
    },
    {
      icon: <FaChartLine />,
      title: "Data Visualization",
    },
  ];

  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[5px] text-cyan-600">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Know More About Me
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Passionate AI & Data Science graduate dedicated to building
            intelligent software solutions through Python, Machine Learning,
            Data Analytics and Full Stack Development.
          </p>
        </motion.div>

        {/* Main Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-3xl bg-cyan-400/20 blur-3xl"></div>

              <img
                src={profile}
                alt="Karthick Kumaran"
                className="relative w-[320px] rounded-3xl border-4 border-white shadow-2xl lg:w-[380px]"
              />
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h3 className="text-3xl font-bold text-slate-900 lg:text-4xl">
              AI & Data Science Graduate
            </h3>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              I'm{" "}
              <span className="font-semibold text-slate-900">
                Karthick Kumaran
              </span>
              , an AI & Data Science graduate passionate about Python,
              Artificial Intelligence, Machine Learning, SQL and Data
              Analytics.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              I enjoy transforming ideas into real-world applications by
              combining software development with data-driven decision making.
              I continuously strengthen my technical skills through practical
              projects, coding challenges and exploring emerging technologies.
            </p>

            {/* Skill Cards */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-3xl text-cyan-600">
                    {skill.icon}
                  </div>

                  <span className="font-semibold text-slate-800">
                    {skill.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Statistics */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl"
            >
              <h2 className="text-5xl font-bold text-cyan-600">
                {item.number}
              </h2>

              <p className="mt-4 text-lg font-medium text-slate-600">
                {item.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
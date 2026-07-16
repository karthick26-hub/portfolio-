import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaChartBar,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Flask", icon: <FaLaptopCode /> },
      ],
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Machine Learning", icon: <FaBrain /> },
        { name: "TensorFlow", icon: <FaBrain /> },
        { name: "OpenCV", icon: <FaLaptopCode /> },
        { name: "NLP", icon: <FaBrain /> },
      ],
    },
    {
      title: "Data Analytics",
      skills: [
        { name: "Pandas", icon: <FaChartBar /> },
        { name: "NumPy", icon: <FaChartBar /> },
        { name: "Power BI", icon: <FaChartBar /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "SQLite", icon: <FaDatabase /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Jupyter Notebook", icon: <FaLaptopCode /> },
        { name: "VS Code", icon: <FaLaptopCode /> },
        { name: "Streamlit", icon: <FaLaptopCode /> },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-slate-50 py-24">
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
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Technical Skills
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            My technical toolkit for developing intelligent applications,
            analyzing data and building scalable software solutions.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              {/* Category Title */}
              <div className="mb-8 flex items-center gap-4">
                <div className="h-1 w-14 rounded-full bg-cyan-500"></div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {category.title}
                </h3>
              </div>

              {/* Skill Cards */}
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      y: -8,
                      scale: 1.04,
                    }}
                    transition={{ duration: 0.25 }}
                    className="group flex min-h-[170px] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-cyan-500 hover:shadow-xl"
                  >
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-4xl text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">
                      {skill.icon}
                    </div>

                    <h4 className="font-semibold text-slate-800">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
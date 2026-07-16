import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPython,
} from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Telecom AI Brand Intelligence System",
      description:
        "Built an AI-powered telecom feedback analysis platform using BERT, RAG, FAISS, Flask and Streamlit. The system classifies customer sentiment, detects service categories and retrieves telecom policies through Retrieval-Augmented Generation.",
      tech: [
        "Python",
        "Flask",
        "BERT",
        "FAISS",
        "Streamlit",
        "Machine Learning",
      ],
      github:
        "https://github.com/karthick26-hub/telecom-based-AI-intelligence-system.git",
    },
    {
      title: "Comment Toxicity Detection System",
      description:
        "Developed an NLP application that detects toxic comments using text preprocessing and machine learning techniques to improve online communication.",
      tech: [
        "Python",
        "NLP",
        "Scikit-learn",
        "Pandas",
        "NumPy",
      ],
      github:
        "https://github.com/karthick26-hub/toxic-comments-detection.git",
    },
    {
      title: "Amazon Music Clustering",
      description:
        "Applied clustering algorithms to categorize over 95,000 songs using feature engineering, preprocessing and dimensionality reduction techniques.",
      tech: [
        "Python",
        "Scikit-learn",
        "PCA",
        "t-SNE",
        "Clustering",
      ],
      github:
        "https://github.com/karthick26-hub/amazon-music-clustering.git",
    },
    {
      title: "PhonePe Transaction Insights",
      description:
        "Created an interactive dashboard using Streamlit and MySQL to visualize PhonePe transaction data with filters, maps and analytical insights.",
      tech: [
        "Python",
        "MySQL",
        "Streamlit",
        "SQL",
      ],
      github:
        "https://github.com/karthick26-hub/phonepe_transaction_analysis.git",
    },
    {
      title: "Luxury House Sales Analysis",
      description:
        "Designed an interactive Power BI dashboard to analyze Bangalore luxury house sales using advanced visualization and reporting techniques.",
      tech: [
        "Power BI",
        "Python",
        "Data Analytics",
      ],
      github:
        "https://github.com/karthick26-hub/house_sales_analysis.git",
    },
    {
      title: "Content Monetization Modeler",
      description:
        "Analyzed content monetization strategies using Python and Machine Learning to identify trends and improve revenue prediction.",
      tech: [
        "Python",
        "Pandas",
        "NumPy",
        "Machine Learning",
      ],
      github:
        "https://github.com/karthick26-hub/youtube_monetization_modeler.git",
    },
  ];

  return (
    <section id="projects" className="bg-white py-24">
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
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            AI, Machine Learning and Data Analytics projects demonstrating my
            technical skills, practical experience and passion for solving
            real-world problems.
          </p>
        </motion.div>

        {/* Project Cards */}

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg transition-all duration-300 hover:border-cyan-500 hover:shadow-2xl"
            >
              {/* Top */}

              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl text-cyan-600">
                  <FaPython />
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-cyan-600"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-slate-900">
                {project.title}
              </h3>

              {/* Description */}

              <p className="mt-5 flex-grow leading-8 text-slate-600">
                {project.description}
              </p>

              {/* Tech Stack */}

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
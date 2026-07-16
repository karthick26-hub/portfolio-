import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-cyan-50"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-cyan-300/30 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-300/20 blur-[150px] rounded-full" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-xl">
              <p className="text-cyan-600 text-lg md:text-xl font-semibold mb-6">
                👋 Hello, I'm
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="text-slate-900">Karthick </span>

                <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                  Kumaran
                </span>
              </h1>

              <div className="mt-8 h-14 text-2xl md:text-3xl font-bold text-slate-700">
                <TypeAnimation
                  sequence={[
                    "Python Developer",
                    2000,
                    "AI & Data Science Graduate",
                    2000,
                    "Machine Learning Enthusiast",
                    2000,
                    "Data Analyst",
                    2000,
                  ]}
                  speed={40}
                  repeat={Infinity}
                />
              </div>

              <p className="mt-8 text-lg leading-9 text-slate-600">
                Passionate AI & Data Science graduate specializing in{" "}
                <span className="font-semibold text-slate-900">
                  Python, Machine Learning, Data Analytics
                </span>{" "}
                and Full Stack Development. I enjoy building intelligent
                applications that solve real-world problems through clean
                architecture, scalable software, and AI-driven solutions.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  download="Karthick_Kumaran_Resume.pdf"
                  className="flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-cyan-500/40"
                >
                  <FaDownload />
                  Download Resume
                </a>

                <a
                  href="#projects"
                  className="flex items-center gap-3 rounded-xl border-2 border-cyan-600 px-7 py-4 font-semibold text-cyan-700 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:text-white"
                >
                  View Projects
                  <FaArrowRight />
                </a>
              </div>

              {/* Social Icons */}
              <div className="mt-10 flex gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-white text-2xl text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-600 hover:bg-cyan-600 hover:text-white"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-white text-2xl text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-600 hover:bg-cyan-600 hover:text-white"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:yourmail@gmail.com"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-white text-2xl text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-600 hover:bg-cyan-600 hover:text-white"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 1 },
              x: { duration: 1 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-full bg-cyan-400/30 blur-[80px]" />

              <div className="rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-2 shadow-2xl">
                <div className="rounded-full bg-white p-2">
                  <img
                    src={profile}
                    alt="Karthick Kumaran"
                    className="h-[320px] w-[320px] rounded-full object-cover border-4 border-white lg:h-[420px] lg:w-[420px]"
                  />
                </div>
              </div>

              <div className="absolute -top-4 -left-4 h-5 w-5 rounded-full bg-cyan-500 animate-ping" />
              <div className="absolute -bottom-3 right-3 h-4 w-4 rounded-full bg-blue-500 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main Footer */}

        <div className="border-b border-slate-800 py-16">

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-5xl font-black tracking-[8px] text-transparent">
              AKK
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              AI & Data Science Graduate passionate about Python Development,
              Machine Learning, Data Analytics and building intelligent software
              solutions.
            </p>

            {/* Social Icons */}

            <div className="mt-10 flex justify-center gap-5">

              <a
                href="mailto:karthickkumaran2604@gmail.com"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://github.com/karthick26-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/karthick-kumaran-anandhan-91922a414/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">

          <p className="text-center text-slate-500">
            © {new Date().getFullYear()} Karthick Kumaran. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
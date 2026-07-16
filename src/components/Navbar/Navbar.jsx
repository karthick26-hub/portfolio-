import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="select-none text-3xl font-black tracking-[8px]"
        >
          <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            AKK
          </span>
        </a>

        {/* Desktop Right */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="/resume.pdf"
            download="Karthick_Kumaran_Resume.pdf"
            className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-700"
          >
            <FaDownload />
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-slate-700 md:hidden"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col items-center gap-5 px-6 py-6">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-medium text-slate-700 hover:text-cyan-600"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-medium text-slate-700 hover:text-cyan-600"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              download="Karthick_Kumaran_Resume.pdf"
              className="flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
            >
              <FaDownload />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
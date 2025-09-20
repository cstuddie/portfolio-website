import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Caleb Studdie. All rights reserved.
        </p>

        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/cstuddie"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:calebstuddie@gmail.com"
            className="hover:text-teal-400 transition-colors transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

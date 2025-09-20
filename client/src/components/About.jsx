import { FaCode, FaRocket, FaUser, FaMobile } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a dedicated developer passionate about creating innovative web solutions. 
              With a strong foundation in modern web technologies, I enjoy turning complex 
              problems into simple, beautiful designs.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or learning about the latest trends in web development.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-700/50 p-6 rounded-lg text-center hover:bg-slate-700 transition-colors">
              <FaCode className="text-3xl text-teal-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-400 text-sm">Writing maintainable, scalable solutions</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg text-center hover:bg-slate-700 transition-colors">
              <FaRocket className="text-3xl text-teal-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Performance</h3>
              <p className="text-gray-400 text-sm">Optimized for speed and efficiency</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg text-center hover:bg-slate-700 transition-colors">
              <FaUser className="text-3xl text-teal-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">User-Focused</h3>
              <p className="text-gray-400 text-sm">Designing with users in mind</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg text-center hover:bg-slate-700 transition-colors">
              <FaMobile className="text-3xl text-teal-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Responsive</h3>
              <p className="text-gray-400 text-sm">Works perfectly on all devices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useEffect, useState } from 'react';
import profilePic from "../assets/profile.jpeg";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Profile Image */}
        <div className="flex-shrink-0 relative">
          <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl relative z-10 border-4 border-teal-400/20">
            <img
              src={profilePic}
              alt="Caleb Studdie"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 to-blue-500/20 animate-spin-slow"></div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Caleb
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            A passionate{' '}
            <span className="text-teal-400 font-semibold">full-stack developer</span>{' '}
            crafting modern web experiences with cutting-edge technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-teal-400 text-teal-400 font-semibold rounded-full hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
            <div>
              <div className="text-2xl font-bold text-teal-400">2+</div>
              <div className="text-sm text-gray-400">Years Learning</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-400">3+</div>
              <div className="text-sm text-gray-400">Projects Built</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-400">5+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import {
  FaJs, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaSass,
  FaGitAlt, FaDocker, FaAws, FaBootstrap, FaVuejs, FaAngular,
  FaDatabase, FaLeaf, FaNpm, FaCode, FaEnvelope
} from 'react-icons/fa';

const techStack = [
  { icon: <FaJs className="text-yellow-400" />, label: 'JavaScript' },
  { icon: <FaReact className="text-blue-400" />, label: 'React' },
  { icon: <FaNodeJs className="text-green-500" />, label: 'Node.js' },
  { icon: <FaPython className="text-blue-500" />, label: 'Python' },
  { icon: <FaHtml5 className="text-orange-500" />, label: 'HTML5' },
  { icon: <FaCss3Alt className="text-blue-500" />, label: 'CSS3' },
  { icon: <FaSass className="text-pink-500" />, label: 'SASS' },
  { icon: <FaGitAlt className="text-orange-600" />, label: 'Git' },
  { icon: <FaDocker className="text-blue-500" />, label: 'OOPS' },
  { icon: <FaAws className="text-orange-400" />, label: 'JAVA' },
  { icon: <FaBootstrap className="text-blue-600" />, label: 'Bootstrap' },
  { icon: <FaVuejs className="text-green-400" />, label: 'Vue.js' },
  { icon: <FaAngular className="text-red-500" />, label: 'Angular' },
  { icon: <FaDatabase className="text-blue-700" />, label: 'PostgreSQL' },
  { icon: <FaLeaf className="text-green-600" />, label: 'MongoDB' },
  { icon: <FaNpm className="text-red-600" />, label: 'NPM' }
];

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 pb-28 bg-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/bg.svg')] opacity-[.03] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="flex flex-col xl:flex-row gap-12 items-center justify-between">

            {/* Left Content */}
            <div className="w-full text-center xl:text-left space-y-6 xl:pt-12">
              <div className="space-y-2">
                <h2 className="text-purple-400 text-xl md:text-2xl font-semibold">Hello World! I'm</h2>
                <h1 className="text-4xl lg:text-6xl font-bold font-mono text-white animate-fade-in">
                  Pratyasha Priyadarshini
                </h1>
              </div>
              <p className="text-lg text-gray-300 max-w-xl mx-auto xl:mx-0 leading-relaxed animate-fade-in delay-200">
                Building elegant, scalable, and responsive web apps with React, Node, and clean code principles.
              </p>
              <div className="flex flex-wrap justify-center xl:justify-start gap-4 pt-4 animate-fade-in delay-300">
                <a href="#projects" className="bg-purple-500 hover:bg-purple-600 text-black font-bold py-3 px-5 rounded-lg flex items-center gap-2 transition">
                  <FaCode /> View Projects
                </a>
                <a href="#contact" className="border border-purple-400 text-purple-400 hover:bg-gray-800 font-bold py-3 px-5 rounded-lg flex items-center gap-2 transition">
                  <FaEnvelope /> Contact Me
                </a>
              </div>
            </div>

            {/* Right Content - Monitor and Desk */}
            <div className="relative w-full xl:w-3/4">
              <div className="relative w-full aspect-video">
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/30 blur-3xl rounded-full -z-10" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/40 blur-3xl rounded-full -z-10" />

                {/* Monitor */}
                <div className="absolute top-0 left-1/2 w-4/5 -translate-x-1/2 aspect-video bg-black rounded-lg border border-gray-700 shadow-lg flex">
                  <div className="flex-1 p-4 relative">
                    <div className="absolute inset-0 bg-gray-800 rounded border border-gray-700">
                      <div className="flex items-center bg-gray-900 px-2 py-1 border-b border-gray-700">
                        <div className="flex gap-2">
                          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                        <span className="mx-auto text-gray-400 text-xs font-mono">john@workspace</span>
                      </div>
                      <div className="p-3 text-xs font-mono text-purple-400">
                        <pre>
{`          _____  
         /     \\   john@dev-workspace
        | () () |  ------------------
         \\  ^  /   OS: DevOS v4.2.0
          |||||    Host: ThinkPad X1 Carbon
          |||||    Kernel: 5.15.0-dev
                   Uptime: 45 days, 17 hours
                   Languages: JS, Python, Go
                   Editor: VSCode / Neovim
                   Frameworks: React, TailwindCSS`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desk */}
              <div className="absolute -bottom-8 w-full h-40 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 border border-gray-600 rounded-lg" />

              {/* Sticky Notes */}
              <div className="absolute top-16 left-10 w-12 h-12 bg-yellow-200 rounded rotate-[-15deg] p-1 text-[0.5rem] font-bold text-gray-900">
                Fix navbar
              </div>
              <div className="absolute top-32 left-28 w-12 h-12 bg-blue-200 rounded rotate-[10deg] p-1 text-[0.5rem] font-bold text-gray-900">
                Dark mode?
              </div>

              {/* Coffee Cup */}
              <div className="absolute -bottom-4 right-6 w-12 h-16">
                <div className="relative w-full h-full">
                  {/* Cup Base */}
                  <div className="absolute bottom-0 w-full h-10 bg-stone-700 rounded-b-xl shadow-inner" />
                  {/* Cup Top / Coffee Liquid */}
                  <div className="absolute bottom-10 w-full h-7 bg-stone-500 rounded-t-xl overflow-hidden shadow-sm">
                    <div className="absolute inset-1 bg-gradient-to-b from-amber-700 to-amber-900 rounded" />
                  </div>
                  {/* Handle Shine */}
                  <div className="absolute left-2 top-2 w-6 h-1 bg-white/20 rounded-full" />
                  {/* Steam Animation */}
                  <div className="absolute left-4 -top-4 flex flex-col gap-1">
                    <span className="w-1 h-4 bg-white/30 rounded-full animate-steam1" />
                    <span className="w-1 h-4 bg-white/20 rounded-full animate-steam2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="relative h-16 bg-purple-900/50 backdrop-blur-sm overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap animate-marquee px-6">
          {[...techStack, ...techStack].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;

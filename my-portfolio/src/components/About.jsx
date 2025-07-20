import React from "react";
import programmerImg from "../assets/dp.jpg";
// import coffeeImg from "../assets/coffee.png";

const techStack = [
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Express",
];

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="py-20 bg-black text-white relative">
        <div className="absolute inset-0 bg-hero opacity-[.03] pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Image */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/40 animate-pulse blur-3xl"></div>
              <img
                src={programmerImg}
                alt="Programmer"
                className="rounded-full w-64 h-64 object-cover border-4 border-purple-600 shadow-2xl z-10"
              />
              <div className="absolute top-0 left-0 w-64 h-64 rounded-full border-4 border-purple-500 animate-spin-slow z-0"></div>
            </div>

            {/* Right: About Text */}
            <div className="max-w-xl space-y-6">
              <h2 className="text-4xl font-extrabold text-purple-400">About Me</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I’m a passionate full-stack developer skilled in building beautiful, functional, and responsive web applications. I love writing clean code and constantly learning new technologies to stay updated in this fast-paced industry.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Tech Stack:</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  {techStack.map((tech, index) => (
                    <li
                      key={index}
                      className="px-3 py-2 bg-gray-800 rounded-md hover:bg-purple-600 hover:text-white transition"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-[#0f0f0f] border-y border-gray-800 relative">
        <div className="absolute inset-0 bg-hero opacity-[.03] pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center text-white">
          <div className="mb-12">
            <h2 className="text-5xl font-extrabold text-purple-400">Let’s have a coffee</h2>
            <p className="text-gray-400 mt-4">
              If you like my work and want to discuss opportunities, let's talk over coffee!
            </p>
          </div>

          {/* <img
            src={coffeeImg}
            alt="Coffee Cup"
            className="mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 animate-bounce drop-shadow-xl"
          /> */}

          <div className="mt-8 flex justify-center gap-6">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              Hire Me
            </button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Let's Connect
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

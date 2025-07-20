import React from "react";
import pizzaImg from "../assets/project1.jpg";
import weatherImg from "../assets/project2.jpg";
import qrImg from "../assets/project3.jpg";

const projects = [
  {
    id: 1,
    title: "Pizza Ordering App",
    description:
      "A fully responsive pizza ordering app with cart, filters, and checkout functionality using React and Tailwind CSS.",
    image: pizzaImg,
    tech: ["HTML5", "CSS3", "JAVASCRIPT"],
    github: "https://github.com/pratyasha-debug/Pizza-hub.git",
    live: "http://cheesy-pizza-shop.netlify.app",
    icon: "fas fa-pizza-slice",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Get real-time weather updates using OpenWeatherMap API. Built with React and styled in a dark purple theme.",
    image: weatherImg, // <-- Make sure this image exists in your assets folder
    tech: ["React", "OpenWeatherMap API", "TailwindCSS"],
    github: "#",
    live: "#",
    icon: "fas fa-cloud-sun text-purple-500",
  },
  {
    id: 3,
    title: "QR Code Generator",
    description:
      "Instantly generate QR codes from text or URLs using React and the QRCode library. Responsive and easy to use.",
    image: qrImg, // <-- Make sure this image exists in your assets folder
    tech: ["React", "QRCode", "TailwindCSS"],
    github: "#",
    live: "#",
    icon: "fas fa-qrcode text-purple-500",
  }
  
 
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-purple-900 via-black to-purple-950 text-white px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-purple-400 inline-block pb-2">
          🚀 My Projects
        </h2>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-black/60 rounded-2xl border border-purple-700 shadow-lg hover:shadow-purple-500/50 p-6 transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-5 brightness-110 hover:brightness-125 transition-all"
            />

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3 text-purple-300 flex items-center gap-2">
              <i className={`${project.icon} text-purple-400 text-xl`}></i>
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-purple-100 mb-4 leading-relaxed tracking-wide">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-5">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-purple-800 text-purple-200 border border-purple-400 px-3 py-1 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 text-purple-200 flex items-center gap-1 transition-all"
              >
                <i className="fab fa-github text-lg"></i> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 text-purple-200 flex items-center gap-1 transition-all"
              >
                <i className="fas fa-external-link-alt text-lg"></i> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

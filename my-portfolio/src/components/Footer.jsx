import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#0f0a1c] py-16 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-hero opacity-[0.03]" />

        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding & Socials */}
          <div className="space-y-6 md:col-span-1">
            <h3 className="flex items-center gap-3">
              <i className="fas fa-code text-purple-400 text-3xl animate-pulse" />
              <span className="text-2xl font-bold text-white font-mono">Pratyasha Priyadarshini</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Building the future with clean code, creativity, and a passion for innovation.
            </p>
            <div className="flex gap-5">
              {["github", "linkedin", "twitter", "dev"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-300 hover:text-purple-400 text-xl transition-transform transform hover:scale-110"
                >
                  <i className={`fab fa-${platform}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-mono text-white mb-6 flex items-center gap-2">
              <i className="fas fa-link text-purple-400" /> Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About", icon: "user" },
                { label: "Projects", icon: "code" },
                { label: "Services", icon: "gear" },
                { label: "Pricing", icon: "dollar-sign" },
                { label: "Blogs", icon: "book" },
                { label: "Contact", icon: "envelope" },
              ].map(({ label, icon }) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2"
                  >
                    <i className={`fas fa-${icon} text-sm`} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold font-mono text-white mb-6 flex items-center gap-2">
              <i className="fas fa-envelope text-purple-400" /> Newsletter
            </h3>
            <p className="text-gray-300 mb-4">Stay updated with my latest projects and tech insights.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2 bg-purple-500 text-gray-900 font-bold rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
              >
                <i className="fas fa-paper-plane" /> Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center px-6 text-sm text-gray-300 gap-3">
          <p>
            © {year} Pratyasha Priyadarshini. Crafted with{" "}
            <i className="fas fa-heart text-purple-400 mx-1" /> and{" "}
            <i className="fas fa-coffee text-purple-400 mx-1" />.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        id="back-to-top"
        title="Back to Top"
        className="fixed bottom-6 right-6 bg-gray-800 border border-purple-600 size-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7 7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'bg-gray-950/95 backdrop-blur-sm border-gray-800' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <FaCode className="text-teal-400 text-2xl animate-pulse" />
          <span className="text-xl font-bold text-white font-mono">Pratyasha Priyadarshini</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-teal-400 relative group font-medium transition"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-300 hover:text-teal-400 transition">
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {open && (
          <div className="absolute top-full left-0 right-0 bg-gray-950 border-b border-gray-800 p-6 flex flex-col items-center gap-4 shadow-md md:hidden animate-slide-down">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-teal-400 font-medium transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

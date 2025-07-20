import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setError("");
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#100322] via-[#0d011a] to-[#070011] text-white relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-2 relative inline-block">
            Get in <span className="text-purple-400">Touch</span>
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-purple-500 opacity-70" />
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to chat about code? Drop me a message, and let’s make things happen!
          </p>
        </div>

        {/* Contact Form + Info */}
        <div className="bg-[#1c152b] bg-opacity-90 backdrop-blur-md p-8 rounded-lg border border-purple-900 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <i className="fas fa-envelope text-purple-400" /> Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full py-3 px-4 bg-[#2a203f] border border-purple-700 rounded-lg text-gray-200 focus:outline-none focus:border-purple-400"
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full py-3 px-4 bg-[#2a203f] border border-purple-700 rounded-lg text-gray-200 focus:outline-none focus:border-purple-400"
                  placeholder="Your Email"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full py-3 px-4 bg-[#2a203f] border border-purple-700 rounded-lg text-gray-200 focus:outline-none focus:border-purple-400"
                  placeholder="Your Message"
                ></textarea>
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
              >
                <i className="fas fa-paper-plane" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {success && <p className="text-purple-400 text-center mt-4">Message sent successfully!</p>}
              {error && <p className="text-red-400 text-center mt-4">{error}</p>}
            </form>
          </div>

          {/* Info + Socials */}
          <div className="space-y-10">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <i className="fas fa-user-circle text-purple-400" />
                Contact Info
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <i className="fas fa-envelope text-purple-400" />
                  <a href="mailto:john@devworkspace.com" className="hover:text-purple-400">john@devworkspace.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-phone-alt text-purple-400" />
                  <a href="tel:+1234567890" className="hover:text-purple-400">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-purple-400" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <i className="fas fa-share-alt text-purple-400" />
                Connect with Me
              </h3>
              <div className="flex gap-6">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-purple-400 text-2xl">
                  <i className="fab fa-github" />
                </a>
                <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-purple-400 text-2xl">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-purple-400 text-2xl">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://dev.to/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-purple-400 text-2xl">
                  <i className="fab fa-dev" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coffee Cup */}
      <div className="absolute bottom-10 right-10 w-14 h-16">
        <div className="absolute -right-4 top-6 h-8 w-8 border-4 border-gray-700 rounded-r-full"></div>
        <div className="absolute bottom-0 w-full h-10 bg-gray-700 rounded-b-lg"></div>
        <div className="absolute bottom-8 w-full h-8 bg-gray-600 rounded-lg">
          <div className="absolute inset-1 rounded-lg bg-gradient-to-b from-amber-700 to-amber-900"></div>
        </div>
        <div className="absolute w-6 h-1 bg-white/20 left-3 top-3"></div>

        {/* Steam */}
        <div className="absolute w-1.5 h-4 bg-white bg-opacity-30 left-4 -top-2 animate-pulse"></div>
        <div className="absolute w-1.5 h-4 bg-white bg-opacity-30 left-6 -top-4 animate-pulse delay-100"></div>
        <div className="absolute w-1.5 h-4 bg-white bg-opacity-30 left-8 -top-3 animate-pulse delay-200"></div>
        <div className="absolute left-2 bottom-3 text-[8px] tracking-widest text-gray-400">COFFEE</div>
      </div>
    </section>
  );
};

export default Contact;

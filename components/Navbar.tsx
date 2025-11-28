"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "features", "testimonials", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of section visible
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = ["home", "features", "testimonials", "contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="mx-auto max-w-7xl px-10 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">AutoBotWa</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative capitalize transition group ${
                activeSection === item ? "text-black font-semibold" : "text-gray-600"
              }`}
            >
              {item}

              {/* Underline Animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                  activeSection === item ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:inline-flex bg-black text-white px-5 py-2 rounded-lg hover:bg-blue-900 transition">
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center cursor-pointer"
        >
          <span className={`w-full h-0.5 bg-black transition ${isOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`w-full h-0.5 bg-black transition ${isOpen ? "opacity-0" : ""}`}/>
          <span className={`w-full h-0.5 bg-black transition ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-b overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              className={`capitalize transition ${
                activeSection === item ? "text-black font-semibold" : "text-gray-600"
              }`}
            >
              {item}
            </a>
          ))}

          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

"use client";
import { useState } from "react";
 

const navLinks = ["Home", "Stats", "Clients", "Accredian Edge", "CAT", "How It Works", "FAQs", "Testimonials"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const sectionMap = {
    Home: "hero",
    Stats: "stats",
    Clients: "clients",
    "Accredian Edge": "edge",
    CAT: "cat",
    "How It Works": "how-it-works",
    FAQs: "faq",
    Testimonials: "testimonials",
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#1a73e8]">accredian</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(sectionMap[link])}
                className="text-sm text-gray-600 hover:text-[#1a73e8] font-medium transition-colors whitespace-nowrap"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Enquire Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => setEnquireOpen(true)}
              className="bg-[#1a73e8] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#1557b0] transition-colors"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(sectionMap[link])}
              className="block w-full text-left py-3 text-sm text-gray-600 hover:text-[#1a73e8] border-b border-gray-50"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => { setEnquireOpen(true); setMenuOpen(false); }}
            className="mt-4 w-full bg-[#1a73e8] text-white py-2.5 rounded-md text-sm font-semibold"
          >
            Enquire Now
          </button>
        </div>
      )}
    </nav>
  );
}
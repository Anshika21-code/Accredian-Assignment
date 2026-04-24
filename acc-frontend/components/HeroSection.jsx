"use client";
import { useState } from "react";
import EnquireModal from "./EnquireModal";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="hero" className="pt-16 min-h-[520px] bg-gradient-to-br from-[#e8f0fe] via-white to-[#f0f7ff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 z-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0D1B2A] leading-tight mb-4">
            Next-Gen Expertise <br />
            <span className="text-[#1a73e8]">For Your Enterprise</span>
          </h1>
          <p className="text-gray-500 text-lg mb-6 max-w-md">
            Cultivate high-performance teams through expert learning.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Tailored Solutions", "Industry Insights", "Expert Guidance"].map((f) => (
              <span
                key={f}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-700 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#1a73e8] inline-block"></span>
                {f}
              </span>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="bg-[#1a73e8] text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-[#1557b0] transition-colors shadow-md"
          >
            Enquire Now
          </button>
        </div>

        {/* Right Image Placeholder */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md h-72 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a73e8]/10 to-[#1a73e8]/5 flex items-center justify-center border border-[#1a73e8]/10">
            {/* Decorative circles */}
            <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-[#1a73e8]/10"></div>
            <div className="absolute bottom-12 left-8 w-16 h-16 rounded-full bg-[#1a73e8]/15"></div>
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-3">👩‍💼</div>
              <p className="text-sm">Enterprise Professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a73e8]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

      {open && <EnquireModal onClose={() => setOpen(false)} />}
    </section>
  );
}
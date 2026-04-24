"use client";
import { useState } from "react";
import EnquireModal from "./EnquireModal";

export default function CTABanner() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-12 bg-[#1a73e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-1">Want to Learn More About Our Training Solutions?</h2>
            <p className="text-white/70 text-sm">Get Expert Guidance for Your Team&apos;s Success!</p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="bg-white text-[#1a73e8] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap shadow-md"
          >
            Contact Us →
          </button>
        </div>
      </div>
      {open && <EnquireModal onClose={() => setOpen(false)} />}
    </section>
  );
}
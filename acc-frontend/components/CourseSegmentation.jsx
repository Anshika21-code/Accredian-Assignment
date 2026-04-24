"use client";
import { useState } from "react";

const tabs = [
  {
    label: "Program Specific",
    subtitle: "Certificate, Executive, Post Graduate Certificate",
    desc: "Curated programs mapped to your career trajectory and organizational goals.",
    emoji: "🎓",
  },
  {
    label: "Industry Specific",
    subtitle: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    desc: "Sector-focused training that addresses real-world industry challenges.",
    emoji: "🏭",
  },
  {
    label: "Topic Specific",
    subtitle: "Machine Learning, Design, Analytics, Cloud, Community",
    desc: "Deep-dive courses on cutting-edge topics shaping the future.",
    emoji: "📚",
  },
  {
    label: "Level Specific",
    subtitle: "Senior Leadership, Mid Career, Professionals",
    desc: "Tailored content for every stage of the professional journey.",
    emoji: "📊",
  },
];

export default function CourseSegmentation() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A]">Tailored Course Segmentation</h2>
          <p className="text-gray-400 mt-2 text-sm">Explore Custom-Fit Courses Designed to Address Every Professional Force</p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                active === i
                  ? "bg-[#1a73e8] text-white border-[#1a73e8] shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#1a73e8]/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-[#e8f0fe] to-white p-10 rounded-2xl border border-[#1a73e8]/10">
          <div className="text-6xl mb-5">{tabs[active].emoji}</div>
          <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">{tabs[active].label}</h3>
          <p className="text-[#1a73e8] text-sm font-medium mb-4">{tabs[active].subtitle}</p>
          <p className="text-gray-500 text-sm leading-relaxed">{tabs[active].desc}</p>
        </div>
      </div>
    </section>
  );
}
"use client";
import { useState } from "react";

const testimonials = [
  {
    company: "Bayer",
    logo: "🌿",
    quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing valuable support and high-quality service every step of the way.",
  },
  {
    company: "HCL Technologies",
    logo: "💙",
    quote: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from their courses is immense & their support team is always there to help our employees.",
  },
  {
    company: "IBM",
    logo: "🔷",
    quote: "The programs are highly structured and deliver real business impact. Our teams have shown measurable growth in both technical and leadership capabilities.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A]">
            Testimonials from <span className="text-[#1a73e8]">Our Partners</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">What Our Clients Are Saying</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((t, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{t.logo}</span>
                  <span className="font-bold text-[#0D1B2A]">{t.company}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed italic">&quot;{t.quote}&quot;</p>
              </div>
            ))}
          </div>

          {/* Third centered */}
          <div className="mt-6 max-w-lg mx-auto bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{testimonials[2].logo}</span>
              <span className="font-bold text-[#0D1B2A]">{testimonials[2].company}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed italic">&quot;{testimonials[2].quote}&quot;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
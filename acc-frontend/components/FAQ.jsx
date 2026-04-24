"use client";
import { useState } from "react";

const tabs = ["About the Course", "About the Delivery", "Miscellaneous"];

const faqs = {
  "About the Course": [
    { q: "What types of corporate training programs does Accredian offer?", a: "Accredian offers a wide range of programs including leadership development, Gen-AI mastery, data analytics, product management, and domain-specific training tailored to enterprise needs." },
    { q: "What domain specializations are available?", a: "We cover Product & Innovation, Gen-AI, Leadership, Tech & Data, Operations Excellence, Digital Enterprise, and Fintech Innovation Lab." },
    { q: "Can programs be customized for our company?", a: "Yes! Every program is fully customizable based on your organization's skill gaps, goals, and industry context." },
  ],
  "About the Delivery": [
    { q: "What delivery modes are available?", a: "We offer online, offline, and hybrid modes of delivery depending on your team size and location preferences." },
    { q: "How long are the training programs?", a: "Programs range from intensive 2-day workshops to multi-month learning journeys, based on depth and objectives." },
  ],
  "Miscellaneous": [
    { q: "Do you provide completion certificates?", a: "Yes, all participants receive industry-recognized certificates upon successful program completion." },
    { q: "How do I get started?", a: "Simply fill out our Enquire Now form and our enterprise team will connect with you within 24 hours." },
  ],
};

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("About the Course");
 const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A]">
            Frequently Asked <span className="text-[#1a73e8]">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Sidebar */}
          <div className="lg:w-1/4 flex flex-row lg:flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setOpenIndex(null); }}
                className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-all ${
                  activeTab === tab
                    ? "bg-[#1a73e8] text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#1a73e8]/40"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="lg:w-3/4 space-y-3">
            {faqs[activeTab].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-sm font-medium text-[#0D1B2A] hover:bg-gray-50"
                >
                  {faq.q}
                  <span className={`text-[#1a73e8] text-xl transition-transform ${openIndex === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <button className="bg-[#1a73e8] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#1557b0] transition-colors">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
const steps = [
  {
    num: "1",
    icon: "🔍",
    title: "Skill Gap Analysis",
    desc: "Assess current skills and map development needs.",
  },
  {
    num: "2",
    icon: "📋",
    title: "Customized Training Plan",
    desc: "Create tailored roadmaps aligned with organizational goals.",
  },
  {
    num: "3",
    icon: "🚀",
    title: "Flexible Program Delivery",
    desc: "Deliver adaptive programs aligned with industry and organizational needs.",
  },
];

export default function HowWeDeliver() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A]">
            How We <span className="text-[#1a73e8]">Deliver Results</span> That Matter?
          </h2>
          <p className="text-gray-400 mt-2 text-sm">A Structured Three-Step Approach to Skill Development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gray-200 z-0"></div>

          {steps.map((step, i) => (
            <div key={step.num} className="text-center relative z-10">
              <div className="relative inline-block mb-5">
                <div className="w-20 h-20 rounded-full bg-[#e8f0fe] border-2 border-[#1a73e8]/30 flex items-center justify-center text-3xl mx-auto">
                  {step.icon}
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#1a73e8] text-white text-xs font-bold flex items-center justify-center">
                  {step.num}
                </span>
              </div>
              <h3 className="font-bold text-[#0D1B2A] mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
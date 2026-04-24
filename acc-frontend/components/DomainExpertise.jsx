const domains = [
  { icon: "💡", title: "Product & Innovation Hub" },
  { icon: "🤖", title: "Gen-AI Mastery" },
  { icon: "👑", title: "Leadership Elevation" },
  { icon: "📊", title: "Tech & Data Insights" },
  { icon: "⚙️", title: "Operations Excellence" },
  { icon: "🌐", title: "Digital Enterprise" },
  { icon: "💳", title: "Fintech Innovation Lab" },
];

export default function DomainExpertise() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A]">Our Domain Expertise</h2>
          <p className="text-gray-400 mt-2 text-sm">Specialized Programs Designed to Fuel Innovation</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {domains.map((d) => (
            <div
              key={d.title}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#1a73e8]/30 hover:shadow-lg transition-all group text-center cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{d.icon}</div>
              <p className="text-sm font-medium text-[#0D1B2A] leading-snug">{d.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
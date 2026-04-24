const features = [
  { icon: "🎯", title: "Tailored Solutions", desc: "Programs aligned to your organization's goals and challenges." },
  { icon: "🏗️", title: "Innovative Framework", desc: "Proprietary framework for impactful, application-driven results." },
  { icon: "🌐", title: "Diverse Offerings", desc: "Covering programs across industries, all levels and emerging fields." },
  { icon: "🚚", title: "Flexible Delivery", desc: "Online and offline options tailored to your needs." },
  { icon: "💡", title: "Expert Guidance", desc: "Learn from industry leaders with real-world success." },
  { icon: "🤖", title: "Advanced Technology", desc: "Cutting-edge tech for seamless learning experiences." },
  { icon: "📈", title: "Proven Impact", desc: "Trusted by leading organizations for measurable ROI." },
];

export default function AccredianEdge() {
  return (
    <section id="edge" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A]">The Accredian Edge</h2>
          <p className="text-gray-400 mt-2 text-sm">Key Aspects of Our Strategic Training</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-gray-100 hover:border-[#1a73e8]/30 hover:shadow-lg transition-all group text-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="font-semibold text-[#0D1B2A] mb-2 text-sm">{f.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
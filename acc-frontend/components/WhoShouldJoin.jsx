const audience = [
  { icon: "💻", title: "Tech Professionals", desc: "Enhance expertise, embrace tech, drive innovation." },
  { icon: "📋", title: "Non-Tech Professionals", desc: "Adapt digitally, collaborate in tech environments." },
  { icon: "🚀", title: "Emerging Professionals", desc: "Develop your skills for rapid career growth." },
  { icon: "🏆", title: "Senior Professionals", desc: "Strengthen leadership, enhance strategic decisions." },
];

export default function WhoShouldJoin() {
  return (
    <section className="py-16 bg-[#1a73e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left */}
          <div className="lg:w-1/3 text-white">
            <p className="text-sm uppercase tracking-wider mb-2 opacity-80">Who Should Join?</p>
            <h2 className="text-3xl font-bold leading-tight">Strategic Skill Enhancement</h2>
          </div>

          {/* Right: Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {audience.map((a) => (
              <div
                key={a.title}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className="text-white font-semibold mb-1">{a.title}</h3>
                <p className="text-white/70 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
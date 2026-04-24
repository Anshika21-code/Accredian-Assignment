const pillars = [
  {
    letter: "C",
    title: "Concept",
    desc: "Foundational knowledge for deep subject understanding.",
    color: "bg-[#1a73e8]",
  },
  {
    letter: "A",
    title: "Application",
    desc: "Practical implementation through real-world scenarios.",
    color: "bg-[#0D1B2A]",
  },
  {
    letter: "T",
    title: "Tools",
    desc: "Resources and techniques for effective skill mastery.",
    color: "bg-[#1a73e8]",
  },
];

export default function CATFramework() {
  return (
    <section id="cat" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A]">
            The <span className="text-[#1a73e8]">CAT</span> Framework
          </h2>
          <p className="text-gray-400 mt-2 text-sm">Our Proven Approach to Learning Excellence</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-0">
          {pillars.map((p, i) => (
            <div key={p.letter} className="flex items-center">
              <div className={`${p.color} text-white rounded-full w-52 h-52 flex flex-col items-center justify-center text-center p-6 shadow-xl`}>
                <div className="text-4xl font-black mb-2">{p.letter}</div>
                <div className="font-bold text-lg mb-1">{p.title}</div>
                <div className="text-xs opacity-80 leading-snug">{p.desc}</div>
              </div>
              {i < pillars.length - 1 && (
                <div className="hidden md:block w-12 h-0.5 bg-gray-300 -mx-2 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
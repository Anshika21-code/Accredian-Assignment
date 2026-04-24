export default function TrackRecord() {
  const stats = [
    { value: "10K+", label: "Professionals Trained For Exceptional Career Success" },
    { value: "200+", label: "Sessions Delivered With Guaranteed Learning Excellence" },
    { value: "5K+", label: "Active Learners Engaged In Dynamic Courses" },
  ];

  return (
    <section id="stats" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A]">Our Track Record</h2>
          <p className="text-gray-400 mt-2 text-sm">The Numbers Behind Our Success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="text-center p-8 rounded-2xl border border-gray-100 hover:border-[#1a73e8]/30 hover:shadow-lg transition-all group"
            >
              <div className="text-5xl font-extrabold text-[#1a73e8] mb-3 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
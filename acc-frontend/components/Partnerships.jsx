export default function Partnerships() {
  const partners = ["Reliance", "HCL", "IBM", "DLF", "ADP", "Bayer"];

  return (
    <section id="clients" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A]">Our Proven Partnerships</h2>
          <p className="text-gray-400 mt-2 text-sm">Successful Collaborations With the Industry&apos;s Best</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((p) => (
            <div
              key={p}
              className="bg-white px-8 py-4 rounded-xl border border-gray-200 hover:border-[#1a73e8]/40 hover:shadow-md transition-all flex items-center justify-center min-w-[120px]"
            >
              <span className="text-gray-700 font-bold text-lg tracking-wide">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-[#1a73e8] mb-3">accredian</div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              A brand of Fullstack Education Pvt Ltd. Empowering enterprises with next-gen learning.
            </p>
            <div className="flex gap-4">
              {["f", "t", "in", "yt"].map((s) => (
                <span key={s} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs cursor-pointer hover:bg-[#1a73e8] transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Accredian Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Accredian</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["Home", "Blog", "Who Accredian"].map((l) => (
                <li key={l} className="hover:text-white cursor-pointer transition-colors">{l}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 enterprise@accredian.com</li>
              <li>📍 4th Floor, 250, Phase VI, Udyog Vihar, Sector 18, Gurugram, Haryana</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-xs">
          © 2024 Accredian A Brand of Fullstack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
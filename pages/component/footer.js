import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111]  px-10 text-white pt-16">
      {/* Top Call to Action */}
      <div className="bg-yellow-400 rounded-lg px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between max-w-7xl mx-auto mb-16 space-y-6 md:space-y-0">
        <h2 className="text-2xl text-black sm:text-3xl md:text-4xl font-bold max-w-md">
          Clean your space today.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="https://dfb70h20znm.typeform.com/to/FJRHJGQw" passHref>
            <button className="bg-[#4F46E5] text-white font-semibold text-lg px-6 py-3 rounded-md w-full sm:w-auto">
              Get Started <span>→</span>
            </button>
          </Link>
          <a
            href="tel:+447780056787"
            className="bg-[#4F46E5] text-white font-semibold text-lg px-6 py-3 rounded-md text-center w-full sm:w-auto"
          >
            Call us: +447780056787
          </a>
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 pb-12 text-sm">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#4F46E5] p-2 rounded-md" />
            <div className="text-2xl font-semibold">
              <img className="logo_img w-20 h-auto" src="./lg.jpeg" alt="Logo" />
            </div>
          </div>
          <p className="text-gray-300">
           Experience top-notch cleaning services that cater to residential
                and commercial needs. We do not cut corners, we clean them!
          </p>
        </div>

        {/* Empty columns for links if needed later */}
        <div></div>
        <div></div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <a href="mailto:Klinvault@gmail.com">Klinvault@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <a href="tel:+447780056787">+447780056787</a>
          </div>
          <div className="flex items-start gap-2">
            <span>📍</span>
            <address>
              44 Perry Villa Drive,<br />Birmingham B42 2LQ.
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center text-sm text-gray-400 py-4 px-4">
        Designed by{" "}
        <span className="text-yellow-400 font-semibold">Juwoncaleb</span>, Powered by{" "}
        <span className="text-yellow-400 font-semibold">Webflow</span>
      </div>
    </footer>
  );
}

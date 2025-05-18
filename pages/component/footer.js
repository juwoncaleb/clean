export default function Footer() {
    return (
      <footer className="bg-[#111] text-white pt-16">
        {/* Top Call to Action */}
        <div className="bg-yellow-400 subt rounded-lg px-6 py-10 md:flex items-center justify-between max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0">
            Claim your free first Cleaning today.
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-[#4F46E5] text-white font-semibold text-lg px-6 py-3 rounded-md flex items-center gap-2">
              Claim free visit <span>→</span>
            </button>
            <a
              href="tel:+13944955993"
              className="bg-[#4F46E5] text-white font-semibold text-lg px-6 py-3 rounded-md text-center"
            >
              Call us: +1-394-495-5993
            </a>
          </div>
        </div>
  
        {/* Footer Main */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 pb-12 text-sm">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#4F46E5] p-2 rounded-md">
                <span className="text-2xl">🧼</span>
              </div>
              <span className="text-lg font-semibold">Cleaninger</span>
            </div>
            <p className="text-gray-300">
              We handle repairs & maintenance for all appliances with expertise & efficiency to ensure your appliances.
            </p>
          </div>
  
          {/* Links 1 */}
          <div>
            <ul className="space-y-2">
              <li className="text-yellow-400 font-semibold">Home</li>
              <li>Home 2</li>
              <li>About</li>
              <li>Services</li>
              <li>Service Static</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
  
          {/* Links 2 */}
          <div>
            <ul className="space-y-2">
              <li>Style Guide</li>
              <li>Instructions</li>
              <li>Changelog</li>
              <li>Licenses</li>
              <li>Link in Bio</li>
              <li>Coming Soon</li>
              <li>Password Protected</li>
              <li>Error 404</li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <a href="mailto:info@example.com">info@example.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+12345678901">+1 (234) 567-8901</a>
            </div>
            <div className="flex items-start gap-2">
              <span>📍</span>
              <address>
                544 Honey Creek Rd. <br />
                West Des Moines, IA 50265
              </address>
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 text-center text-sm text-gray-400 py-4">
          Designed by <span className="text-yellow-400 font-semibold">Webestica</span>, Powered by <span className="text-yellow-400 font-semibold">Webflow</span>
        </div>
      </footer>
    );
  }
  
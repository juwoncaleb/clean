import Link from "next/link";
import { useState, useEffect } from "react";

const FixedHeader = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-[#1E1E1E] text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <img className="h-10 w-auto" src="./lg.jpeg" alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="./" className="hover:text-yellow-500">Home</a>
          <a href="services" className="hover:text-yellow-500">Services</a>
          <a href="about" className="hover:text-yellow-500">About</a>
          <a href="contact" className="hover:text-yellow-500">Contact</a>
          <Link href="https://dfb70h20znm.typeform.com/to/FJRHJGQw" target="_blank">
            <button className="bg-[#FED00E] text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 transition">
              Get Quote
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1E1E1E] text-white px-6 py-4 space-y-4">
          <a href="/" className="block hover:text-yellow-500">Home</a>
          <a href="services" className="block hover:text-yellow-500">Services</a>
          <a href="about" className="block hover:text-yellow-500">About</a>
          <a href="contact" className="block hover:text-yellow-500">Contact</a>
          <Link href="https://dfb70h20znm.typeform.com/to/FJRHJGQw" target="_blank">
            <button className="w-full bg-[#FED00E] text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-400 transition">
              Get Quote
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default FixedHeader;

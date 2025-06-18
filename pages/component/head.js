import Link from "next/link";
import { useState, useEffect } from "react";

const Headdy = () => {
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
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <img className="h-10 w-auto" src="./lb.jpg" alt="logo" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/">
            <p className="text-base hover:text-yellow-500 cursor-pointer">Home</p>
          </Link>
          <Link href="/services">
            <p className="text-base hover:text-yellow-500 cursor-pointer">Services</p>
          </Link>
          <Link href="/about">
            <p className="text-base hover:text-yellow-500 cursor-pointer">About</p>
          </Link>
          <Link href="/contact">
          </Link>
          <Link href="https://form.typeform.com/to/JyULUUAU" target="_blank">
            <button className="bg-[#FED00E] text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 transition">
              Get Quote
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
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
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-black">
          <Link href="/">
            <p className="block hover:text-yellow-500">Home</p>
          </Link>
          <Link href="/services">
            <p className="block hover:text-yellow-500">Services</p>
          </Link>
          <Link href="/about">
            <p className="block hover:text-yellow-500">About</p>
          </Link>
          <Link href="/contact">
          </Link>
          <Link href="https://form.typeform.com/to/JyULUUAU" target="_blank">
            <button className="w-full bg-[#FED00E] text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-400 transition">
              Get Quote
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Headdy;

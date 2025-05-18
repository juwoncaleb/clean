import { useState, useEffect } from 'react';

const FixedHeader = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50 ${
        scrolling ? 'bg-[#1E1E1E] text-white' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">CleaningCo</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-base hover:text-yellow-500">Home</a>
          <a href="#services" className="text-base hover:text-yellow-500">Services</a>
          <a href="#about" className="text-base hover:text-yellow-500">About</a>
          <a href="#contact" className="text-base hover:text-yellow-500">Contact</a>
        </nav>

        {/* Get Quote Button */}
        <div className="hidden md:block">
          <button
            className="bg-[#FED00E] text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FixedHeader;

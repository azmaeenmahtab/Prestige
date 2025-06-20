import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faRotate } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo-removebg-preview.png'

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDownOpenProducts, setIsDropDownOpenProducts] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 w-full z-50 backdrop-blur bg-[#101010] transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center max-w-[1280px] mx-auto py-[20px] px-[10px]">
        {/* Left: Logo */}
        <div className="flex gap-[4px] items-center">
          <img
            src={logo}
            className="w-[22px] h-[20px] mb-[4px]"
            alt=""
          />
          <p className="text-white font-medium text-[16px]">Prestige</p>
        </div>

        {/* Center: Links */}
        <div className="flex gap-[20px] items-center justify-center">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropDownOpenProducts(true)}
            onMouseLeave={() => setIsDropDownOpenProducts(false)}
          >
            <a
              href="#"
              className="text-[#718096] font-medium text-[16px] transition-colors hover:text-white"
            >
              Product
            </a>
            {isDropDownOpenProducts && (
              <div className="absolute w-[370px] bg-[#1a202c] p-6 py-5 rounded-[8px] top-[25px] left-0 z-50">
                <ul className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <li
                      key={i}
                      className="flex gap-4 items-center group cursor-pointer"
                    >
                      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512"
  className="w-[34px] p-[10px] bg-gray-600 rounded-[5px] border border-transparent group-hover:bg-teal-400/30 group-hover:border-teal-400"
>
  <path
    fill="currentColor"
    className="text-[#9b9da1] group-hover:text-white"
    d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
/>
</svg>

                      <div className="text-[#718096]">
                        <h3 className="text-[16px] group-hover:text-teal-400">
                          Profile Management
                        </h3>
                        <p className="text-[14px]">Personalize Experience for each user.</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Pages dropdown */}
          <div
            className="flex gap-2 items-center justify-center cursor-pointer relative group"
            onMouseEnter={() => setIsDropDownOpen(true)}
            onMouseLeave={() => setIsDropDownOpen(false)}
          >
            <a href="#" className="text-[#718096] font-medium text-[16px] hover:text-white">
              Pages
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className={`w-[14px] h-[14px] fill-[#718096] transition-transform duration-200 ${
                isDropDownOpen ? 'rotate-180 fill-white' : ''
              }`}
            >
              <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
            {isDropDownOpen && (
              <div className="absolute z-50 flex gap-[100px] w-[550px] bg-[#1a202c] p-[40px] rounded-[8px] top-[25px] left-0">
                <div>
                  <ul className="space-y-4">
                    <li className="text-white font-semibold">Product</li>
                    <li><a href="#" className="text-[#718096] hover:text-white">Pricing</a></li>
                    <li><a href="#" className="text-[#718096] hover:text-white">Features</a></li>
                    <li><a href="#" className="text-[#718096] hover:text-white">Integrations</a></li>
                    <li><a href="#" className="text-[#718096] hover:text-white">Changelog</a></li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li className="text-white font-semibold">Company</li>
                    <li><a href="#" className="text-[#718096] hover:text-white">About</a></li>
                    <li><a href="#" className="text-[#718096] hover:text-white">Blog</a></li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li className="text-white font-semibold">Resources</li>
                    <li><a href="#" className="text-[#718096] hover:text-white">FAQ</a></li>
                    <li><a href="#" className="text-[#718096] hover:text-white">Contact</a></li>
                    <li><a href="#" className="text-[#718096] hover:text-white">Terms of service</a></li>
                    <li><a href="#" className="text-[#718096] hover:text-white">Privacy policy</a></li>
                    <li><a href="#" className="text-[#718096] hover:text-white">404</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* More nav items */}
          <a href="#" className="text-[#718096] font-medium text-[16px] hover:text-white">
            Integrations
          </a>
          <a href="#" className="text-[#718096] font-medium text-[16px] hover:text-white">
            Blog
          </a>
          <a href="#" className="text-[#718096] font-medium text-[16px] hover:text-white">
            Pricing
          </a>
        </div>

        {/* Right: Buttons */}
        <div className="flex gap-[16px] pr-[8px]">
          <button className="text-white font-semibold text-[16px]">Log In</button>
          <button className="text-white cursor-pointer font-semibold text-[16px] border-gray-500/40 border px-[14px] py-[8px] rounded-[40px] hover:bg-gray-800/80">
            Get Started
          </button>
        </div>
      </div>

      {/* Optional separator line */}
      <div className="w-screen border-t-[1px] border-gray-500/40"></div>
      
    </div>
    
  );
};

export default Navbar;

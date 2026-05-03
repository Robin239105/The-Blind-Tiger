import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import OrderModal from './OrderForm/OrderModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', path: '/menu' },
    { name: 'Bar', path: '/bar' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'Find Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md border-gold/25 py-2.5' 
            : 'bg-black border-gold/10 py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 border-2 border-gold rounded-full flex items-center justify-center group-hover:bg-gold transition-colors duration-300 overflow-hidden bg-white/5 p-1">
              <img 
                src="https://scontent.xx.fbcdn.net/v/t39.30808-6/242250106_10158498522340325_6485966465435422452_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fO7jUqK5H98Q7kNvgE-V7vO&_nc_ht=scontent.xx&oh=00_AYAbXvH5Z2hG2vJpZlS7G-S_zR7hZkL3u9pG7G9PzB_Uyg&oe=663B5D3D" 
                alt="The Blind Tiger Logo - Cajun & Creole Saloon" 
                className="w-full h-full object-contain filter brightness-110 contrast-125"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span style={{display: 'none'}} className="font-playfair italic text-2xl text-gold group-hover:text-black font-bold">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-xl tracking-wide uppercase">The Blind Tiger</span>
              <span className="font-josefin text-[10px] text-gold uppercase tracking-[0.2em]">Est. 1992 · Shreveport, LA</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`nav-link text-sm ${isActive(link.path) ? 'text-gold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <button aria-label="Toggle Menu" 
              onClick={() => setIsOrderModalOpen(true)}
              className="btn-ghost py-2 px-4 text-xs border-opacity-50 hover:border-opacity-100"
            >
              Order Online
            </button>
          </div>

          {/* Mobile Toggle */}
          <button aria-label="Toggle Menu" 
            className="md:hidden text-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-deep border-b border-gold/20 flex flex-col p-4 gap-4 md:hidden"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`nav-link text-base ${isActive(link.path) ? 'text-gold' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <button aria-label="Toggle Menu" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsOrderModalOpen(true);
                }}
                className="btn-gold text-center py-2.5"
              >
                Order Online
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </>
  );
};

export default Navbar;


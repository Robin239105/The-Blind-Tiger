import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep border-t border-gold/25 pt-16 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
          {/* Left: Logo */}
          <div>
            <Link to="/" className="font-playfair text-3xl tracking-tight text-white mb-6 inline-block">
              The Blind Tiger
            </Link>
            <p className="font-josefin text-dim text-sm max-w-xs leading-relaxed">
              Serving Shreveport's best Cajun & Creole soul since 1992.
            </p>
          </div>

          {/* Center: Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-josefin text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-2">Navigation</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">
              <Link to="/menu" className="nav-link text-xs">Menu</Link>
              <Link to="/bar" className="nav-link text-xs">Bar</Link>
              <Link to="/about" className="nav-link text-xs">About</Link>
              <Link to="/events" className="nav-link text-xs">Events</Link>
              <Link to="/contact" className="nav-link text-xs">Contact</Link>
            </div>
          </div>

          {/* Right: Copyright */}
          <div className="md:text-right">
             <h4 className="font-josefin text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4">Connect</h4>
             <div className="flex md:justify-end gap-6 mb-4">
               <a href="tel:+13182268747" className="text-muted hover:text-gold transition-colors"><Phone size={20} /></a>
               <a href="mailto:info@blindtigerrestaurant.com" className="text-muted hover:text-gold transition-colors"><Mail size={20} /></a>
               <a href="https://maps.google.com/?q=120+Texas+St+Shreveport+LA+71101" target="_blank" className="text-muted hover:text-gold transition-colors"><MapPin size={20} /></a>
             </div>
             <p className="text-dim text-[10px] uppercase tracking-widest">
               &copy; {new Date().getFullYear()} The Blind Tiger. All Rights Reserved.
             </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dim text-xs font-josefin tracking-wider text-center md:text-left">
            120 Texas St, Shreveport, LA 71101 &nbsp; · &nbsp; Phone: +1 (318) 226-8747
          </p>
          <div className="flex gap-4">
            <span className="text-[10px] text-muted uppercase tracking-tighter">
              Web Design by <a href="https://alaminrobin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Al Amin Robin</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

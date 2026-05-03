import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Check, X, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          
          {/* Left Panel: Info */}
          <div className="w-full md:w-1/2">
            <span className="text-gold uppercase tracking-[0.3em] font-josefin text-xs font-semibold mb-3 block">Find Us</span>
            <h1 className="text-4xl sm:text-6xl font-playfair mb-12">Come On In</h1>

            <div className="space-y-8 md:space-y-12">
              {/* Address */}
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-deep border border-gold/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl mb-2">Location</h3>
                  <p className="text-muted font-josefin mb-4">120 Texas St, Shreveport, LA 71101</p>
                  <a 
                    href="https://maps.google.com/?q=120+Texas+St+Shreveport+LA+71101" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:text-gold-light transition-colors"
                  >
                    Open in Google Maps <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-deep border border-gold/20 flex items-center justify-center shrink-0">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl mb-2">Phone</h3>
                  <p className="text-muted font-josefin">+1 (318) 226-8747</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-deep border border-gold/20 flex items-center justify-center shrink-0">
                  <Clock className="text-gold" size={20} />
                </div>
                <div className="w-full">
                  <h3 className="font-playfair text-xl mb-4">Hours</h3>
                  <div className="space-y-3 max-w-sm">
                    {[
                      { day: 'Monday – Friday', hours: '11:00 AM – 10:00 PM' },
                      { day: 'Saturday', hours: '11:00 AM – 11:00 PM' },
                      { day: 'Sunday', hours: '12:00 PM – 9:00 PM' },
                    ].map((row, i) => (
                      <div key={row.day} className="flex justify-between border-b border-gold/10 pb-2">
                        <span className="text-muted font-josefin text-sm">{row.day}</span>
                        <span className="text-cream font-josefin text-sm">{row.hours}</span>
                      </div>
                    ))}
                    <div className="pt-2">
                       <span className="text-gold text-xs uppercase tracking-widest font-bold">Happy Hour: Mon–Fri 4–7 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 pt-4 border-t border-gold/10">
                {[
                  { label: 'Dine-In', status: true },
                  { label: 'Takeout Available', status: true },
                  { label: 'Online Ordering', status: true },
                  { label: 'Reservations Required', status: false },
                  { label: 'Walk-ins Welcome', status: true },
                  { label: 'Wheelchair Accessible', status: true },
                  { label: 'Kids Menu Available', status: true },
                  { label: 'Full Bar Selection', status: true },
                ].map((item, i) => (
                  <div key={row.day} className="flex items-center gap-3">
                    {item.status ? <Check className="text-gold" size={16} /> : <X className="text-rust" size={16} />}
                    <span className="text-muted font-josefin text-sm tracking-wide">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Map */}
          <div className="w-full md:w-1/2 h-[350px] sm:h-[450px] md:h-auto">
             <div className="w-full h-full border border-gold/10 relative overflow-hidden group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.8385317768564!2d-93.7508006!3d32.5135246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86312cd60f38c37d%3A0x6d987627a6948574!2s120%20Texas%20St%2C%20Shreveport%2C%20LA%2071101!5e0!3m2!1sen!2sus!4v1714700000000!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Blind Tiger Location"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

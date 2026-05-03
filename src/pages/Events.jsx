import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Phone, ArrowRight } from 'lucide-react';

const Events = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black"
    >
      {/* Hero */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-[40vh] relative flex items-center justify-center overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1200" 
              alt="Events Background" 
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-6xl md:text-8xl font-playfair mb-4"
              >
                Events & Sports
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-gold italic text-lg font-josefin uppercase tracking-[0.2em]"
              >
                Every game. Every week. Downtown Shreveport's home base.
              </motion.p>
            </div>
          </motion.div>

      {/* Sports Viewing */}
      <section className="py-16 px-4 md:py-24 md:px-6 bg-deep">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="text-gold" size={32} />
              <h2 className="text-3xl sm:text-4xl font-playfair">Sports Viewing</h2>
            </div>
            <p className="text-muted text-lg leading-relaxed font-josefin mb-10">
              We keep every major sport live on our screens — NFL, NBA, MLB, college football, and more. Walk in on game day, grab a cold one, and cheer loud.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {['NFL', 'NBA', 'MLB', 'NCAA FB', 'UFC', 'Soccer'].map((sport, i) => (
                <div key={i} className="bg-black/40 border border-gold/10 p-4 text-center rounded-sm group hover:border-gold/50 transition-all">
                  <span className="font-josefin uppercase tracking-widest text-xs font-bold text-muted group-hover:text-gold transition-colors">{sport}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] border border-gold/10 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800" 
              alt="Sports on TV" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="text-center p-8 bg-black/60 backdrop-blur-sm border border-gold/20 relative z-10 transition-all duration-500 group-hover:border-gold/50 group-hover:bg-black/80">
                 <h3 className="font-playfair italic text-2xl text-gold-light mb-4">"Best atmosphere for the big game."</h3>
                 <p className="text-muted text-[10px] uppercase tracking-widest font-josefin font-semibold">— Shreveport Sports Fans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Specials */}
      <section className="py-16 px-4 md:py-24 md:px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair mb-4">Weekly Specials</h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { day: 'Monday', title: 'Red Beans & Rice', detail: 'A true Louisiana tradition. Plus our daily Happy Hour specials.', icon: <Calendar /> },
              { day: 'Tuesday – Friday', title: 'Happy Hour 4–7pm', detail: 'The best deal in downtown. Specials on drafts, well drinks, and appetizers.', icon: <Calendar /> },
              { day: 'Weekends', title: 'Game Day Specials', detail: 'We stay open late for all the major games. Cold beer and hot food all night.', icon: <Trophy /> },
            ].map((event, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="p-10 border border-gold/5 bg-deep/20 hover:border-gold/30 transition-all flex flex-col h-full cursor-pointer group"
              >
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">{event.icon}</div>
                <h4 className="font-josefin uppercase tracking-widest text-xs font-bold text-gold-light mb-2">{event.day}</h4>
                <h3 className="font-playfair text-2xl mb-4 group-hover:text-gold transition-colors">{event.title}</h3>
                <p className="text-muted italic text-sm font-josefin leading-relaxed flex-grow">{event.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-16 px-4 md:py-24 md:px-6 bg-rust">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-white mb-8 leading-tight">Host Your Event at <br />The Blind Tiger</h2>
          <p className="text-white/90 text-lg font-josefin mb-12 leading-relaxed">
            Birthdays, work parties, game day groups — we accommodate groups of all sizes. Call us directly to discuss your event and customized catering options.
          </p>
          <a href="tel:+13182268747" className="inline-flex items-center gap-4 bg-white text-rust px-10 py-5 font-josefin font-bold uppercase tracking-widest hover:bg-cream transition-colors group">
            <Phone size={20} />
            <span>Call to Enquire → +1 (318) 226-8747</span>
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Events;

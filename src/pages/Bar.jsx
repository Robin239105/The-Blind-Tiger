import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Beer, GlassWater, Trophy } from 'lucide-react';

const Bar = () => {
  const cocktails = [
    { name: 'Bayou Bloody Mary', desc: 'House-infused with Cajun trinity + Zing Zang. Shreveport\'s best.', price: '$10', badge: 'House Signature' },
    { name: 'French Quarter Mule', desc: 'Moscow Mule with a Louisiana kick. Ginger, lime, house spice.', price: '$11' },
    { name: 'Old Fashioned', desc: 'Bourbon, bitters, orange twist. Timeless.', price: '$12' },
    { name: 'Bourbon Street Sling', desc: 'Bourbon, peach, lemon, ginger beer', price: '$12' },
    { name: 'Swamp Water', desc: 'Midori, pineapple, coconut rum — tropical and dangerous', price: '$11' },
    { name: 'Hurricane', desc: 'Dark and light rum, passion fruit, OJ, grenadine', price: '$13', badge: 'Strong' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black text-cream"
    >
      {/* Hero */}
      <section className="h-[50vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1200" 
          alt="Bar Counter" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-playfair mb-6"
          >
            The Bar
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gold-light italic text-xl font-josefin tracking-wide uppercase"
          >
            Great cocktails. Cold beer. Sports on every screen.
          </motion.p>
        </div>
      </section>

      {/* Signature Cocktails */}
      <section className="py-16 px-4 md:py-24 md:px-6 bg-black">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-playfair mb-4">Signature Cocktails</h2>
            <div className="w-20 h-1 bg-gold" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cocktails.map((drink, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-deep/50 p-8 border border-gold/10 hover:border-gold/30 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-playfair group-hover:text-gold transition-colors">{drink.name}</h3>
                  <span className="text-gold font-josefin font-semibold">{drink.price}</span>
                </div>
                {drink.badge && <span className="badge mb-4 inline-block">{drink.badge}</span>}
                <p className="text-muted italic text-sm leading-relaxed">{drink.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beer & Wine Grid */}
      <section className="py-16 px-4 md:py-24 md:px-6 bg-deep border-y border-gold/5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Beer */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Beer className="text-gold" size={32} />
              <h2 className="text-4xl font-playfair">Beer on Tap</h2>
            </div>
            <p className="text-muted italic mb-10 font-josefin">
              We take pride in our selection. From local Louisiana craft brews to the national classics, we've got something cold for everyone.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gold/10 pb-2">
                <span className="font-josefin uppercase tracking-widest text-sm">Local Craft Rotators</span>
                <span className="text-gold">MKT</span>
              </div>
              <div className="flex justify-between border-b border-gold/10 pb-2">
                <span className="font-josefin uppercase tracking-widest text-sm">Abita Amber / Purple Haze</span>
                <span className="text-gold">$6</span>
              </div>
              <div className="flex justify-between border-b border-gold/10 pb-2">
                <span className="font-josefin uppercase tracking-widest text-sm">Cajun Piney Rotator</span>
                <span className="text-gold">$7</span>
              </div>
              <div className="flex justify-between border-b border-gold/10 pb-2">
                <span className="font-josefin uppercase tracking-widest text-sm">Domestic Favorites</span>
                <span className="text-gold">$5</span>
              </div>
            </div>
            <p className="mt-8 text-gold-light text-xs uppercase tracking-tighter font-semibold">
              * Ask your server for today's full tap list
            </p>
          </div>

          {/* Wine */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <GlassWater className="text-gold" size={32} />
              <h2 className="text-4xl font-playfair">Wine</h2>
            </div>
            <p className="text-muted italic mb-10 font-josefin">
              A curated selection of house and premium wines to pair with your blackened favorites.
            </p>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-playfair text-xl">House Red</h4>
                  <p className="text-xs text-muted uppercase tracking-widest">Cabernet / Merlot</p>
                </div>
                <span className="text-gold font-josefin">$8 Glass / $28 Btl</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-playfair text-xl">House White</h4>
                  <p className="text-xs text-muted uppercase tracking-widest">Chardonnay / Pinot Grigio</p>
                </div>
                <span className="text-gold font-josefin">$8 Glass / $28 Btl</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-playfair text-xl">House Rosé</h4>
                  <p className="text-xs text-muted uppercase tracking-widest">Crisp & Dry</p>
                </div>
                <span className="text-gold font-josefin">$9 Glass / $32 Btl</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Hour Banner */}
      <section className="bg-rust py-12 px-4 md:py-16 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <span className="text-white/80 uppercase tracking-widest text-xs font-semibold font-josefin mb-4 block">Weekdays Only</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-white mb-4">Happy Hour is calling.</h2>
            <p className="text-white/90 font-josefin text-xl uppercase tracking-wider">Monday – Friday · 4:00 PM – 7:00 PM</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['$2 Off All Drafts', 'Half-Price Appetizers', 'Well Drinks $5'].map((pill, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-white font-josefin uppercase tracking-widest text-xs font-semibold whitespace-nowrap">
                {pill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Bar Info */}
      <section className="py-16 px-4 md:py-24 md:px-6 bg-black relative">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex justify-center mb-8">
             <Tv className="text-gold" size={48} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-8 italic">Never Miss a Game</h2>
          <p className="text-xl text-muted leading-relaxed font-josefin mb-16">
            With multiple high-definition screens throughout the bar area, The Blind Tiger is downtown Shreveport's home for sports. Whether it's NFL Sunday, NBA Playoffs, or the big fight, we've got you covered.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Trophy />, label: 'Live Sports' },
              { icon: <Beer />, label: 'Walk-ins Welcome' },
              { icon: <GlassWater />, label: 'Full Bar' },
              { icon: <Beer />, label: 'Happy Hour' },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border border-gold/20 flex items-center justify-center text-gold bg-deep/30 rounded-full transition-transform hover:scale-110">
                  {feature.icon}
                </div>
                <span className="font-josefin uppercase tracking-widest text-[10px] text-muted font-bold">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Bar;

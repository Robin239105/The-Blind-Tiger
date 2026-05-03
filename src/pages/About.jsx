import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Zap, Clock, Users } from 'lucide-react';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black"
    >
      {/* Hero */}
      <section className="h-[40vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 diagonal-texture opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-playfair mb-4"
          >
            Our Story
          </motion.h1>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-4 md:py-24 md:px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative h-[600px] w-full overflow-hidden border border-gold/10">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800" 
              alt="Restaurant Interior" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-8 border border-gold/20 flex flex-col justify-center items-center text-center p-8 bg-black/60 backdrop-blur-sm">
               <span className="font-playfair text-gold italic text-3xl mb-4">"The Heart of Shreveport"</span>
               <p className="text-muted text-xs uppercase tracking-widest font-josefin">Downtown Institution since 1992</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-10 leading-tight">Born on Texas Street, <br /><span className="text-gold italic">1992</span></h2>
            <div className="space-y-6 text-muted font-josefin text-lg leading-relaxed">
              <p>
                The Blind Tiger opened its doors in 1992 in the heart of downtown Shreveport, Louisiana — right on historic Texas Street. What started as a neighborhood saloon has grown into one of the city's most beloved dining and drinking institutions.
              </p>
              <p>
                For over three decades, we've served Shreveport's take on authentic Cajun and Creole cuisine. Our talented chefs use only fresh ingredients, preparing each dish with care, attention, and a generous hand with the spice.
              </p>
              <p>
                We're a place to eat, drink, watch the game, and feel at home. No pretension. No reservations required. Just good food and good company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Known For */}
      <section className="py-16 px-4 md:py-24 md:px-6 bg-deep">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair mb-4">What We're Known For</h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Anchor />, title: 'Blackened Seafood', desc: 'Our signature technique, seared hot on cast iron with our house Cajun rub' },
              { icon: <Zap />, title: 'Craft Cocktails', desc: 'From the famous Bayou Bloody Mary to the French Quarter Mule' },
              { icon: <Clock />, title: 'Happy Hour', desc: 'Mon–Fri 4–7pm. The best deal in downtown Shreveport' },
              { icon: <Users />, title: 'Sports Bar', desc: 'Every game, every screen. Walk in, find a seat, order a round' },
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gold/5 bg-black/20 hover:border-gold/20 transition-all text-center">
                <div className="text-gold mb-6 flex justify-center">{item.icon}</div>
                <h3 className="font-playfair text-xl mb-4">{item.title}</h3>
                <p className="text-sm text-muted italic font-josefin leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-black py-12 px-4 md:py-20 md:px-6 border-y border-gold/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Years Serving', value: '30+' },
              { label: 'Yelp Reviews', value: '728' },
              { label: 'Health Score', value: '99/100' },
              { label: 'Guests Welcomed', value: '47k+' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-gold text-3xl sm:text-4xl md:text-5xl font-playfair mb-2">{stat.value}</div>
                <div className="text-muted text-[10px] uppercase tracking-[0.3em] font-bold font-josefin">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Quote */}
      <section className="py-16 px-4 md:py-24 md:px-6 bg-texture bg-fixed">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="font-playfair text-3xl md:text-5xl italic leading-tight text-cream/90 mb-10">
            "Authentic Cajun food, I liked it sooo much. Reminds me of the taste of my hometown food."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-10 h-[1px] bg-gold" />
            <span className="font-josefin uppercase tracking-widest text-gold text-sm font-semibold">Google Reviews</span>
            <div className="w-10 h-[1px] bg-gold" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;

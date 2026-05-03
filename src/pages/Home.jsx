import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import InfoStrip from '../components/InfoStrip';
import { Star, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black overflow-hidden"
    >
      {/* Section 1: Hero */}
      <section className="min-h-screen flex flex-col md:flex-row items-center relative">
        <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-0 flex flex-col md:flex-row items-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="w-full md:w-3/5 z-10"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-gold uppercase tracking-[0.3em] font-josefin text-xs font-semibold">Cajun & Creole · Downtown Shreveport</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-8xl font-playfair mb-8 leading-[1.1]">
              Wild Flavors. <br />
              <span className="text-gold italic">Real Soul.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-muted italic text-lg md:text-xl mb-10 max-w-xl font-playfair leading-relaxed">
              Blackened seafood, Cajun classics, and craft cocktails — served in the heart of Louisiana since 1992.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link to="/menu" className="btn-gold flex items-center gap-2">
                View Menu
              </Link>
              <Link to="/contact" className="btn-ghost">
                Get Directions
              </Link>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="absolute bottom-10 left-6 hidden md:flex items-center gap-4"
            >
              <div className="w-0.5 h-12 bg-gold/30 relative overflow-hidden">
                <motion.div 
                  animate={{ y: [0, 48] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-1/2 bg-gold"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted vertical-text">Scroll to explore</span>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full md:w-2/5 h-[400px] md:h-[600px] mt-12 md:mt-0 relative overflow-hidden rounded-sm border border-gold/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800" 
              alt="Fried Popcorn CrawTails served with Cajun tartar sauce" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-4 border border-gold/20 flex items-center justify-center p-8 text-center bg-black/40 backdrop-blur-[2px]">
              <span className="font-playfair text-gold-light italic text-2xl drop-shadow-lg">Serving the best <br /> since '92</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Info Strip */}
      <InfoStrip />

      {/* Section 3: Menu Highlights */}
      <section className="py-16 px-4 md:py-24 md:px-6 bg-deep">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-widest text-xs font-semibold font-josefin mb-3 block">From the Kitchen</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair">The Menu</h2>
          </div>

          <motion.div 
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {[
              { name: 'Popcorn CrawTails', price: '$12', badge: "Chef's Pick", desc: 'Fried to golden perfection, served with Cajun tartar sauce' },
              { name: 'Bayou Crab Cakes', price: '$15', badge: null, desc: 'Deep-fried crab cakes, Louisiana coastal flavors' },
              { name: 'Voodoo Shrimp', price: '$14', badge: 'Fan Fav', desc: '6 jumbo shrimp, fried and glazed in our secret house sauce' },
              { name: 'Blackened Catfish', price: '$18', badge: null, desc: 'Signature spice rub seared on cast iron' },
              { name: 'Cajun Sampler', price: '$22', badge: null, desc: 'Meat pies, shrimp étouffée, crawfish étouffée' },
              { name: 'Signature Gumbo', price: '$13', badge: null, desc: "Rich dark roux, slow-cooked depth, Shreveport's best bowl" },
            ].map((item, i) => (
              <motion.div 
                key={item.name} 
                variants={fadeInUp}
                className="bg-warm/30 p-8 border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-playfair group-hover:text-gold transition-colors">{item.name}</h3>
                  <span className="text-gold font-josefin font-semibold">{item.price}</span>
                </div>
                {item.badge && <span className="badge mb-4 inline-block">{item.badge}</span>}
                <p className="text-muted italic text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <Link to="/menu" className="btn-ghost py-3 px-10">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Section 4: About Teaser */}
      <section className="py-16 px-4 md:py-24 md:px-6 bg-black relative">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative h-[500px] w-full order-2 md:order-1 overflow-hidden border border-gold/10">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" 
              alt="Interior view of The Blind Tiger historic bar atmosphere in Shreveport" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            <div className="absolute -top-10 -left-10 md:-left-20 text-gold/10 font-playfair text-[200px] select-none pointer-events-none">1992</div>
            <div className="absolute inset-10 border border-gold/10 p-12 flex flex-col justify-end bg-black/20 backdrop-blur-[1px]">
              <span className="font-playfair text-gold-light italic text-xl">"Tradition in every bite."</span>
            </div>
          </div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-8">Four Decades of <br />Louisiana Soul</h2>
            <p className="text-muted text-lg mb-8 leading-relaxed font-josefin font-light">
              Tucked into a historic saloon on Texas Street, The Blind Tiger has been Shreveport's home for authentic Cajun and Creole cooking since 1992. Every dish is cooked to order, every cocktail poured with intent.
            </p>
            <div className="grid grid-cols-1 gap-6 mb-10">
              {[
                { label: '30+ Years Open', value: 'Since 1992' },
                { label: '728 Yelp Reviews', value: 'Local Favorite' },
                { label: '99 Health Score', value: 'Clean & Fresh' },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-gold pl-6">
                  <h4 className="font-playfair text-xl mb-1">{stat.label}</h4>
                  <span className="text-muted uppercase text-xs tracking-widest">{stat.value}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-gold inline-block">Our Story</Link>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Cocktail Spotlight */}
      <section className="py-16 px-4 md:py-24 md:px-6 bg-deep">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-widest text-xs font-semibold font-josefin mb-3 block">From the Bar</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair">Craft Cocktails</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'Bayou Bloody Mary', price: '$10', badge: 'House Signature', desc: "House-infused with the Cajun trinity (onion, celery, bell pepper) and Zing Zang mixer. Shreveport's best." },
              { name: 'French Quarter Mule', price: '$11', badge: null, desc: "NOLA twist on the Moscow Mule. Ginger, lime, Louisiana heat." },
              { name: 'Old Fashioned', price: '$12', badge: null, desc: "Bourbon, bitters, and a twist. Simple. Perfect." },
            ].map((drink) => (
              <div key={drink.name} className="bg-black/40 p-10 border border-gold/10 hover:border-gold/30 transition-all flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-playfair group-hover:text-gold transition-colors">{drink.name}</h3>
                  <span className="text-gold font-josefin font-semibold">{drink.price}</span>
                </div>
                {drink.badge && <span className="badge mb-6 inline-block w-fit">{drink.badge}</span>}
                <p className="text-muted italic text-sm leading-relaxed mb-8 flex-grow">{drink.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/bar" className="btn-ghost">See Full Bar Menu</Link>
          </div>
        </div>
      </section>

      {/* Section 6: Happy Hour Banner */}
      <section className="bg-rust py-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <span className="text-white/80 uppercase tracking-widest text-xs font-semibold font-josefin mb-4 block">Weekdays Only</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-white mb-4">Happy Hour is calling.</h2>
            <p className="text-white/90 font-josefin text-xl uppercase tracking-wider">Monday – Friday · 4:00 PM – 7:00 PM</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['$2 Off All Drafts', 'Half-Price Appetizers', 'Well Drinks $5'].map((pill) => (
              <div key={pill} className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-white font-josefin uppercase tracking-widest text-xs font-semibold whitespace-nowrap">
                {pill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Reviews */}
      <section className="py-16 px-4 md:py-24 md:px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-widest text-xs font-semibold font-josefin mb-3 block">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair">Real Reviews</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { text: "The crab cakes were amazing. My entree was the red beans and rice — the cornbread was delicious and the sausage had great flavor. Easy recommendation.", source: "Yelp" },
              { text: "Authentic Cajun food, I like it sooo much. Reminds me of my hometown. Good pork with pepper, spicy, smells great.", source: "Google" },
              { text: "I tried the Cajun sampler and loved it. First time in Shreveport and wanted authentic food. The Blind Tiger was an excellent choice.", source: "TripAdvisor" },
            ].map((review) => (
              <div key={review.source} className="flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#c9a84c" color="#c9a84c" />)}
                </div>
                <blockquote className="text-cream italic font-playfair text-lg leading-relaxed mb-6">
                  "{review.text}"
                </blockquote>
                <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-semibold">— {review.source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

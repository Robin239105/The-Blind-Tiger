import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

const Menu = () => {
  const { hash } = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    const decodedHash = decodeURIComponent(hash.replace("#", ""));
    return categories.includes(decodedHash) ? decodedHash : "Starters";
  });

  const categories = [
    'Starters', 'Seafood Mains', 'Burgers', 'Plates & Rice', 'Salads', 'Kids', 'Desserts', 'Drinks'
  ];

  const menuItems = {
    'Starters': [
      { name: 'Popcorn CrawTails', price: '$12', desc: 'Fried crawfish tails with Cajun tartar sauce', badge: "Chef's Pick" },
      { name: 'Bayou Crab Cakes', price: '$15', desc: 'Deep-fried Louisiana crab cakes' },
      { name: 'Voodoo Shrimp', price: '$14', desc: '6 jumbo shrimp in secret house glaze', badge: 'Fan Fav' },
      { name: 'Fried Mushrooms', price: '$9', desc: 'Battered, fried, served with ranch' },
      { name: 'Cajun Corn', price: '$7', desc: 'Grilled corn with Cajun butter and seasoning' },
    ],
    'Seafood Mains': [
      { name: 'Blackened Catfish', price: '$18', desc: 'Cast iron seared, Cajun spice rub', badge: 'Signature' },
      { name: 'Blackened Tilapia', price: '$17', desc: 'Light, flaky, boldly seasoned' },
      { name: 'Crispy Fried Shrimp', price: '$16', desc: 'Basket of golden fried Gulf shrimp' },
      { name: 'Blackened Shrimp Plate', price: '$18', desc: 'Blackened shrimp over dirty rice' },
      { name: 'Pecan-Crusted Catfish', price: '$20', desc: 'Southern pecan crust, perfectly spiced' },
      { name: 'Seafood Sampler', price: '$24', desc: 'Generous mixed plate of house seafood', badge: 'New' },
    ],
    'Burgers': [
      { name: 'Tiger Burger', price: '$13', desc: 'House seasoned beef patty, lettuce, tomato, onion, pickles, Tiger sauce' },
      { name: 'Blackened Chicken Burger', price: '$13', desc: 'Cajun blackened chicken breast on a brioche bun' },
    ],
    'Plates & Rice': [
      { name: 'Red Beans & Rice', price: '$12', desc: 'Louisiana classic with smoked sausage and cornbread' },
      { name: 'Cajun Sampler Plate', price: '$22', desc: 'Meat pies, shrimp étouffée, crawfish étouffée', badge: 'Best Value' },
      { name: 'Shrimp Étouffée', price: '$16', desc: 'Cajun shrimp in a rich butter roux over rice' },
      { name: 'Crawfish Étouffée', price: '$16', desc: 'Slow-simmered crawfish, Cajun butter sauce, white rice' },
      { name: 'Jambalaya', price: '$15', desc: 'Rice, sausage, shrimp, Cajun seasoning' },
      { name: 'Signature Gumbo', price: '$13', desc: 'Dark roux gumbo, served with rice', badge: 'Must Try' },
    ],
    'Salads': [
      { name: 'Louisiana Blackened Chicken Salad', price: '$14', desc: 'Blackened chicken over mixed greens, house dressing' },
      { name: 'Side Salad', price: '$5', desc: 'Fresh greens with choice of dressing' },
    ],
    'Kids': [
      { name: 'Kids Catfish & Fries', price: '$8', desc: 'Smaller portion of our signature catfish' },
      { name: 'Kids Burger & Fries', price: '$8', desc: 'Classic burger for the little tigers' },
      { name: 'Kids Mac & Cheese', price: '$7', desc: 'Creamy and delicious' },
    ],
    'Desserts': [
      { name: 'Bread Pudding with Whiskey Sauce', price: '$7', desc: 'Homemade and decadent' },
      { name: 'Pecan Pie', price: '$6', desc: 'A Southern staple' },
      { name: 'Bananas Foster', price: '$8', desc: 'Classic NOLA dessert' },
    ],
    'Drinks': [
      { name: 'Sweet Tea / Unsweet Tea', price: '$3', desc: 'Endless refills' },
      { name: 'Lemonade', price: '$3', desc: 'Freshly squeezed' },
      { name: 'Soft Drinks', price: '$3', desc: 'Coke products' },
      { name: 'Coffee', price: '$3', desc: 'Community Coffee roast' },
    ]
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const decodedHash = decodeURIComponent(hash);
    if (categories.includes(decodedHash)) {
      setActiveTab(decodedHash);
      const element = document.getElementById('menu-items');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleTabClick = (category) => {
    setActiveTab(category);
    window.location.hash = category;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-screen"
    >
      {/* Hero */}
      <section className="h-[40vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 diagonal-texture opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-7xl font-playfair mb-4"
          >
            Our Menu
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gold italic text-lg font-josefin"
          >
            Fresh ingredients. Bold Cajun flavors. Made to order.
          </motion.p>
        </div>
      </section>

      {/* Categories Tabs */}
      <div className="sticky top-20 bg-black/80 backdrop-blur-md z-40 border-y border-gold/10 overflow-x-auto">
        <div className="container mx-auto flex justify-center py-4 px-6 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabClick(cat)}
              className={`px-6 py-2 uppercase tracking-widest text-xs font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === cat ? 'text-gold border-b-2 border-gold' : 'text-muted hover:text-gold-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Content */}
      <section id="menu-items" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
          >
            {menuItems[activeTab].map((item, i) => (
              <div key={item.name} className="flex flex-col group">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-playfair group-hover:text-gold transition-colors">{item.name}</h3>
                  <div className="flex-grow border-b border-dotted border-gold/20 mx-4 h-0" />
                  <span className="text-gold font-josefin font-semibold">{item.price}</span>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-muted italic text-sm font-josefin leading-relaxed">{item.desc}</p>
                  {item.badge && <span className="badge shrink-0">{item.badge}</span>}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer Info Strip CTA */}
      <section className="bg-deep py-20 px-6 border-t border-gold/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-playfair mb-6 italic text-cream/80">Hosting an event or a large group?</h2>
          <p className="text-muted mb-10 max-w-xl mx-auto">We'd love to have you. Contact us directly to discuss platter options or seating for parties over 12.</p>
          <a href="/contact" className="btn-gold">Get in touch</a>
        </div>
      </section>
    </motion.div>
  );
};

export default Menu;

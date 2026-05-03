import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

const Menu = () => {
  const { hash } = useLocation();
  const categories = [
    'Starters', 'Seafood Mains', 'Burgers', 'Plates & Rice', 'Salads', 'Kids', 'Desserts', 'Drinks'
  ];

  const [activeTab, setActiveTab] = useState(() => {
    const decodedHash = decodeURIComponent(hash.replace("#", ""));
    return categories.includes(decodedHash) ? decodedHash : "Starters";
  });

  const menuItems = {
    'Starters': [
      { name: 'Popcorn CrawTails', price: '$12', desc: 'Fried crawfish tails with Cajun tartar sauce', badge: "Chef's Pick", img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400' },
      { name: 'Bayou Crab Cakes', price: '$15', desc: 'Deep-fried Louisiana crab cakes', img: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db76?auto=format&fit=crop&q=80&w=400' },
      { name: 'Voodoo Shrimp', price: '$14', desc: '6 jumbo shrimp in secret house glaze', badge: 'Fan Fav', img: 'https://images.unsplash.com/photo-1532347922424-c652d9b7208e?auto=format&fit=crop&q=80&w=400' },
      { name: 'Fried Mushrooms', price: '$9', desc: 'Battered, fried, served with ranch', img: 'https://images.unsplash.com/photo-1626202133292-e86576d9bb5d?auto=format&fit=crop&q=80&w=400' },
      { name: 'Cajun Corn', price: '$7', desc: 'Grilled corn with Cajun butter and seasoning', img: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400' },
    ],
    'Seafood Mains': [
      { name: 'Blackened Catfish', price: '$18', desc: 'Cast iron seared, Cajun spice rub', badge: 'Signature', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400' },
      { name: 'Blackened Tilapia', price: '$17', desc: 'Light, flaky, boldly seasoned', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=400' },
      { name: 'Crispy Fried Shrimp', price: '$16', desc: 'Basket of golden fried Gulf shrimp', img: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?auto=format&fit=crop&q=80&w=400' },
      { name: 'Blackened Shrimp Plate', price: '$18', desc: 'Blackened shrimp over dirty rice', img: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=400' },
      { name: 'Pecan-Crusted Catfish', price: '$20', desc: 'Southern pecan crust, perfectly spiced', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400' },
      { name: 'Seafood Sampler', price: '$24', desc: 'Generous mixed plate of house seafood', badge: 'New', img: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc3a2?auto=format&fit=crop&q=80&w=400' },
    ],
    'Burgers': [
      { name: 'Tiger Burger', price: '$13', desc: 'House seasoned beef patty, lettuce, tomato, onion, pickles, Tiger sauce', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400' },
      { name: 'Blackened Chicken Burger', price: '$13', desc: 'Cajun blackened chicken breast on a brioche bun', img: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?auto=format&fit=crop&q=80&w=400' },
    ],
    'Plates & Rice': [
      { name: 'Red Beans & Rice', price: '$12', desc: 'Louisiana classic with smoked sausage and cornbread', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400' },
      { name: 'Cajun Sampler Plate', price: '$22', desc: 'Meat pies, shrimp étouffée, crawfish étouffée', badge: 'Best Value', img: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=400' },
      { name: 'Shrimp Étouffée', price: '$16', desc: 'Cajun shrimp in a rich butter roux over rice', img: 'https://images.unsplash.com/photo-1563245332-61198427993a?auto=format&fit=crop&q=80&w=400' },
      { name: 'Crawfish Étouffée', price: '$16', desc: 'Slow-simmered crawfish, Cajun butter sauce, white rice', img: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd679?auto=format&fit=crop&q=80&w=400' },
      { name: 'Jambalaya', price: '$15', desc: 'Rice, sausage, shrimp, Cajun seasoning', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400' },
      { name: 'Signature Gumbo', price: '$13', desc: 'Dark roux gumbo, served with rice', badge: 'Must Try', img: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db76?auto=format&fit=crop&q=80&w=400' },
    ],
    'Salads': [
      { name: 'Louisiana Blackened Chicken Salad', price: '$14', desc: 'Blackened chicken over mixed greens, house dressing', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400' },
      { name: 'Side Salad', price: '$5', desc: 'Fresh greens with choice of dressing', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400' },
    ],
    'Kids': [
      { name: 'Kids Catfish & Fries', price: '$8', desc: 'Smaller portion of our signature catfish', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400' },
      { name: 'Kids Burger & Fries', price: '$8', desc: 'Classic burger for the little tigers', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400' },
      { name: 'Kids Mac & Cheese', price: '$7', desc: 'Creamy and delicious', img: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=400' },
    ],
    'Desserts': [
      { name: 'Bread Pudding with Whiskey Sauce', price: '$7', desc: 'Homemade and decadent', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' },
      { name: 'Pecan Pie', price: '$6', desc: 'A Southern staple', img: 'https://images.unsplash.com/photo-1621535622393-27c950c26622?auto=format&fit=crop&q=80&w=400' },
      { name: 'Bananas Foster', price: '$8', desc: 'Classic NOLA dessert', img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400' },
    ],
    'Drinks': [
      { name: 'Sweet Tea / Unsweet Tea', price: '$3', desc: 'Endless refills', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=400' },
      { name: 'Lemonade', price: '$3', desc: 'Freshly squeezed', img: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=400' },
      { name: 'Soft Drinks', price: '$3', desc: 'Coke products', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400' },
      { name: 'Coffee', price: '$3', desc: 'Community Coffee roast', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400' },
    ]
  };

  useEffect(() => {
    const currentHash = window.location.hash.replace('#', '');
    const decodedHash = decodeURIComponent(currentHash);
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
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-playfair mb-4"
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
      <section id="menu-items" className="py-16 px-4 md:py-24 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {menuItems[activeTab].map((item) => (
              <div key={item.name} className="flex flex-col sm:flex-row gap-6 p-4 bg-deep/20 border border-gold/5 hover:border-gold/20 transition-all group rounded-sm">
                <div className="w-full sm:w-32 h-32 shrink-0 overflow-hidden rounded-sm border border-gold/10 bg-warm/10">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-playfair group-hover:text-gold transition-colors">{item.name}</h3>
                    <div className="flex-grow border-b border-dotted border-gold/20 mx-4 h-0" />
                    <span className="text-gold font-josefin font-semibold">{item.price}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-muted italic text-sm font-josefin leading-relaxed">{item.desc}</p>
                    {item.badge && <span className="badge shrink-0 w-fit">{item.badge}</span>}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer Info Strip CTA */}
      <section className="bg-deep py-12 px-4 md:py-20 md:px-6 border-t border-gold/10">
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, ShoppingBag, User, CreditCard, CheckCircle } from 'lucide-react';

const OrderModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    items: [],
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'card'
  });

  const menuItems = [
    { id: 1, name: 'Popcorn CrawTails', price: 12 },
    { id: 2, name: 'Bayou Crab Cakes', price: 15 },
    { id: 3, name: 'Voodoo Shrimp', price: 14 },
    { id: 4, name: 'Blackened Catfish', price: 18 },
    { id: 5, name: 'Signature Gumbo', price: 13 },
  ];

  const toggleItem = (item) => {
    setFormData(prev => {
      const exists = prev.items.find(i => i.id === item.id);
      if (exists) {
        return { ...prev, items: prev.items.filter(i => i.id !== item.id) };
      }
      return { ...prev, items: [...prev.items, item] };
    });
  };

  const total = formData.items.reduce((sum, item) => sum + item.price, 0);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-3 sm:p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-deep border border-gold/20 w-full max-w-2xl overflow-hidden rounded-sm"
        >
          {/* Header */}
          <div className="p-3 sm:p-4 sm:p-6 border-b border-gold/10 flex justify-between items-center bg-black/40">
            <div>
              <h2 className="text-xl sm:text-2xl font-playfair text-gold">Order Online</h2>
              <p className="text-[10px] text-muted uppercase tracking-widest font-josefin">Step {step} of 4</p>
            </div>
            <button onClick={onClose} className="text-muted hover:text-gold transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-gold/10 w-full">
            <motion.div 
              initial={{ width: '0%' }}
              animate={{ width: `${(step / 4) * 100}%` }}
              className="h-full bg-gold"
            />
          </div>

          {/* Content */}
          <div className="p-3 sm:p-4 sm:p-8 min-h-[300px] sm:min-h-[400px] max-h-[60vh] overflow-y-auto">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="flex items-center gap-3 mb-6">
                  <ShoppingBag className="text-gold" size={20} />
                  <h3 className="text-lg sm:text-xl font-playfair">Select Your Favorites</h3>
                </div>
                <div className="space-y-3">
                  {menuItems.map(item => (
                    <div 
                      key={item.id}
                      onClick={() => toggleItem(item)}
                      className={`p-3 sm:p-4 border transition-all cursor-pointer flex justify-between items-center ${
                        formData.items.find(i => i.id === item.id) 
                          ? 'border-gold bg-gold/5' 
                          : 'border-gold/10 hover:border-gold/30 bg-black/20'
                      }`}
                    >
                      <span className="font-josefin uppercase tracking-wide">{item.name}</span>
                      <span className="text-gold">${item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="flex items-center gap-3 mb-6">
                  <User className="text-gold" size={20} />
                  <h3 className="text-lg sm:text-xl font-playfair">Your Details</h3>
                </div>
                <div className="space-y-4">
                  <input 
                    type="text" placeholder="Full Name" 
                    className="w-full bg-black/40 border border-gold/20 p-3 sm:p-4 font-josefin focus:outline-none focus:border-gold text-cream"
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="email" placeholder="Email Address" 
                    className="w-full bg-black/40 border border-gold/20 p-3 sm:p-4 font-josefin focus:outline-none focus:border-gold text-cream"
                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                  <input 
                    type="tel" placeholder="Phone Number" 
                    className="w-full bg-black/40 border border-gold/20 p-3 sm:p-4 font-josefin focus:outline-none focus:border-gold text-cream"
                    value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="text-gold" size={20} />
                  <h3 className="text-lg sm:text-xl font-playfair">Review & Payment</h3>
                </div>
                <div className="bg-black/40 p-3 sm:p-4 sm:p-6 border border-gold/10 mb-6">
                  <h4 className="text-xs text-gold uppercase tracking-[0.2em] mb-4">Your Order</h4>
                  {formData.items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm mb-2 font-josefin italic">
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                    </div>
                  ))}
                  <div className="border-t border-gold/20 mt-4 pt-4 flex justify-between font-bold text-lg text-gold">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>
                <div className="flex gap-3 sm:p-4">
                  <button 
                    onClick={() => setFormData({...formData, paymentMethod: 'card'})}
                    className={`flex-1 p-3 sm:p-4 border font-josefin uppercase tracking-widest text-xs ${formData.paymentMethod === 'card' ? 'border-gold bg-gold/10' : 'border-gold/10'}`}
                  >
                    Credit Card
                  </button>
                  <button 
                    onClick={() => setFormData({...formData, paymentMethod: 'cash'})}
                    className={`flex-1 p-3 sm:p-4 border font-josefin uppercase tracking-widest text-xs ${formData.paymentMethod === 'cash' ? 'border-gold bg-gold/10' : 'border-gold/10'}`}
                  >
                    Pay at Pickup
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle className="text-gold mb-6" size={64} />
                <h3 className="text-3xl font-playfair mb-4">Order Received!</h3>
                <p className="text-muted font-josefin leading-relaxed max-w-sm">
                  Thank you for choosing The Blind Tiger, {formData.name.split(' ')[0]}. Your order is being prepared for **Takeaway** and will be ready for pickup in 20 minutes.
                </p>
                <button 
                  onClick={onClose}
                  className="mt-10 btn-gold px-12"
                >
                  Done
                </button>
              </motion.div>
            )}
          </div>

          {/* Footer Navigation */}
          {step < 4 && (
            <div className="p-3 sm:p-4 sm:p-6 border-t border-gold/10 bg-black/40 flex justify-between">
              <button 
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center gap-2 font-josefin uppercase tracking-widest text-xs ${step === 1 ? 'opacity-0' : 'text-muted hover:text-gold'}`}
              >
                <ChevronLeft size={16} /> Back
              </button>
              <button 
                onClick={nextStep}
                disabled={step === 1 && formData.items.length === 0}
                className="btn-gold py-2 px-8 text-xs flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {step === 3 ? 'Place Order' : 'Continue'} <ChevronRight size={16} />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default OrderModal;

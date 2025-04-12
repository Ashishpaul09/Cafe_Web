import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus, Trash2, Coffee, User, UserPlus, LogIn } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { CartItem } from '../context/CartContext';

export default function Cart() {
  const { 
    cart, 
    isCartOpen, 
    toggleCart, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    clearCart 
  } = useCart();
  
  // State for login/register modal
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  
  // Animation controls for cart button
  const cartButtonControls = useAnimation();
  
  // Add pulse animation to cart button when items are added
  useEffect(() => {
    if (cart.totalItems > 0) {
      cartButtonControls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 0.5 }
      });
    }
  }, [cart.totalItems, cartButtonControls]);
  
  // Handle checkout button click
  const handleCheckoutClick = () => {
    setShowAuthModal(true);
    setAuthMode('login');
  };
  
  // Toggle between login and register modes
  const toggleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'register' : 'login');
  };

  return (
    <>
      {/* Cart toggle button with enhanced design */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        animate={cartButtonControls}
      >
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.button 
            onClick={toggleCart}
            className="relative bg-gradient-to-br from-[#8B4513] to-[#704214] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 overflow-hidden"
            initial={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
            whileHover={{ 
              boxShadow: "0 10px 25px -5px rgba(139,69,19,0.4)", 
            }}
          >
            <ShoppingCart size={26} />
            
            {/* Ripple effect on click */}
            <motion.span 
              className="absolute inset-0 bg-white rounded-full z-0 opacity-0"
              initial={{ scale: 0 }}
              whileTap={{ 
                scale: 4, 
                opacity: 0.2,
                transition: { duration: 0.5 }
              }}
            />
          </motion.button>
          
          {/* Item count badge with bounce animation */}
          <AnimatePresence>
            {cart.totalItems > 0 && (
              <motion.div
                className="absolute -top-3 -right-3 bg-gradient-to-r from-[#CD5C5C] to-[#BC4A4A] text-white font-bold rounded-full h-7 w-7 flex items-center justify-center shadow-md"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  rotate: [0, 10, 0]
                }}
                exit={{ scale: 0 }}
                transition={{ 
                  duration: 0.5,
                  type: "spring"
                }}
              >
                {cart.totalItems}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Decorative coffee bean icon */}
          <motion.div 
            className="absolute -bottom-1 -left-2 text-[#CD5C5C] opacity-70"
            animate={{ 
              rotate: [0, 360],
              y: [0, -3, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 8
            }}
          >
            <Coffee size={16} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Cart panel */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCart}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
            />

            {/* Cart panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-xl overflow-hidden flex flex-col"
            >
              {/* Cart header with enhanced design */}
              <div className="bg-gradient-to-r from-[#8B4513] to-[#704214] text-white p-5 flex justify-between items-center shadow-md relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 opacity-10"
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%'] 
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                  style={{ 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
                    backgroundSize: '20px 20px'
                  }}
                />
                
                <motion.h2 
                  className="text-xl font-bold flex items-center relative"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 15, 0], 
                      y: [0, -2, 0] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }}
                    className="mr-2"
                  >
                    <ShoppingCart size={24} />
                  </motion.div>
                  <span>Your Cart</span>
                  {cart.totalItems > 0 && (
                    <motion.span 
                      className="ml-2 bg-[#CD5C5C] px-2 py-0.5 text-sm rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      {cart.totalItems}
                    </motion.span>
                  )}
                </motion.h2>
                
                <motion.button 
                  onClick={closeCart}
                  className="text-white p-2 hover:text-[#F5F5DC] transition-colors rounded-full hover:bg-white/10"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Cart content with enhanced design */}
              <div className="flex-1 overflow-y-auto p-5 bg-[#FFFAF0]/50 relative">
                {/* Decorative background elements */}
                <div className="absolute inset-0 opacity-5 z-0 pointer-events-none">
                  <div className="absolute top-10 left-10 transform -rotate-12">
                    <Coffee size={120} />
                  </div>
                  <div className="absolute bottom-10 right-10 transform rotate-12">
                    <Coffee size={80} />
                  </div>
                </div>
                
                {cart.items.length === 0 ? (
                  <motion.div 
                    className="text-center py-12 flex flex-col items-center justify-center h-full relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0], 
                        rotate: [0, 5, 0, -5, 0] 
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                      className="mb-6"
                    >
                      <Coffee size={80} className="text-[#8B4513]/20" />
                    </motion.div>
                    <h3 className="text-xl font-medium text-[#8B4513] mb-3">Your cart is empty</h3>
                    <p className="text-gray-500 mb-6 max-w-xs mx-auto">
                      Add some delicious items from our menu to start your order
                    </p>
                    <motion.button 
                      onClick={closeCart}
                      className="bg-gradient-to-r from-[#8B4513] to-[#704214] text-white px-6 py-2.5 rounded-full hover:shadow-md transition-all flex items-center gap-2 font-medium"
                      whileHover={{ y: -2, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Browse Menu
                    </motion.button>
                  </motion.div>
                ) : (
                  <div className="space-y-4 relative z-10">
                    {/* Cart items with enhanced animations */}
                    {cart.items.map((item: CartItem, index) => (
                      <motion.div 
                        key={item.menuItem.id} 
                        className="flex gap-4 p-3 rounded-lg relative overflow-hidden group hover:shadow-md transition-all bg-white/80 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -2 }}
                        layout
                      >
                        {/* Background hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="relative z-10"
                        >
                          <img 
                            src={item.menuItem.image} 
                            alt={item.menuItem.name} 
                            className="w-20 h-20 object-cover rounded-lg shadow-sm" 
                          />
                        </motion.div>
                        
                        <div className="flex-1 relative z-10">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-[#8B4513] group-hover:text-[#704214] transition-colors">
                              {item.menuItem.name}
                            </h3>
                            <motion.span 
                              className="text-[#CD5C5C] font-bold bg-[#FFFFE0]/30 px-2 py-0.5 rounded text-sm"
                              whileHover={{ scale: 1.1 }}
                            >
                              {item.menuItem.price}
                            </motion.span>
                          </div>
                          
                          <p className="text-sm text-gray-500 line-clamp-1 mt-0.5 mb-2">
                            {item.menuItem.description}
                          </p>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center bg-white rounded-full p-1 shadow-sm border border-gray-100">
                              <motion.button 
                                onClick={() => updateQuantity(item.menuItem.id, Math.max(1, item.quantity - 1))}
                                className="h-6 w-6 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#8B4513] hover:text-white transition-colors"
                                whileTap={{ scale: 0.9 }}
                                disabled={item.quantity <= 1}
                              >
                                <Minus size={14} />
                              </motion.button>
                              
                              <motion.span 
                                className="px-3 text-sm font-medium text-[#8B4513]"
                                key={item.quantity}
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {item.quantity}
                              </motion.span>
                              
                              <motion.button 
                                onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                                className="h-6 w-6 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#8B4513] hover:text-white transition-colors"
                                whileTap={{ scale: 0.9 }}
                              >
                                <Plus size={14} />
                              </motion.button>
                            </div>
                            
                            <motion.button 
                              onClick={() => removeFromCart(item.menuItem.id)}
                              className="text-gray-400 hover:text-red-500 p-2 hover:bg-red-50 rounded-full transition-colors"
                              whileHover={{ rotate: 10 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 size={16} />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    <motion.div 
                      className="text-right mt-2 pt-2 border-t border-dashed border-gray-200"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.button 
                        onClick={clearCart}
                        className="text-sm text-[#CD5C5C] hover:text-red-600 transition-colors flex items-center gap-1 ml-auto"
                        whileHover={{ x: -2 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Trash2 size={14} />
                        Clear cart
                      </motion.button>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Cart footer with enhanced design */}
              {cart.items.length > 0 && (
                <motion.div 
                  className="border-t p-5 bg-gradient-to-b from-[#FFFAF0] to-white relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Subtle decorative pattern */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B4513]/20 to-transparent"></div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-gray-500 text-sm gap-1">
                        <Coffee size={14} />
                        <span>Subtotal</span>
                      </div>
                      <motion.div 
                        className="text-xl font-bold text-[#8B4513]"
                        animate={{ 
                          scale: [1, 1.03, 1],
                        }}
                        transition={{ 
                          repeat: 3, 
                          repeatType: "reverse", 
                          duration: 0.6,
                          delay: 0.6
                        }}
                      >
                        ${cart.totalPrice.toFixed(2)}
                      </motion.div>
                    </div>
                    
                    <motion.button 
                      onClick={handleCheckoutClick}
                      className="relative bg-gradient-to-r from-[#CD5C5C] to-[#BC4A4A] text-white py-3 px-6 rounded-full transition-all font-medium flex items-center gap-2 overflow-hidden group shadow-md hover:shadow-lg"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Checkout</span>
                      
                      {/* Arrow animation on hover */}
                      <motion.span
                        className="relative z-10"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          repeatType: "reverse", 
                          duration: 1
                        }}
                      >
                        →
                      </motion.span>
                      
                      {/* Background animation on hover */}
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-[#8B4513] to-[#CD5C5C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      ></motion.span>
                      
                      {/* Shine effect */}
                      <motion.span 
                        className="absolute inset-0 opacity-0 group-hover:opacity-20"
                        initial={{ x: '-100%' }}
                        animate={{ 
                          x: ['0%', '200%']
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          repeatType: "loop", 
                          duration: 1.5,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent transform skew-x-12"></div>
                      </motion.span>
                    </motion.button>
                  </div>
                  
                  <div className="text-center text-sm text-gray-500 mt-3 bg-[#8B4513]/5 p-2 rounded-lg">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="flex items-center justify-center gap-1.5"
                    >
                      <User size={14} />
                      You'll need to login or create an account to complete your order
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Enhanced Login/Register Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <>
            {/* Modal Backdrop with blur effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAuthModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            
            {/* Modal Content with enhanced design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl z-50 w-full max-w-md overflow-hidden"
            >
              {/* Decorative top pattern */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#8B4513] via-[#CD5C5C] to-[#8B4513]"></div>
              
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-[#8B4513]/5"></div>
                <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-[#CD5C5C]/5"></div>
                <div className="absolute top-1/4 right-1/4 opacity-5">
                  <Coffee size={100} />
                </div>
              </div>
              
              <div className="px-8 py-6 relative z-10">
                {/* Modal Header with dynamic color transition */}
                <div className="flex justify-between items-center mb-8">
                  <motion.h2 
                    className="text-2xl font-bold flex items-center relative"
                    style={{ 
                      color: authMode === 'login' ? '#8B4513' : '#CD5C5C',
                      transition: 'color 0.3s ease'
                    }}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {authMode === 'login' ? (
                      <motion.div className="flex items-center" layout>
                        <motion.div
                          animate={{ rotate: [0, 15, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                          className="mr-3"
                        >
                          <LogIn size={26} />
                        </motion.div>
                        <span>Welcome Back</span>
                      </motion.div>
                    ) : (
                      <motion.div className="flex items-center" layout>
                        <motion.div
                          animate={{ rotate: [0, -15, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                          className="mr-3"
                        >
                          <UserPlus size={26} />
                        </motion.div>
                        <span>Create Account</span>
                      </motion.div>
                    )}
                  </motion.h2>
                  
                  <motion.button
                    onClick={() => setShowAuthModal(false)}
                    className="bg-gray-100 text-gray-500 p-2 rounded-full hover:bg-gray-200 hover:text-[#8B4513] transition-colors"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={18} />
                  </motion.button>
                </div>
                
                {/* Tab selector with animated slider */}
                <div className="flex border-b border-gray-200 mb-6 relative">
                  <motion.div 
                    className="absolute bottom-0 h-0.5 bg-gradient-to-r from-[#8B4513] to-[#CD5C5C]"
                    initial={{ 
                      left: authMode === 'login' ? '0%' : '50%', 
                      right: authMode === 'login' ? '50%' : '0%' 
                    }}
                    animate={{ 
                      left: authMode === 'login' ? '0%' : '50%', 
                      right: authMode === 'login' ? '50%' : '0%' 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                  
                  <motion.button
                    className={`w-1/2 py-3 font-medium flex items-center justify-center gap-2 transition-colors ${
                      authMode === 'login' 
                        ? 'text-[#8B4513]' 
                        : 'text-gray-400'
                    }`}
                    onClick={() => setAuthMode('login')}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <LogIn size={16} />
                    <span>Login</span>
                  </motion.button>
                  
                  <motion.button
                    className={`w-1/2 py-3 font-medium flex items-center justify-center gap-2 transition-colors ${
                      authMode === 'register' 
                        ? 'text-[#CD5C5C]' 
                        : 'text-gray-400'
                    }`}
                    onClick={() => setAuthMode('register')}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <UserPlus size={16} />
                    <span>Register</span>
                  </motion.button>
                </div>
                
                {/* Modal Body with dynamic forms */}
                <AnimatePresence mode="wait">
                  {/* Login Form */}
                  {authMode === 'login' && (
                    <motion.div
                      key="login"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/50 focus:border-[#8B4513] transition-all"
                            placeholder="your@email.com"
                          />
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                              @
                            </motion.div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/50 focus:border-[#8B4513] transition-all"
                            placeholder="••••••••"
                          />
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <motion.div 
                              animate={{ rotate: [0, 10, 0] }} 
                              transition={{ repeat: Infinity, duration: 2 }}
                            >
                              🔒
                            </motion.div>
                          </div>
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ y: -2, boxShadow: "0 4px 8px rgba(139,69,19,0.15)" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full relative bg-gradient-to-r from-[#8B4513] to-[#704214] text-white py-3 rounded-lg font-medium mt-2 overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <LogIn size={18} />
                          Login
                        </span>
                        
                        {/* Subtle shine animation */}
                        <motion.span 
                          className="absolute inset-0 opacity-0 group-hover:opacity-20"
                          initial={{ x: '-100%' }}
                          whileHover={{
                            x: '100%',
                            transition: { duration: 1, repeat: Infinity }
                          }}
                        >
                          <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent transform skew-x-[20deg]"></div>
                        </motion.span>
                      </motion.button>
                      
                      <div className="text-center text-sm pt-2">
                        <span className="text-gray-500">Don't have an account? </span>
                        <motion.button
                          onClick={toggleAuthMode}
                          className="text-[#CD5C5C] font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          Register now
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Register Form */}
                  {authMode === 'register' && (
                    <motion.div
                      key="register"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CD5C5C]/50 focus:border-[#CD5C5C] transition-all"
                            placeholder="John Doe"
                          />
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                              👤
                            </motion.div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="register-email"
                            className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CD5C5C]/50 focus:border-[#CD5C5C] transition-all"
                            placeholder="your@email.com"
                          />
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                              @
                            </motion.div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type="password"
                            id="register-password"
                            className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CD5C5C]/50 focus:border-[#CD5C5C] transition-all"
                            placeholder="••••••••"
                          />
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <motion.div 
                              animate={{ rotate: [0, 10, 0] }} 
                              transition={{ repeat: Infinity, duration: 2 }}
                            >
                              🔒
                            </motion.div>
                          </div>
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ y: -2, boxShadow: "0 4px 8px rgba(205,92,92,0.15)" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full relative bg-gradient-to-r from-[#CD5C5C] to-[#BC4A4A] text-white py-3 rounded-lg font-medium mt-2 overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <UserPlus size={18} />
                          Create Account
                        </span>
                        
                        {/* Subtle shine animation */}
                        <motion.span 
                          className="absolute inset-0 opacity-0 group-hover:opacity-20"
                          initial={{ x: '-100%' }}
                          whileHover={{
                            x: '100%',
                            transition: { duration: 1, repeat: Infinity }
                          }}
                        >
                          <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent transform skew-x-[20deg]"></div>
                        </motion.span>
                      </motion.button>
                      
                      <div className="text-center text-sm pt-2">
                        <span className="text-gray-500">Already have an account? </span>
                        <motion.button
                          onClick={toggleAuthMode}
                          className="text-[#8B4513] font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          Login
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Security note */}
                <motion.div 
                  className="mt-6 text-xs text-gray-400 text-center flex items-center justify-center gap-1.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div>🔒</div> Your information is secure with us
                </motion.div>
              </div>
              
              {/* Decorative coffee bean animation */}
              <motion.div 
                className="absolute -z-10 opacity-5"
                style={{ bottom: -30, right: -20 }}
                animate={{ 
                  rotate: [0, 360],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 20, 
                  ease: "linear", 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <Coffee size={120} />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
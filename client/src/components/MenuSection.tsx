import { useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ShoppingCart, Check, Coffee } from "lucide-react";
import { coffeeItems, breakfastItems, lunchItems, dessertItems } from "@/data/menuData";
import { useCart } from "../context/CartContext";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("coffee");
  const [addedItems, setAddedItems] = useState<Record<number, boolean>>({});
  const { addToCart } = useCart();
  
  // Refs and animations for scroll-based animations
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  
  const categories = [
    { id: "coffee", name: "Coffee", icon: <Coffee size={16} className="mr-1" /> },
    { id: "breakfast", name: "Breakfast" },
    { id: "lunch", name: "Lunch" },
    { id: "desserts", name: "Desserts" }
  ];
  
  // Start animation when section is in view
  if (isInView) {
    controls.start("visible");
  }
  
  const getCategoryItems = () => {
    switch (activeCategory) {
      case "coffee":
        return coffeeItems;
      case "breakfast":
        return breakfastItems;
      case "lunch":
        return lunchItems;
      case "desserts":
        return dessertItems;
      default:
        return coffeeItems;
    }
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };
  
  const tabVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5
      }
    })
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleAddToCart = (item: any) => {
    addToCart(item);
    
    // Show added animation
    setAddedItems(prev => ({ ...prev, [item.id]: true }));
    
    // Reset after animation
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section ref={sectionRef} id="menu" className="py-16 md:py-24 bg-[#F5F5DC] relative overflow-hidden">
      {/* Decorative coffee beans animation */}
      <motion.div 
        className="absolute top-20 right-10 opacity-5 hidden md:block"
        animate={{ 
          rotate: [0, 360],
          y: [0, 10, 0]
        }}
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity,
          repeatType: "loop" 
        }}
      >
        <Coffee size={80} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-10 opacity-5 hidden md:block"
        animate={{ 
          rotate: [360, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 15, 
          ease: "linear", 
          repeat: Infinity,
          repeatType: "loop" 
        }}
      >
        <Coffee size={60} />
      </motion.div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-[#8B4513] mb-3 font-display">
            Our Menu
          </h2>
          <motion.div 
            className="w-20 h-1 bg-[#CD5C5C] mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            From freshly brewed coffees to delectable treats, we have something for everyone
          </motion.p>
        </motion.div>
        
        {/* Menu tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              custom={index}
              variants={tabVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`py-2 px-6 rounded-full transition-colors flex items-center ${
                activeCategory === category.id
                  ? "bg-[#8B4513] text-white"
                  : "bg-white text-[#8B4513] hover:bg-[#8B4513] hover:text-white"
              }`}
            >
              {category.icon && category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Menu items */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {getCategoryItems().map((item) => (
            <motion.div 
              key={item.id}
              className="flex gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden relative"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 } 
              }}
            >
              {/* Optional tag display */}
              {item.tag && (
                <div className={`absolute top-0 right-0 px-2 py-1 text-xs text-white ${item.tagColor || 'bg-[#CD5C5C]'} rotate-[15deg] transform translate-x-2 -translate-y-0`}>
                  {item.tag}
                </div>
              )}
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 rounded-md object-cover shadow-sm" 
                />
              </motion.div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <motion.h3 
                    className="font-bold text-[#8B4513] font-display"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.h3>
                  <motion.span 
                    className="text-[#CD5C5C] font-bold bg-[#FFFFE0]/50 px-2 py-0.5 rounded"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.price}
                  </motion.span>
                </div>
                
                <p className="text-sm text-gray-600 mt-1 mb-2">{item.description}</p>
                
                <motion.button 
                  onClick={() => handleAddToCart(item)}
                  className={`flex items-center px-3 py-1.5 text-sm rounded-full transition-all ${
                    addedItems[item.id]
                      ? "bg-green-500 text-white"
                      : "bg-[#8B4513] text-white hover:bg-[#704214]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
                  animate={addedItems[item.id] ? 
                    { boxShadow: "0px 0px 10px rgba(34,197,94,0.5)" } : 
                    { boxShadow: "0px 0px 0px rgba(0,0,0,0)" }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {addedItems[item.id] ? (
                    <motion.div
                      className="flex items-center"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check size={16} className="mr-1" />
                      Added to Cart
                    </motion.div>
                  ) : (
                    <motion.div
                      className="flex items-center"
                    >
                      <ShoppingCart size={16} className="mr-1" />
                      Add to Cart
                    </motion.div>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

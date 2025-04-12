import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  
  // Update scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  const title = "Welcome to Aroma Café";
  
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden relative"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        backgroundPositionY: `calc(50% + ${scrollY * 0.5}px)` // Parallax effect
      }}
    >
      {/* Coffee cup floating animation */}
      <motion.div 
        className="absolute top-20 right-20 hidden md:block"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          ease: "easeInOut", 
          repeat: Infinity 
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-white rounded-full opacity-10"></div>
        </motion.div>
      </motion.div>
      
      {/* Steam animation */}
      <motion.div 
        className="absolute top-24 left-1/4 hidden md:block"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 4, 
          ease: "easeInOut", 
          repeat: Infinity 
        }}
      >
        <div className="w-8 h-8 bg-white rounded-full opacity-10"></div>
      </motion.div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display flex flex-wrap justify-center">
            {title.split('').map((letter, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block">
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-[#FFFFE0] mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Where every cup tells a story and every bite creates a memory
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(205, 92, 92, 0.7)" 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const menuSection = document.getElementById("menu");
                if (menuSection) {
                  menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="bg-[#CD5C5C] hover:bg-[#BC4A4A] text-white font-bold py-3 px-8 rounded-full transition-all"
            >
              Explore Our Menu
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-all"
            >
              Book a Table
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-10 left-10 hidden lg:block"
        animate={{ 
          rotate: 360,
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        <div className="w-32 h-32 border-2 border-white/20 rounded-full"></div>
      </motion.div>
    </section>
  );
}

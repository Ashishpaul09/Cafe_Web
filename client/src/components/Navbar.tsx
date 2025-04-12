import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Coffee, CupSoda, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Determine active section based on scroll position
      const sections = ["home", "menu", "about", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  // Menu items with icons
  const navItems = [
    { id: "home", label: "Home", icon: <Sparkles size={16} /> },
    { id: "menu", label: "Menu", icon: <CupSoda size={16} /> },
    { id: "about", label: "About", icon: <Coffee size={16} /> },
    { id: "contact", label: "Contact", icon: <Coffee size={16} /> }
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#8B4513] shadow-lg backdrop-blur-sm bg-opacity-95' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-b from-black/40 to-transparent ${scrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}></div>
      
      <div className="container mx-auto px-6 py-4">
        <nav className="relative flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-2xl md:text-3xl font-script text-[#F5F5DC] flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, 0] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 2 
              }}
            >
              <Coffee size={28} className="text-[#CD5C5C]" />
            </motion.div>
            Aroma Café
          </motion.a>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              className="text-[#F5F5DC] focus:outline-none p-2 rounded-full"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-6 bg-black/10 backdrop-blur-sm px-4 py-2 rounded-full">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-[#F5F5DC] px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 group ${
                  activeSection === item.id ? 'text-white' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  animate={{ rotate: activeSection === item.id ? [0, 20, 0] : 0 }}
                  transition={{ 
                    repeat: activeSection === item.id ? Infinity : 0, 
                    repeatType: "reverse", 
                    duration: 1.5 
                  }}
                >
                  {item.icon}
                </motion.span>
                <span>{item.label}</span>
                
                {/* Active indicator */}
                <motion.span 
                  className="absolute inset-0 rounded-full bg-[#CD5C5C]/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: activeSection === item.id ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                ></motion.span>
                
                {/* Hover indicator */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#CD5C5C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </motion.button>
            ))}
          </div>
          
          <motion.button 
            onClick={() => scrollToSection("menu")}
            className="hidden md:flex items-center bg-[#CD5C5C] hover:bg-[#BC4A4A] text-white py-2 px-5 rounded-full transition-colors group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <CupSoda size={18} /> 
              Order Now
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#E07C64] to-[#CD5C5C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <motion.span 
              className="absolute -right-1 -top-1 w-12 h-12 bg-white/20 rounded-full"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.span>
          </motion.button>
        </nav>
      </div>
      
      {/* Mobile navigation menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#8B4513]/95 backdrop-blur-sm overflow-hidden border-t border-white/10 shadow-lg"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[#F5F5DC] hover:text-white transition-colors text-left flex items-center gap-2 p-2 ${
                    activeSection === item.id ? 'bg-[#CD5C5C]/20 rounded-lg' : ''
                  }`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.button>
              ))}
              <motion.button 
                onClick={() => scrollToSection("menu")}
                className="bg-[#CD5C5C] hover:bg-[#BC4A4A] text-white py-3 px-4 rounded-lg transition-colors text-center flex items-center justify-center gap-2 mt-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <CupSoda size={18} />
                Order Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { specialItems } from "@/data/menuData";

export default function SpecialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-[#8B4513] mb-3 font-display">
            Today's Specials
          </h2>
          <div className="w-20 h-1 bg-[#CD5C5C] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our chef's carefully crafted selection of seasonal favorites
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {specialItems.map((item) => (
            <motion.div 
              key={item.id}
              className="bg-[#F5F5DC] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-56 object-cover" 
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#8B4513] font-display">{item.name}</h3>
                  <span className="text-[#CD5C5C] font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`${item.tagColor} text-sm px-3 py-1 rounded-full`}>
                    {item.tag}
                  </span>
                  <button className="text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const menuSection = document.getElementById("menu");
              if (menuSection) {
                menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="inline-block bg-[#8B4513] hover:bg-[#704214] text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            View Full Menu
          </motion.button>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-[#8B4513] mb-3 font-display">
            Our Story
          </h2>
          <div className="w-20 h-1 bg-[#CD5C5C] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Café owner making coffee" 
                className="rounded-lg shadow-xl w-full" 
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F5F5DC] p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-script text-[#8B4513] text-xl">"Coffee is our passion"</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#8B4513] mb-4 font-display">From Bean to Cup: Our Journey</h3>
            <p className="text-gray-700 mb-4">
              Aroma Café began in 2010 with a simple dream: to create a space where quality coffee could bring people together. 
              What started as a tiny corner shop has blossomed into a beloved community hub.
            </p>
            <p className="text-gray-700 mb-4">
              We source our beans directly from sustainable farms around the world, ensuring fair prices for farmers and 
              exceptional quality for our customers. Every batch is roasted in-house to bring out the unique character of each origin.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of passionate baristas are trained in the art and science of coffee making, constantly refining their craft 
              to serve you the perfect cup, every time.
            </p>
            
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                alt="Owner photo" 
                className="w-16 h-16 rounded-full object-cover" 
              />
              <div>
                <h4 className="font-bold text-[#8B4513] font-display">Ashish Paul</h4>
                <p className="text-gray-600 text-sm">Founder & Head Barista</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#F5F5DC] py-2 px-4 rounded-full text-[#8B4513] text-sm">Ethically Sourced</span>
              <span className="bg-[#F5F5DC] py-2 px-4 rounded-full text-[#8B4513] text-sm">Small Batch Roasting</span>
              <span className="bg-[#F5F5DC] py-2 px-4 rounded-full text-[#8B4513] text-sm">Community Focused</span>
              <span className="bg-[#F5F5DC] py-2 px-4 rounded-full text-[#8B4513] text-sm">Sustainably Operated</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

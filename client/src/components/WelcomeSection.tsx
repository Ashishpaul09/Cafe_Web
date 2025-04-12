import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5DC]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-6 font-display">
              A Sanctuary for Coffee Lovers
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Nestled in the heart of the city, Aroma Café offers a tranquil escape from the bustling streets. 
              We've created a space where quality coffee meets thoughtful cuisine, all served in a welcoming 
              atmosphere that feels like home.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our philosophy is simple: use the finest ingredients, prepare them with care, and serve with a smile. 
              Whether you're dropping by for a quick espresso or settling in for brunch, we want your experience 
              to be exceptional.
            </p>
            <button 
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="inline-flex items-center text-[#8B4513] hover:text-[#704214] font-semibold transition-colors"
            >
              Learn more about our story
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Café interior" 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { testimonials } from "@/data/testimonialsData";

export default function TestimonialsSection() {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400 h-5 w-5" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400 h-5 w-5" />);
    }
    
    return stars;
  };

  return (
    <section className="py-16 md:py-24 bg-[#8B4513] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl md:text-4xl font-bold mb-3 font-display">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-[#CD5C5C] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-[#A67B5B] p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-[#F5F5DC] mb-4">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <img 
                  src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${index + 1}.jpg`} 
                  alt={`${testimonial.name} photo`} 
                  className="w-12 h-12 rounded-full object-cover" 
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-[#FFFFE0] text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

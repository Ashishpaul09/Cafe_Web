import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYelp } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#704214] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-script text-2xl mb-4">Aroma Café</h4>
            <p className="text-[#F5F5DC] mb-4">Where every cup tells a story and every bite creates a memory.</p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-[#F5F5DC] hover:text-[#CD5C5C] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="#" 
                className="text-[#F5F5DC] hover:text-[#CD5C5C] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                className="text-[#F5F5DC] hover:text-[#CD5C5C] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="text-[#F5F5DC] hover:text-[#CD5C5C] transition-colors"
                aria-label="Yelp"
              >
                <FaYelp />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-[#F5F5DC] hover:text-[#CD5C5C] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("menu")}
                  className="text-[#F5F5DC] hover:text-[#CD5C5C] transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-[#F5F5DC] hover:text-[#CD5C5C] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-[#F5F5DC] hover:text-[#CD5C5C] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-[#F5F5DC]">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>123 Coffee Lane, Downtown<br />New York, NY 10001</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>hello@aromacafe.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-[#F5F5DC]">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>8:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#A67B5B] mt-8 pt-8 text-center text-[#F5F5DC]">
          <p>&copy; {new Date().getFullYear()} Aroma Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

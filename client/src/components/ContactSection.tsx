import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Clock, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYelp } from "react-icons/fa";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { ContactFormData } from "@shared/types";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "reservation",
      message: ""
    }
  });

  const { mutate: submitContactForm } = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
        variant: "default",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    submitContactForm(data);
  };

  const handleError = (errors: any) => {
    console.error(errors);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F5F5DC]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-[#8B4513] mb-3 font-display">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#CD5C5C] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a question or want to book a table? Reach out to us!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 font-display">Send Us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, handleError)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field}
                            className="focus-visible:ring-[#8B4513]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email address" 
                            type="email"
                            {...field}
                            className="focus-visible:ring-[#8B4513]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="focus-visible:ring-[#8B4513]">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="reservation">Table Reservation</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="catering">Catering Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message"
                            rows={4}
                            {...field}
                            className="focus-visible:ring-[#8B4513]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#8B4513] hover:bg-[#704214] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#8B4513] text-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6 font-display">Visit Us</h3>
              
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-[#CD5C5C] mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-[#F5F5DC]">
                      123 Coffee Lane, Downtown<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-[#CD5C5C] mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Opening Hours</h4>
                    <p className="text-[#F5F5DC]">Monday to Friday: 7:00 AM - 8:00 PM</p>
                    <p className="text-[#F5F5DC]">Saturday & Sunday: 8:00 AM - 9:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-[#CD5C5C] mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Contact</h4>
                    <p className="text-[#F5F5DC]">(123) 456-7890</p>
                    <p className="text-[#F5F5DC]">hello@aromacafe.com</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="bg-[#A67B5B] hover:bg-[#CD5C5C] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="#" 
                    className="bg-[#A67B5B] hover:bg-[#CD5C5C] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="#" 
                    className="bg-[#A67B5B] hover:bg-[#CD5C5C] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="#" 
                    className="bg-[#A67B5B] hover:bg-[#CD5C5C] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Yelp"
                  >
                    <FaYelp />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

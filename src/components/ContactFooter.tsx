"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Camera as Instagram, Tv as Youtube } from "lucide-react";

export function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', requirement: 'Property Requirement', message: '' });

  const handleWhatsAppSubmit = () => {
    const text = `Hello SRA Propertiez!%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Requirement:* ${formData.requirement}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918484842070?text=${text}`, '_blank');
  };
  return (
    <footer className="w-full bg-[#111827] text-white pt-24 pb-12 rounded-t-[3rem] mt-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      
      <div className="max-w-[1536px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Looking for trusted properties in Nashik? We're available 24/7 to help you make the best investment.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="tel:8484842070" className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-2 -ml-2 rounded-xl transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us 24x7</p>
                  <p className="text-lg font-medium">+91 84848 42070</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-lg font-medium">contactsrateam@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg font-medium">Nashik, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem]">
            <h3 className="text-2xl font-medium mb-6">Send a Message</h3>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-white"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-white"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-white"
              />
              <select 
                value={formData.requirement}
                onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-white appearance-none"
              >
                <option className="text-black">Property Requirement</option>
                <option className="text-black">Buying Property</option>
                <option className="text-black">Selling Property</option>
                <option className="text-black">Commercial Space</option>
              </select>
              <textarea 
                placeholder="Your Message" 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-white resize-none"
              ></textarea>
              <button 
                type="button"
                onClick={handleWhatsAppSubmit}
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
              >
                Send Request via WhatsApp <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-semibold tracking-tight text-lg">SRA Propertiez</span>
            <span className="text-gray-400">© 2026. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/srapropertiez" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/@SRAFOOD" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

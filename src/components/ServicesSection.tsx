"use client";

import { motion } from "framer-motion";
import { 
  Home, Building, Map, Key, TrendingUp, Trees, 
  Castle, FileText, CheckCircle, CreditCard, MapPin, Search 
} from "lucide-react";

const services = [
  { icon: Home, title: "Buying Property", desc: "Find your dream home with transparent pricing." },
  { icon: Key, title: "Selling Property", desc: "Get the best market value for your assets." },
  { icon: Building, title: "Commercial Spaces", desc: "Premium office and retail spaces in Nashik." },
  { icon: Search, title: "Residential Homes", desc: "Apartments, penthouses, and row houses." },
  { icon: TrendingUp, title: "Investment Planning", desc: "Secure, high-yield property investments." },
  { icon: Map, title: "Plots", desc: "Clear title residential and commercial NA plots." },
  { icon: Trees, title: "Farm Land", desc: "Agricultural and farmhouse plots in nature." },
  { icon: Castle, title: "Luxury Villas", desc: "Ultra-premium independent homes." },
  { icon: FileText, title: "Legal Documentation", desc: "Hassle-free registry and title clearing." },
  { icon: CheckCircle, title: "Property Verification", desc: "100% genuine and trusted properties." },
  { icon: CreditCard, title: "Loan Assistance", desc: "Partnered with top banks for home loans." },
  { icon: MapPin, title: "Site Visits", desc: "Guided tours to your shortlisted properties." },
];

export function ServicesSection() {
  return (
    <section className="w-full py-24 px-6 md:px-10 max-w-[1536px] mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-[rgba(30,50,90,0.6)] font-semibold uppercase tracking-widest text-sm mb-4">Our Expertise</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[rgba(30,50,90,0.95)] font-normal tracking-tight mb-6">
          Premium Services
        </h2>
        <p className="text-[#5E6470] text-lg max-w-2xl font-light">
          We provide end-to-end real estate solutions to make your property journey smooth and secure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group p-8 rounded-[1.5rem] bg-white border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-start"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <service.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-[rgba(30,50,90,0.95)] mb-3">{service.title}</h3>
            <p className="text-[#5E6470] text-sm font-light leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

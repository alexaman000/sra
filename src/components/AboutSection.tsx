"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "100+", label: "Property Deals" },
  { value: "10+", label: "Years Experience" },
  { value: "24x7", label: "Support" },
  { value: "100%", label: "Trusted Guidance" },
];

export function AboutSection() {
  return (
    <section className="w-full py-24 px-6 md:px-10 max-w-[1536px] mx-auto bg-white/5 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] my-10 border border-white/20 shadow-sm relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col gap-6"
        >
          <span className="text-[rgba(30,50,90,0.6)] font-semibold uppercase tracking-widest text-sm">About SRA Propertiez</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[rgba(30,50,90,0.95)] font-normal tracking-tight leading-[1.1]">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Zahid SRA</span>
          </h2>
          <p className="text-[#5E6470] text-lg leading-relaxed font-light">
            As a Trusted Property Consultant and proudly known as <strong className="font-semibold text-[rgba(30,50,90,0.9)]">Old Nashik's First Food Vlogger</strong>, Zahid SRA brings a unique blend of local market expertise and deep community connections.
          </p>
          <p className="text-[#5E6470] text-lg leading-relaxed font-light">
            Our strong local knowledge helps customers discover not just great properties, but the greatest neighborhoods and places around Nashik. We offer complete transparency in buying, selling, and investing.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 w-full"
        >
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`p-6 rounded-[1.5rem] bg-gradient-to-br from-white to-gray-50/50 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300 ${i === 4 ? "col-span-2" : ""}`}
            >
              <span className="text-3xl md:text-4xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">
                {stat.value}
              </span>
              <span className="text-sm text-[#5E6470] uppercase tracking-wider font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

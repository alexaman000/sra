"use client";

import { motion } from "framer-motion";
import { Tv as Youtube, Utensils, PlayCircle, Camera as Instagram } from "lucide-react";

export function FoodBloggerSection() {
  return (
    <section className="w-full py-24 px-6 md:px-10 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1536px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-6">
              <Utensils className="w-4 h-4" />
              SRA FOOD
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold tracking-tight leading-[1.1] mb-6">
              Meet Nashik's First <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Food Vlogger</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Zahid SRA isn't just about premium real estate. Follow <strong>SRA FOOD</strong> to discover Nashik's hidden culinary gems, vibrant street food, and honest restaurant reviews. Great properties and great food go hand in hand!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="https://youtube.com/@SRAFOOD" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
                <Youtube className="w-6 h-6" />
                Subscribe SRA FOOD
              </a>
              <a href="https://instagram.com/srapropertiez" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/30">
                <Instagram className="w-6 h-6" />
                Follow @srapropertiez
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full relative"
          >
            <div className="aspect-video bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl relative group cursor-pointer border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
                alt="Food Vlog Highlight" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                  Latest: Exploring Old Nashik Street Food
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1000&auto=format&fit=crop"
          ].map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square rounded-[1.5rem] overflow-hidden group cursor-pointer"
            >
              <img src={img} alt={`Food ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

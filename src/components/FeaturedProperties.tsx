"use client";

import { motion } from "framer-motion";
import { Bed, Bath, Maximize, MapPin, Heart, Share2 } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury Sky Villa",
    location: "Gangapur Road, Nashik",
    price: "₹ 3.5 Cr",
    beds: 4,
    baths: 5,
    area: "3500 sqft",
    status: "Ready to Move",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Premium Commercial Space",
    location: "College Road, Nashik",
    price: "₹ 5.2 Cr",
    beds: 0,
    baths: 2,
    area: "2000 sqft",
    status: "Under Construction",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Serene Farmhouse Plot",
    location: "Trimbak Road, Nashik",
    price: "₹ 1.2 Cr",
    beds: 0,
    baths: 0,
    area: "1 Acre",
    status: "Available",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop"
  }
];

export function FeaturedProperties() {
  return (
    <section className="w-full py-24 px-6 md:px-10 max-w-[1536px] mx-auto bg-[#f0f0f0]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-[rgba(30,50,90,0.6)] font-semibold uppercase tracking-widest text-sm mb-4 block">Handpicked For You</span>
          <h2 className="text-4xl md:text-5xl text-[rgba(30,50,90,0.95)] font-normal tracking-tight">
            Featured Properties
          </h2>
        </div>
        <button className="px-6 py-3 rounded-full border border-[rgba(30,50,90,0.2)] text-[rgba(30,50,90,0.8)] hover:bg-[rgba(30,50,90,0.05)] transition-colors w-fit">
          View All Properties
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, i) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] group"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[rgba(30,50,90,0.9)]">
                {property.status}
              </div>
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-600 hover:text-blue-500 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-medium text-[rgba(30,50,90,0.95)] mb-2">{property.title}</h3>
              <div className="flex items-center gap-1 text-gray-500 mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-light">{property.location}</span>
              </div>
              
              <div className="flex items-center justify-between py-4 border-y border-gray-100 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Bed className="w-4 h-4" />
                  <span className="text-sm">{property.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Bath className="w-4 h-4" />
                  <span className="text-sm">{property.baths} Baths</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Maximize className="w-4 h-4" />
                  <span className="text-sm">{property.area}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold text-blue-600">{property.price}</span>
                <a 
                  href="https://wa.me/918484842070?text=I%20want%20to%20book%20a%20site%20visit%20for%20this%20property"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-[rgba(30,50,90,0.9)] text-white rounded-full text-sm font-medium hover:bg-[rgba(30,50,90,1)] transition-colors cursor-pointer"
                >
                  Book Visit
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

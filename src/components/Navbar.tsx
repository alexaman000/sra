"use client";

import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
      <div className="flex-1 hidden md:block" />
      <ul className="hidden md:flex items-center gap-8 text-white font-medium text-sm drop-shadow-md">
        <li className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group">
          Residential
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group">
          Commercial <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group">
          Plots
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group">
          About <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </li>
      </ul>
      
      <div className="md:hidden">
        <span className="font-bold tracking-tighter text-xl text-white drop-shadow-md">SRA Propertiez</span>
      </div>

      <div className="flex-1 flex justify-end">
        <motion.a 
          href="https://wa.me/918484842070?text=I%20want%20to%20book%20a%20site%20visit"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group cursor-pointer"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xs md:text-sm font-normal">Book Visit</span>
        </motion.a>
      </div>
    </nav>
  );
}

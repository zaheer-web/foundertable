import React from "react";
import { motion } from "framer-motion";
import star from "../img/vector.png";
import bgVideo from "../img/bg-vid.mp4";

export default function Hero() {
  return (
    <section id="premise" className="relative h-screen w-full overflow-hidden">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🌑 GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(270deg, rgba(102,102,102,0) 0%, rgba(0,0,0,0.8) 80%)",
        }}
      />

      {/* EXTRA DARK */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 lg:px-0">

          {/* MAIN BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[435px] flex flex-col gap-6 lg:absolute lg:top-[248px] lg:left-[119px]"
          >

            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="border border-[#A37C34] px-4 py-2 text-[11px] md:text-[15px] tracking-[0.2em] text-[#A37C34] w-max"
            >
              INDIA'S CLOSED-DOOR BUSINESS COUNCIL
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="text-white text-4xl sm:text-5xl md:text-6xl font-light tracking-wide"
            >
              TABLE<span className="text-[#A37C34]">ONE</span>
            </motion.h1>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-sm sm:text-xl max-w-md"
            >
              The conversations that build empires do not happen on stages.
            </motion.p>

            {/* FEATURES */}
            <div className="w-full flex flex-col gap-[12px] text-gray-300 text-sm md:text-lg">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {[
                  "Fifteen principals",
                  "One closed room",
                  "No media",
                  "No cameras",
                  "No agenda books",
                  "No performance",
                  "Only candor",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2"
                  >
                    <img src={star} alt="star" className="w-[10px] h-[10px]" />
                    <span className="whitespace-nowrap">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-2 md:mt-5"
            >

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#A37C34] hover:bg-[#8c692d] text-black px-6 py-3 text-sm"
              >
                REQUEST YOUR SEAT
              </motion.button>

              <motion.button
                whileHover={{ x: 6 }}
                className="text-white border-b border-white/40 pb-1 text-sm hover:border-[#A37C34] w-fit"
              >
                UNDERSTAND THE PREMISE
              </motion.button>

            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
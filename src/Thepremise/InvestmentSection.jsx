import React from "react";
import img from "../img/img-3.png";
import { motion } from "framer-motion";

export default function InvestmentSection() {
  return (
    <section id="seat"
      className="w-full text-white "
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #3D2E13 134.42%)",
      }}
    >
      <div className="w-full h-auto lg:h-[800px] grid lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-full overflow-hidden">
          <motion.img
            src={img}
            alt="dinner"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}   // ✅ FIX
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full h-full flex items-center md:pt-25">
          
          <div className="max-w-[621px] px-6 md:px-10 py-10 lg:py-0 flex flex-col justify-center gap-5">

            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}   // ✅ FIX
              className="border border-[#A37C34] text-[#A37C34] text-xs md:text-xl tracking-widest px-3 py-1 w-max"
            >
              THE INVESTMENT
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}   // ✅ FIX
              className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-light leading-tight"
            >
              A SEAT AT THE TABLE IS <br />
              PRICED AT ONE TRUTH— <br />
              <span className="text-[#A37C34] italic">
                ACCESS HAS REAL VALUE.
              </span>
            </motion.h2>

            {/* PRICE */}
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}   // ✅ FIX
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light cursor-pointer"
            >
              ₹25,000
            </motion.h3>

            {/* SUB TEXT */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}   // ✅ FIX
              className="flex flex-wrap gap-3 text-xs sm:text-[15px] text-[#A37C34]"
            >
              <span className="hover:text-white transition">• PER PRINCIPAL</span>
              <span className="hover:text-white transition">• PER TABLE</span>
              <span className="hover:text-white transition">• ALL-INCLUSIVE</span>
            </motion.div>

            {/* FEATURES */}
            <ul className="space-y-2 text-sm md:text-[14px] text-gray-300 leading-relaxed">
              {[
                "Boutique venue, exclusively reserved",
                "Full multi-course dinner & beverages",
                "Pre-event curated guest dossier",
                "Host-facilitated conversation",
                "Consent-based post-table introductions",
                "Lifetime seat in the TableOne network",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 8 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: false, amount: 0.3 }}   // ✅ FIX
                  className="hover:text-white transition cursor-pointer"
                >
                  • {item}
                </motion.li>
              ))}
            </ul>

            {/* BUTTON */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#A37C34] text-[#A37C34] px-5 py-2 text-sm md:text-[16px] hover:bg-[#A37C34] hover:text-black transition duration-300"
              >
                REQUEST AN INVITATION
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}   // ✅ FIX
                className="text-xs md:text-sm text-white mt-2 md:mt-4"
              >
                TableOne does not sell seats. Every invitation is personal. Every seat is earned.
              </motion.p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
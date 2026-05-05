import React from "react";
import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-[44px] bg-[#A37C34] flex items-center justify-center px-[10px] overflow-hidden"
    >
      {/* TEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.03 }}
        className="text-black text-[16px] md:text-[18px] leading-[24px] font-normal font-[Inter] text-center cursor-default transition"
      >
        India’s most private business conversations. By invitation only.
      </motion.p>
    </motion.div>
  );
}
import React from "react";
import { motion } from "framer-motion";

/* 👇 PREMIUM FONTS */
import "@fontsource/cormorant-garamond/300.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

export default function TopBar() {
  return (
    <motion.div
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        relative
        w-full
        overflow-hidden
        border-b
        border-[#D6B06A]/20
      "
      style={{
        background:
          "linear-gradient(90deg, #8D6A2F 0%, #A37C34 50%, #8D6A2F 100%)",
      }}
    >
      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      {/* SHIMMER */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
        className="
          absolute
          top-0
          left-0
          w-[120px]
          h-full
          bg-white/10
          blur-xl
          rotate-12
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          h-[42px]
          md:h-[48px]
          flex
          items-center
          justify-center
          px-4
        "
      >
        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            flex
            items-center
            gap-3
            text-center
          "
        >
          {/* SMALL LINE */}
          <div className="hidden md:block w-10 h-[1px] bg-black/40" />

          {/* TEXT */}
          <p
            className="
              text-black
              text-[11px]
              sm:text-[12px]
              md:text-[14px]
              tracking-[0.12em]
              uppercase
              leading-none
            "
            style={{
              fontFamily: "Inter",
              fontWeight: "500",
            }}
          >
            India’s most private business conversations.

            <span
              className="ml-2 italic"
              style={{
                fontFamily:
                  "Cormorant Garamond",
                fontWeight: "300",
              }}
            >
              By invitation only.
            </span>
          </p>

          {/* SMALL LINE */}
          <div className="hidden md:block w-10 h-[1px] bg-black/40" />
        </motion.div>
      </div>
    </motion.div>
  );
}
import React from "react";
import { motion } from "framer-motion";
import {
  Crown,
  ShieldCheck,
  CameraOff,
  BookOpenCheck,
  MicOff,
  Users,
  Sparkles,
} from "lucide-react";

import bgVideo from "../img/bg-vid.mp4";
import mobileBg from "../img/img-3.png";

/* 👇 PREMIUM FONTS */
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/400-italic.css";

export default function Hero() {
  const features = [
    {
      title: "Fifteen principals",
      icon: Crown,
    },
    {
      title: "One closed room",
      icon: ShieldCheck,
    },
    {
      title: "No media",
      icon: MicOff,
    },
    {
      title: "No cameras",
      icon: CameraOff,
    },
    {
      title: "No agenda books",
      icon: BookOpenCheck,
    },
    {
      title: "No performance",
      icon: Sparkles,
    },
    {
      title: "Only candor",
      icon: Users,
    },
  ];

  return (
    <section
      id="premise"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* 🎥 DESKTOP VIDEO */}
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 hidden md:block w-full h-full object-cover"
      />

      {/* 📱 MOBILE IMAGE */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={mobileBg}
          alt="background"
          className="
            w-full
            h-full
            object-cover
            object-center
            scale-[1.04]
          "
        />
      </div>

      {/* 🌈 MOBILE OVERLAY */}
      <div
        className="absolute inset-0 md:hidden z-[1]"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(0,0,0,0.08) 0%,
              rgba(0,0,0,0.18) 28%,
              rgba(0,0,0,0.42) 55%,
              rgba(15,15,15,0.82) 82%,
              rgba(15,15,15,0.98) 100%
            )
          `,
        }}
      />

      {/* 🌑 DESKTOP OVERLAY */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(270deg, rgba(102,102,102,0) 0%, rgba(0,0,0,0.88) 80%)",
        }}
      />

      {/* EXTRA DARK */}
      <div className="absolute inset-0 bg-black/5 md:bg-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center min-h-screen pt-24 md:pt-32">
        <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          {/* MAIN CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              w-full
              max-w-[720px]
              flex
              flex-col
              justify-center
              gap-4
              py-10
              md:py-0
            "
          >
            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                border border-[#A37C34]
                px-3 py-2
                text-[9px]
                sm:text-[10px]
                md:text-[10px]
                tracking-[0.28em]
                text-[#D6B06A]
                w-fit
                backdrop-blur-md
                bg-white/5
              "
              style={{
                fontFamily: "Inter",
                fontWeight: "300",
              }}
            >
              INDIA'S CLOSED-DOOR BUSINESS COUNCIL
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                text-white
                leading-[0.92]
                tracking-wide
                text-[42px]
                sm:text-[58px]
                md:text-[72px]
                lg:text-[72px]
              "
              style={{
                fontFamily: "Cormorant Garamond",
                fontWeight: "300",
              }}
            >
              TABLE
              <span className="text-[#A37C34] ml-2 italic">
                ONE
              </span>
            </motion.h1>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
                text-[#EAEAEA]
                text-[13px]
                sm:text-[14px]
                md:text-[18px]
                leading-[1.8]
                max-w-[560px]
              "
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
              }}
            >
              The conversations that build{" "}
              <span className="text-[#D6B06A] italic">
                empires
              </span>{" "}
              do not happen on stages.
            </motion.p>

            {/* FEATURE CARDS */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-3
                mt-3
                w-full
                max-w-[820px]
              "
            >
              {features.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.5,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      transition-all
                      duration-500
                    "
                  >
                    {/* 📱 MOBILE DESIGN */}
                    <div
                      className="
                        md:hidden
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/35
                        backdrop-blur-
                        px-4
                        py-4
                        hover:border-[#A37C34]/50
                        hover:bg-[#1A1A1A]
                        transition-all
                        duration-500
                      "
                    >
                      {/* ICON */}
                      <div
                        className="
                          min-w-[48px]
                          h-[48px]
                          rounded-2xl
                          flex
                          items-center
                          justify-center
                          bg-gradient-to-br
                          from-[#A37C34]
                          to-[#D6B06A]
                          shadow-[0_10px_25px_rgba(163,124,52,0.25)]
                        "
                      >
                        <Icon
                          size={20}
                          className="text-black"
                          strokeWidth={2}
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="flex flex-col">
                        <h3
                          className="
                            text-white
                            text-[14px]
                            leading-snug
                          "
                          style={{
                            fontFamily: "Inter",
                            fontWeight: "600",
                          }}
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            text-white/60
                            text-[11px]
                            mt-1
                            leading-[1.5]
                          "
                          style={{
                            fontFamily: "Inter",
                          }}
                        >
                          Exclusive confidential business discussions.
                        </p>
                      </div>
                    </div>

                    {/* 💻 DESKTOP DESIGN */}
                    <div
                      className="
                        hidden
                        md:flex
                        relative
                        overflow-hidden
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.04]
                        backdrop-blur-xl
                        p-3.5
                        items-center
                        gap-3
                        transition-all
                        duration-500
                        hover:border-[#A37C34]/60
                        hover:bg-[#A37C34]/10
                      "
                    >
                      {/* ICON */}
                      <div
                        className="
                          relative
                          z-10
                          min-w-[42px]
                          h-[42px]
                          rounded-lg
                          flex
                          items-center
                          justify-center
                          bg-[#A37C34]/15
                          border
                          border-[#A37C34]/30
                          transition-all
                          duration-500
                          group-hover:scale-105
                        "
                      >
                        <Icon
                          size={18}
                          className="text-[#D6B06A]"
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="relative z-10 flex flex-col">
                        <h3
                          className="
                            text-white
                            text-[13px]
                            sm:text-[14px]
                            leading-snug
                            transition-all
                            duration-300
                            group-hover:text-[#F4D08A]
                          "
                          style={{
                            fontFamily: "Inter",
                            fontWeight: "500",
                          }}
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            text-white/60
                            text-[11px]
                            mt-0.5
                            leading-[1.5]
                          "
                          style={{
                            fontFamily: "Inter",
                          }}
                        >
                          Private confidential discussions.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
                mt-4
                w-full
                sm:w-fit
              "
            >
              {/* PRIMARY BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="
                  bg-[#A37C34]
                  hover:bg-[#8c692d]
                  text-black
                  px-5
                  py-3
                  rounded-
                  text-[11px]
                  sm:text-[12px]
                  md:text-[13px]
                  tracking-[0.14em]
                  transition-all
                  duration-300
                  w-full
                  sm:w-fit
                  font-medium
                "
                style={{
                  fontFamily: "Inter",
                }}
              >
                REQUEST YOUR SEAT
              </motion.button>

              {/* SECONDARY BUTTON */}
              <motion.button
                whileHover={{ x: 4 }}
                className="
                  text-white
                  border
                  border-white/20
                  hover:border-[#A37C34]
                  hover:bg-white/5
                  rounded-
                  px-5
                  py-3
                  text-[11px]
                  sm:text-[12px]
                  tracking-[0.12em]
                  transition-all
                  duration-300
                  w-full
                  sm:w-fit
                "
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
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
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
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        min-h-[78vh]
        md:min-h-screen
      "
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
            scale-[1.02]
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
              rgba(0,0,0,0.10) 0%,
              rgba(0,0,0,0.20) 35%,
              rgba(0,0,0,0.55) 70%,
              rgba(0,0,0,0.90) 100%
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
      <div
        className="
          relative
          z-10
          flex
          items-end
          md:items-center
          min-h-[78vh]
          md:min-h-screen
          pt-16
          md:pt-32
        "
      >
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
              gap-3
              py-10
              md:py-0
              items-start
              text-left
            "
          >
            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                border border-[#A37C34]
                px-2.5 py-1.5
                text-[8px]
                sm:text-[10px]
                md:text-[10px]
                tracking-[0.24em]
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
                text-[44px]
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
                text-[12px]
                sm:text-[14px]
                md:text-[18px]
                leading-[1.7]
                max-w-[320px]
                md:max-w-[560px]
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
                hidden md:grid
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
                flex-row
                gap-2
                mt-3
                w-full
                md:w-fit
              "
            >
              {/* PRIMARY BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const section =
                    document.getElementById("contact");

                  section?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="
                  bg-[#A37C34]
                  hover:bg-[#8c692d]
                  text-black
                  px-3.5
                  md:px-5
                  py-2.5
                  md:py-3
                  rounded-full
                  text-[9px]
                  sm:text-[10px]
                  md:text-[13px]
                  tracking-[0.12em]
                  transition-all
                  duration-300
                  font-medium
                  whitespace-nowrap
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
                onClick={() => {
                  const section =
                    document.getElementById("premise");

                  section?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="
                  text-white
                  border
                  border-white/20
                  hover:border-[#A37C34]
                  hover:bg-white/5
                  rounded-full
                  px-3.5
                  md:px-5
                  py-2.5
                  md:py-3
                  text-[9px]
                  sm:text-[10px]
                  md:text-[12px]
                  tracking-[0.10em]
                  transition-all
                  duration-300
                  whitespace-nowrap
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
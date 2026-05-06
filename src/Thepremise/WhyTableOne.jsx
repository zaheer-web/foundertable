import React from "react";
import { motion } from "framer-motion";
import bgImage from "../img/img-1.png";

import {
  UserCheck,
  Building2,
  Users2,
  EyeOff,
  ShieldCheck,
  Landmark,
} from "lucide-react";

/* 👇 PREMIUM FONTS */
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/400-italic.css";

export default function WhyTableOne() {
 const cards = [
  {
    icon: UserCheck,
    title: "CURATED, NOT COLLECTED",
    desc: "Every seat individually evaluated — domain, seniority, network depth, and what the individual brings.",
  },
  {
    icon: Building2,
    title: "INDUSTRY-COHESIVE TABLES",
    desc: "Each dinner is built around one vertical. Everyone speaks the same language — the same friction, the same opportunity, the same depth.",
  },
  {
    icon: Users2,
    title: "INTIMACY BY DESIGN",
    desc: "At fifteen, everyone speaks and everyone listens. Partnerships crystallise. Capital finds its target.",
  },
  {
    icon: EyeOff,
    title: "NO AUDIENCE, NO PERFORMANCE",
    desc: "When there is no audience, there is no posturing. Nobody is building a personal brand in the room. Everyone is building something real.",
  },
  {
    icon: ShieldCheck,
    title: "PEER-LEVEL TRUST",
    desc: "You are not in a room with junior reps. You are with your actual peers — decision makers, capital allocators, policy architects.",
  },
  {
    icon: Landmark,
    title: "THE COMPOUND EFFECT",
    desc: "One Table is a conversation. A seat across multiple Tables is a permanent council of principals who know you by name.",
  },
];

  return (
    <section
      className="relative w-full py-24 md:py-32 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* 🔥 OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.90) 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative max-w-[1272px] mx-auto px-5 md:px-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="
            text-center
            flex
            flex-col
            items-center
            gap-6
            mb-16
            md:mb-20
          "
        >
          {/* TAG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="
              border
              border-[#A37C34]
              px-4
              py-2
              text-[10px]
              md:text-[11px]
              tracking-[0.22em]
              text-[#A37C34]
              bg-white/[0.03]
              backdrop-blur-sm
            "
            style={{
              fontFamily: "Inter",
              fontWeight: "500",
            }}
          >
            WHY TABLEONE WORKS
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="
              text-white
              text-[38px]
              sm:text-[48px]
              md:text-6xl
              leading-[1.05]
            "
            style={{
              fontFamily: "Cormorant Garamond",
              fontWeight: "300",
            }}
          >
            A SUMMIT GIVES YOU EXPOSURE.
            <br />

            <span className="text-[#A37C34] italic">
              TABLEONE GIVES YOU EQUITY.
            </span>
          </motion.h2>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="
              text-[#CFCFCF]
              text-[14px]
              md:text-[16px]
              leading-[1.8]
              max-w-[720px]
            "
            style={{
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            The rarest business asset is not capital. It is a room where the
            right people speak without pretence.
          </motion.p>
        </motion.div>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-5
            md:gap-7
          "
        >
          {cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  p-6
                  md:p-8
                  min-h-[270px]
                  transition-all
                  duration-500
                  hover:border-[#A37C34]/50
                  hover:bg-white/[0.06]
                  hover:shadow-[0_0_35px_rgba(163,124,52,0.18)]
                "
              >
                {/* glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    bg-gradient-to-br
                    from-[#A37C34]/10
                    via-transparent
                    to-transparent
                  "
                />

                {/* ICON */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                  className="
                    relative
                    z-10
                    w-[58px]
                    h-[58px]
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    border
                    border-[#A37C34]/30
                    bg-[#A37C34]/10
                    backdrop-blur-md
                    mb-7
                    transition-all
                    duration-500
                    group-hover:bg-[#A37C34]
                    group-hover:border-[#D6B06A]
                  "
                >
                  <Icon
                    size={26}
                    className="
                      text-[#D6B06A]
                      group-hover:text-black
                      transition-all
                      duration-500
                    "
                    strokeWidth={2}
                  />
                </motion.div>

                {/* TITLE */}
                <h3
                  className="
                    relative
                    z-10
                    text-white
                    text-[15px]
                    uppercase
                    tracking-[0.08em]
                    leading-[1.6]
                    mb-4
                  "
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                  }}
                >
                  {card.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                    relative
                    z-10
                    text-[#CFCFCF]
                    text-[14px]
                    leading-[24px]
                  "
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                  }}
                >
                  {card.desc}
                </p>

                {/* BOTTOM LINE */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-[2px]
                    bg-[#A37C34]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
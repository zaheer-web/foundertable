import React from "react";
import { motion } from "framer-motion";
import bgImage from "../img/img-1.png";

// 👉 icons
import icon1 from "../img/icon-4.png";
import icon2 from "../img/icon-5.png";
import icon3 from "../img/icon-6.png";
import icon4 from "../img/icon-7.png";
import icon5 from "../img/icon-8.png";
import icon6 from "../img/icon-9.png";

export default function WhyTableOne() {
  const cards = [
    {
      icon: icon1,
      title: "CURATED, NOT COLLECTED",
      desc: "Every seat individually evaluated — domain, seniority, network depth, and what the individual brings.",
    },
    {
      icon: icon2,
      title: "INDUSTRY-COHESIVE TABLES",
      desc: "Each dinner is built around one vertical. Everyone speaks the same language — the same friction, the same opportunity, the same depth.",
    },
    {
      icon: icon3,
      title: "INTIMACY BY DESIGN",
      desc: "At fifteen, everyone speaks and everyone listens. Partnerships crystallise. Capital finds its target.",
    },
    {
      icon: icon4,
      title: "NO AUDIENCE, NO PERFORMANCE",
      desc: "When there is no audience, there is no posturing. Nobody is building a personal brand in the room. Everyone is building something real.",
    },
    {
      icon: icon5,
      title: "PEER-LEVEL TRUST",
      desc: "You are not in a room with junior reps. You are with your actual peers — decision makers, capital allocators, policy architects.",
    },
    {
      icon: icon6,
      title: "THE COMPOUND EFFECT",
      desc: "One Table is a conversation. A seat across multiple Tables is a permanent council of principals who know you by name.",
    },
  ];

  return (
    <section
      className="relative w-full py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* 🔥 OVERLAY */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.85)" }}
      ></div>

      {/* CONTENT */}
      <div className="relative max-w-[1272px] mx-auto px-5 md:px-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center gap-[24px] mb-20"
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="border border-[#A37C34] px-4 py-2 text-[11px] tracking-[0.2em] text-[#A37C34]"
          >
            WHY TABLEONE WORKS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="text-white text-4xl md:text-6xl leading-tight"
            style={{ fontFamily: "Ivy Mode, serif" }}
          >
            A SUMMIT GIVES YOU EXPOSURE.
            <br />
            <span className="text-[#A37C34] italic">
              TABLEONE GIVES YOU EQUITY.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="text-[#CFCFCF] text-[16px] max-w-[700px]"
          >
            The rarest business asset is not capital. It is a room where the
            right people speak without pretence.
          </motion.p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[35px]">

          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              className="w-full max-w-[404px] h-[261px] border border-[#FAFAFA] rounded-[4px] p-[32px] flex flex-col gap-[12px] transition-all duration-300 hover:border-[#A37C34] hover:shadow-[0_0_25px_rgba(163,124,52,0.25)]"
            >
              {/* ICON */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="w-[40px] h-[40px] flex items-center justify-start"
              >
                <img
                  src={card.icon}
                  alt="icon"
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>

              {/* TITLE */}
              <h3 className="text-white text-[15px] uppercase tracking-[0.08em] pt-4">
                {card.title}
              </h3>

              {/* DESC */}
              <p className="text-[#CFCFCF] text-[14px] leading-[22px]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
import icon1 from "../img/icon-1.png";
import icon2 from "../img/icon-2.png";
import icon3 from "../img/icon-3.png";
import {
  Users,
  Clock3,
  ShieldCheck,
} from "lucide-react";

/* 👇 PREMIUM FONTS */
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/400-italic.css";

export default function ProblemSection() {
  return (
    <section
      className="w-full pb-27 pt-10 md:pt-20"
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #3D2E13 134.42%)",
      }}
    >
      <div className="max-w-[1472px] mx-auto px-5 md:px-10">

        {/* 🔝 TOP CONTENT */}
        <div className="flex flex-col lg:flex-row justify-between gap-[30px]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[821px] flex flex-col gap-[12px]"
          >

            {/* TAG */}
            <div
              className="mb-1 md:mb-1 border border-[#A37C34] px-4 py-2 text-[11px] tracking-[0.2em] text-[#A37C34] w-max"
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
              }}
            >
              THE PROBLEM WITH SUMMITS
            </div>

            {/* HEADING */}
            <h2
              className="text-white text-4xl md:text-6xl leading-tight"
              style={{
                fontFamily: "Cormorant Garamond",
                fontWeight: "300",
              }}
            >
              YOU ATTEND <br />

              <span
                className="text-[#A37C34]"
                style={{
                  fontStyle: "italic",
                }}
              >
                HUNDREDS OF EVENTS.
              </span>

              <br />

              YOU HAVE <span className="text-[#A37C34]">ONE REAL</span>{" "}
              CONVERSATION.
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="pt-0 md:pt-15 md:pl- w-full lg:w-[621px] text-[#FAFAFA] text-[16px] leading-[24px] space-y-5"
            style={{
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            <p>
              Large-format conferences give you a lanyard and a hall full of strangers.
              The real business happens in the hallway — the quiet dinner, the walk
              to the car, the WhatsApp thread formed two days later.
            </p>

            <p>
              TableOne is built entirely around that one real conversation.
              Fifteen handpicked principals. One room. Three to four hours of honest,
              consequential discussion — with exactly the right people at exactly
              the right table.
            </p>

            <p>
              No keynotes. No panels. No sponsored sessions. No audience.
              Only the room, the meal, and the people who make things happen in India.
            </p>
          </motion.div>
        </div>

        {/* 🔽 CARDS */}
       {/* 🔽 CARDS */}
{/* 🔽 CARDS */}
<div
  className="
    mt-12
    grid
    grid-cols-1
    md:grid-cols-3
    gap-5
    md:gap-7
  "
>
  {[
    {
      icon: Users,
      title: "15",
      subtitle: "SEATS PER TABLE",
      desc: "Every seat individually reviewed. Not one filled by coincidence or category quota.",
    },
    {
      icon: Clock3,
      title: "3–4",
      subtitle: "HOURS OF CONVERSATION",
      desc: "A curated multi-course dinner designed to slow the room down and open the mind up.",
    },
    {
      icon: ShieldCheck,
      title: "0",
      subtitle: "CAMERAS. MEDIA. RECORDING.",
      desc: "Absolute. Non-negotiable. What is said at the Table stays at the Table.",
    },
  ].map((card, i) => {
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
          rounded-[32px]
          border
          border-white/10
          bg-[#151515]/70
          backdrop-blur-xl
          p-[1px]
          transition-all
          duration-500
          hover:border-[#A37C34]/40
          hover:shadow-[0_0_40px_rgba(163,124,52,0.18)]
        "
      >
        {/* BORDER GLOW */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
            bg-gradient-to-br
            from-[#A37C34]/20
            via-transparent
            to-transparent
          "
        />

        {/* INNER CARD */}
        <div
          className="
            relative
            z-10
            h-full
            min-h-[390px]
            rounded-[31px]
            bg-[#111111]
            px-6
            py-8
            md:px-7
            md:py-9
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* TOP ICON BOX */}
          <div
            className="
              relative
              mb-8
              flex
              items-center
              justify-center
            "
          >
            {/* OUTER RING */}
            <div
              className="
                absolute
                w-[95px]
                h-[95px]
                rounded-full
                border
                border-[#A37C34]/20
              "
            />

            {/* INNER ICON */}
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 4,
              }}
              className="
                relative
                z-10
                w-[74px]
                h-[74px]
                rounded-2xl
                flex
                items-center
                justify-center
                bg-gradient-to-br
                from-[#A37C34]
                to-[#D6B06A]
                shadow-[0_15px_35px_rgba(163,124,52,0.30)]
              "
            >
              <Icon
                size={30}
                className="text-black"
                strokeWidth={2.2}
              />
            </motion.div>
          </div>

          {/* NUMBER */}
          <h3
            className="
              text-[52px]
              md:text-[58px]
              text-white
              leading-none
              mb-5
            "
            style={{
              fontFamily: "Cormorant Garamond",
              fontWeight: "300",
            }}
          >
            {card.title}
          </h3>

          {/* SUBTITLE */}
          <p
            className="
              text-[#D6B06A]
              text-[18px]
              md:text-[20px]
              uppercase
              tracking-[0.08em]
              leading-[1.4]
              mb-5
              max-w-[260px]
            "
            style={{
              fontFamily: "Inter",
              fontWeight: "500",
            }}
          >
            {card.subtitle}
          </p>

          {/* DIVIDER */}
          <div className="w-[60px] h-[1px] bg-[#A37C34]/40 mb-5" />

          {/* DESCRIPTION */}
          <p
            className="
              text-[#EDEDED]
              text-[15px]
              leading-[26px]
              max-w-[300px]
            "
            style={{
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            {card.desc}
          </p>
        </div>
      </motion.div>
    );
  })}
</div>

      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
import icon1 from "../img/icon-1.png";
import icon2 from "../img/icon-2.png";
import icon3 from "../img/icon-3.png";

export default function ProblemSection() {
  return (
    <section
      className="w-full py-24"
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #3D2E13 134.42%)",
      }}
    >
      <div className="max-w-[1272px] mx-auto px-5 md:px-10">

        {/* 🔝 TOP CONTENT */}
        <div className="flex flex-col lg:flex-row justify-between gap-[30px]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[621px] flex flex-col gap-[12px]"
          >

            <div className="mb-10 md:mb-13 border border-[#A37C34] px-4 py-2 text-[11px] tracking-[0.2em] text-[#A37C34] w-max">
              THE PROBLEM WITH SUMMITS
            </div>

            <h2
              className="text-white text-4xl md:text-5xl leading-tight"
              style={{ fontFamily: "Ivy Mode, serif" }}
            >
              YOU ATTEND <br />
              <span className="text-[#A37C34] italic ">
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
            className="pt-5 md:pt-25 md:pl-15 w-full lg:w-[621px] text-[#FAFAFA] text-[16px] leading-[24px] space-y-5"
            style={{ fontFamily: "Inter, sans-serif" }}
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
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-[30px]">

          {[
            {
              icon: icon1,
              title: "15",
              subtitle: "SEATS PER TABLE",
              desc: "Every seat individually reviewed. Not one filled by coincidence or category quota.",
            },
            {
              icon: icon2,
              title: "3–4",
              subtitle: "HOURS OF CONVERSATION",
              desc: "A curated multi-course dinner designed to slow the room down and open the mind up.",
            },
            {
              icon: icon3,
              title: "0",
              subtitle: "CAMERAS. MEDIA. RECORDING.",
              desc: "Absolute. Non-negotiable. What is said at the Table stays at the Table.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="w-full max-w-[404px] h-[406px] border border-[#A37C34] rounded-[4px] p-[16px] flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(163,124,52,0.25)]"
            >
              {/* ICON */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-[122px] h-[122px] flex items-center justify-center mb-[28px]"
              >
                <img src={card.icon} alt="icon" className="w-[108px] h-[108px]" />
              </motion.div>

              {/* NUMBER */}
              <h3
                className="text-[48px] text-[#FAFAFA] mb-[16px]"
                style={{ fontFamily: "Ivy Mode" }}
              >
                {card.title}
              </h3>

              {/* TITLE */}
              <p className="text-[#A37C34] text-[21px] uppercase tracking-[0.08em] mb-[16px] min-h-[52px] flex items-center justify-center">
                {card.subtitle}
              </p>

              {/* DESC */}
              <p className="text-[#FAFAFA] text-[16px] leading-[24px] min-h-[72px]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
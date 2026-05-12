import React from "react";
import { motion } from "framer-motion";

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
      className="w-full overflow-hidden pt-10 md:pt-20"
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #16120D 100%)",
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
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full lg:w-[821px] flex flex-col gap-[12px]"
          >

            {/* TAG */}
            <div
              className="
                mb-1
                border
                border-[#A37C34]
                px-4
                py-2
                text-[11px]
                tracking-[0.2em]
                text-[#A37C34]
                w-max
              "
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
              }}
            >
              THE PROBLEM WITH SUMMITS
            </div>

            {/* HEADING */}
            <h2
              className="
                text-white
                text-4xl
                md:text-6xl
                leading-tight
              "
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

              YOU HAVE{" "}
              <span className="text-[#A37C34]">
                ONE REAL
              </span>{" "}
              CONVERSATION.
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pt-0
              md:pt-15
              w-full
              lg:w-[621px]
              text-[#FAFAFA]
              text-[16px]
              leading-[24px]
              space-y-5
            "
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

        {/* 🔽 PREMIUM STATS SECTION */}
        <div
          className="
            mt-14
            border-t
            border-[#A37C34]/20
          "
        >
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
            "
          >
            {[
              {
                number: "15",
                heading: "Seat Per Table",
                desc: "Every seat individually reviewed. Not one filled by coincidence or category quota.",
              },
              {
                number: "3-4",
                heading: "Hours of Conversation",
                desc: "A curated multi-course dinner designed to slow the room down and open the mind up.",
              },
              {
                number: "0",
                heading: "Cameras. Media. Recording.",
                desc: "Absolute. Non-negotiable. What is said at the Table stays at the Table.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                }}
                className="
                  group
                  relative

                  min-h-[330px]
                  md:min-h-[360px]

                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center

                  px-7
                  py-12

                  sm:px-10
                  sm:py-14

                  md:px-10
                  md:py-16

                  overflow-hidden

                  transition-all
                  duration-700

                  bg-transparent

                  hover:bg-[linear-gradient(180deg,#181818_0%,#111111_100%)]

                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]

                  will-change-transform
                "
              >

                {/* PREMIUM HOVER BORDER */}
                <div
                  className="
                    absolute
                    inset-0

                    border
                    border-transparent

                    group-hover:border-[#A37C34]/30

                    transition-all
                    duration-700
                  "
                />

                {/* PREMIUM TOP LIGHT */}
                <div
                  className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2

                    w-0
                    h-[1px]

                    bg-[#D6B06A]

                    group-hover:w-full

                    transition-all
                    duration-700
                  "
                />

                {/* GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100

                    transition-all
                    duration-700

                    bg-[radial-gradient(circle_at_top,rgba(163,124,52,0.12),transparent_60%)]
                  "
                />

                {/* DESKTOP DIVIDER */}
                {i !== 2 && (
                  <div
                    className="
                      hidden
                      md:block
                      absolute
                      top-0
                      right-0
                      w-[1px]
                      h-full
                      bg-[#A37C34]/20
                    "
                  />
                )}

                {/* MOBILE DIVIDER */}
                {i !== 2 && (
                  <div
                    className="
                      md:hidden
                      absolute
                      bottom-0
                      left-1/2
                      -translate-x-1/2
                      w-[88%]
                      h-[1px]
                      bg-[#A37C34]/15
                    "
                  />
                )}

                {/* NUMBER */}
                <h2
                  className="
                    relative
                    z-10

                    text-center
                    uppercase

                    text-[90px]
                    sm:text-[120px]
                    md:text-[180px]

                    leading-[0.9]

                    tracking-[0.04em]

                    text-[#8B6826]

                    transition-all
                    duration-700
                    ease-out

                    group-hover:text-[#D6B06A]
                  "
                  style={{
                    fontFamily: "Ivy Mode",
                    fontWeight: "400",
                    fontStyle: "normal",
                    lineHeight: "100%",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.number}
                </h2>

                {/* TITLE */}
                <h3
                  className="
                    relative
                    z-10

                    text-white

                    text-[30px]
                    sm:text-[36px]
                    md:text-[46px]

                    leading-[1.05]

                    mt-3

                    max-w-[320px]

                    transition-all
                    duration-700
                    ease-out

                    group-hover:text-[#F4D08A]
                  "
                  style={{
                    fontFamily: "Cormorant Garamond",
                    fontWeight: "300",
                  }}
                >
                  {item.heading}
                </h3>

                {/* GOLD LINE */}
                <div
                  className="
                    relative
                    z-10

                    w-[90px]
                    h-[1px]

                    bg-[#8B6826]

                    mt-6
                    mb-6

                    transition-all
                    duration-700

                    group-hover:w-[120px]
                    group-hover:bg-[#D6B06A]
                  "
                />

                {/* DESCRIPTION */}
                <p
                  className="
                    relative
                    z-10

                    text-white/78

                    text-[13px]
                    sm:text-[14px]
                    md:text-[15px]

                    leading-[1.9]

                    max-w-[310px]

                    transition-all
                    duration-700
                    ease-out

                    group-hover:text-white/95
                  "
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                  }}
                >
                  {item.desc}
                </p>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
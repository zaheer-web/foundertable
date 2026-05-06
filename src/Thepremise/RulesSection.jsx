import React from "react";
import bg from "../img/bg-2.png";
import { motion } from "framer-motion";

/* 👇 PREMIUM FONTS */
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/400-italic.css";

export default function RulesSection() {
  const rules = [
    {
      num: "01",
      title: "BY INVITATION ONLY",
      desc: "No application guarantees a seat. All invitations are extended personally, after a private review by the TableOne council.",
    },
    {
      num: "02",
      title: "CURATED ROOM",
      desc: "Every seat is intentional. No randomness, only high-value alignment.",
    },
    {
      num: "03",
      title: "NO DISTRACTIONS",
      desc: "No media. No devices. Only focused conversations.",
    },
    {
      num: "04",
      title: "QUALITY OVER QUANTITY",
      desc: "Depth matters more than scale.",
    },
    {
      num: "05",
      title: "CONFIDENTIALITY",
      desc: "Everything said at the table stays at the table.",
    },
    {
      num: "06",
      title: "LONG TERM VALUE",
      desc: "Relationships built here compound over time.",
    },
  ];

  return (
    <section
      id="protocol"
      className="
        relative
        w-full
        min-h-[900px]
        text-white
        flex
        items-center
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/78"></div>

      {/* MAIN */}
      <div
        className="
          relative
          max-w-7xl
          mx-auto
          w-full
          px-5
          md:px-12
          py-16
          grid
          md:grid-cols-2
          gap-10
          items-start
        "
      >
        {/* LEFT */}
        <div className="flex flex-col h-[520px] md:h-[650px]">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-7"
          >
            {/* TAG */}
            <p
              className="
                text-[#A37C34]
                text-[10px]
                md:text-[11px]
                border
                border-[#A37C34]
                inline-block
                px-4
                py-2
                mb-6
                tracking-[0.2em]
              "
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
              }}
            >
              THE TABLEONE PROTOCOL
            </p>

            {/* TITLE */}
            <h2
              className="
                text-[38px]
                md:text-[58px]
                leading-[0.95]
                text-white
              "
              style={{
                fontFamily:
                  "Cormorant Garamond",
                fontWeight: "300",
              }}
            >
              SIX RULES THAT MAKE
              <br />

              THE ROOM{" "}
              <span className="text-[#A37C34] italic">
                WORK.
              </span>
            </h2>
          </motion.div>

          {/* RULE LIST */}
          <div
            className="
              overflow-y-auto
              pr-2
              md:pr-4
              space-y-7
              custom-scroll
            "
          >
            {rules.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                whileHover={{ scale: 1.02 }}
                className="
                  flex
                  gap-5
                  group
                  cursor-pointer
                  transition-all
                  duration-300
                "
              >
                {/* NUMBER */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="
                    text-[#A37C34]
                    text-[42px]
                    md:text-[64px]
                    leading-none
                    transition-all
                    duration-300
                    group-hover:text-white
                    min-w-[60px]
                  "
                  style={{
                    fontFamily:
                      "Cormorant Garamond",
                    fontWeight: "300",
                  }}
                >
                  {item.num}
                </motion.div>

                {/* TEXT */}
                <div className="pt-1">
                  {/* TITLE */}
                  <h4
                    className="
                      text-[13px]
                      md:text-[17px]
                      tracking-[0.08em]
                      mb-2
                      uppercase
                      group-hover:text-[#A37C34]
                      transition-all
                      duration-300
                    "
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "500",
                    }}
                  >
                    {item.title}
                  </h4>

                  {/* DESC */}
                  <p
                    className="
                      text-gray-300
                      text-[13px]
                      md:text-[14px]
                      leading-[1.8]
                      max-w-md
                      group-hover:text-white
                      transition-all
                      duration-300
                    "
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "400",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="
            flex
            items-center
            md:mt-36
            md:pl-12
          "
        >
          <div>
            {/* TEXT */}
            <p
              className="
                text-[28px]
                md:text-[46px]
                leading-[1.25]
                text-white
              "
              style={{
                fontFamily:
                  "Cormorant Garamond",
                fontWeight: "300",
              }}
            >
              The most consequential
              business relationships
              in India were not formed
              in conference halls.

              <span className="text-[#A37C34] italic block mt-4">
                They were formed in
                rooms where no one
                was watching.
              </span>
            </p>

            {/* BUTTON */}
           {/* BUTTON */}
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}

  /* 👇 ADD THIS */
  onClick={() => {
    const section =
      document.getElementById("contact");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  }}

  className="
    mt-8
    border
    border-[#A37C34]
    text-[#A37C34]
    px-6
    py-3
    text-[11px]
    tracking-[0.2em]
    uppercase
    hover:bg-[#A37C34]
    hover:text-black
    transition-all
    duration-300
  "
  style={{
    fontFamily: "Inter",
    fontWeight: "500",
  }}
>
  THE TABLEONE PROTOCOL
</motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
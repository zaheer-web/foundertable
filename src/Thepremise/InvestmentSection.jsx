import React from "react";
import img from "../img/img-3.png";
import { motion } from "framer-motion";

import {
  Crown,
  Wine,
  Users2,
  Handshake,
  Globe,
  ShieldCheck,
} from "lucide-react";

/* 👇 PREMIUM FONTS */
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/400-italic.css";

export default function InvestmentSection() {
  const features = [
    {
      icon: Crown,
      text: "Boutique venue, exclusively reserved",
    },
    {
      icon: Wine,
      text: "Full multi-course dinner & beverages",
    },
    {
      icon: Users2,
      text: "Pre-event curated guest dossier",
    },
    {
      icon: Handshake,
      text: "Host-facilitated conversation",
    },
    {
      icon: ShieldCheck,
      text: "Consent-based post-table introductions",
    },
    {
      icon: Globe,
      text: "Lifetime seat in the TableOne network",
    },
  ];

  return (
    <section
      id="seat"
      className="w-full overflow-hidden text-white "
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #3D2E13 134.42%)",
      }}
    >
      {/* MAIN */}
      <div
        className="
          max-w-[1500px]
          mx-auto
          grid
          lg:grid-cols-2
          items-stretch
          min-h-[720px]
        "
      >
        {/* LEFT IMAGE */}
        <div
          className="
            relative
            w-full
            h-[320px]
            sm:h-[420px]
            lg:h-full
            overflow-hidden
          "
        >
          <motion.img
            src={img}
            alt="dinner"
            className="
              w-full
              h-full
              object-cover
            "
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/25 to-black/70" />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            flex
            items-center
            h-full
            mt-10
          "
        >
          <div
            className="
              w-full
              max-w-[580px]
              px-6
              md:px-10
              py-12
              flex
              flex-col
              justify-center
            "
          >
            {/* TAG */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              className="
                border
                border-[#A37C34]
                text-[#A37C34]
                text-[10px]
                tracking-[0.20em]
                px-4
                py-2
                w-max
                mb-6
              "
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
              }}
            >
              THE INVESTMENT
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              className="
                text-[34px]
                sm:text-[42px]
                md:text-[52px]
                leading-[0.96]
                text-white
                mb-5
              "
              style={{
                fontFamily:
                  "Cormorant Garamond",
                fontWeight: "300",
              }}
            >
              A SEAT AT THE
              TABLE IS PRICED
              AT ONE TRUTH—

              <span className="text-[#A37C34] italic block mt-2">
                ACCESS HAS
                REAL VALUE.
              </span>
            </motion.h2>

            {/* PRICE */}
            <motion.h3
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              className="
                text-[36px]
                md:text-[96px]
                text-white
                mb-5
              "
              style={{
                fontFamily:
                  "Cormorant Garamond",
                fontWeight: "300",
              }}
            >
              ₹25,000
            </motion.h3>

            {/* SUB TEXT */}
            <div
              className="
                flex
                flex-wrap
                gap-2
                mb-7
              "
            >
              {[
                "PER PRINCIPAL",
                "PER TABLE",
                "ALL-INCLUSIVE",
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    border
                    border-[#A37C34]/20
                    bg-[#A37C34]/10
                    text-[#D6B06A]
                    px-3
                    py-2
                    text-[10px]
                    tracking-[0.14em]
                    rounded-full
                  "
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* FEATURES */}
            <ul className="space-y-3 mb-8">
              {features.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.li
                    key={i}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: i * 0.08,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.3,
                    }}
                    className="
                      flex
                      items-center
                      gap-3
                      group
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        w-[36px]
                        h-[36px]
                        rounded-full
                        border
                        border-[#A37C34]/20
                        bg-[#A37C34]/10
                        flex
                        items-center
                        justify-center
                        group-hover:bg-[#A37C34]
                        transition-all
                        duration-300
                      "
                    >
                      <Icon
                        size={16}
                        className="
                          text-[#D6B06A]
                          group-hover:text-black
                          transition-all
                          duration-300
                        "
                        strokeWidth={2}
                      />
                    </div>

                    {/* TEXT */}
                    <p
                      className="
                        text-[13px]
                        md:text-[14px]
                        text-gray-300
                        leading-[1.6]
                        group-hover:text-white
                        transition-all
                        duration-300
                      "
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "400",
                      }}
                    >
                      {item.text}
                    </p>
                  </motion.li>
                );
              })}
            </ul>

            {/* BUTTON */}
            {/* BUTTON */}
<div>
  <motion.button
    whileHover={{
      scale: 1.04,
    }}
    whileTap={{
      scale: 0.95,
    }}
    
    /* 👇 ADD THIS */
    onClick={() => {
      const section =
        document.getElementById("contact");

      section?.scrollIntoView({
        behavior: "smooth",
      });
    }}

    className="
      border
      border-[#A37C34]
      text-[#D6B06A]
      px-6
      py-3
      text-[11px]
      tracking-[0.18em]
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
    REQUEST AN INVITATION
  </motion.button>

  {/* FOOTER TEXT */}
  <p
    className="
      text-[12px]
      md:text-[13px]
      text-gray-400
      mt-4
      leading-[1.7]
      max-w-[480px]
    "
    style={{
      fontFamily: "Inter",
      fontWeight: "400",
    }}
  >
    TableOne does not sell seats.
    Every invitation is personal.
    Every seat is earned.
  </p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
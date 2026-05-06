import React from "react";
import rightImg from "../img/img-4.png";
import { motion } from "framer-motion";

/* 👇 PREMIUM FONTS */
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/400-italic.css";

export default function ContactFormSection() {
  return (
    <section
      id="contact"
      className="w-full text-white overflow-hidden "
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #3D2E13 134.42%)",
      }}
    >
      <div
        className="
        
          w-full
          min-h-screen
          grid
          lg:grid-cols-2
          items-stretch
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            h-full
            mt-20
            
            flex
            items-center
            justify-center
            px-5
            md:px-10
            py-14
            lg:py-0
          
          "
        >
          <div
            className="
              w-full
              max-w-[560px]
              flex
              flex-col
              justify-center
            "
          >
            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="
                border
                border-[#A37C34]
                text-[#A37C34]
                text-[10px]
                md:text-[11px]
                tracking-[0.22em]
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
              REQUEST AN INVITATION
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="
                text-[38px]
                sm:text-[48px]
                md:text-[58px]
                leading-[0.95]
                text-white
                mb-5
              "
              style={{
                fontFamily:
                  "Cormorant Garamond",
                fontWeight: "300",
              }}
            >
              TELL US WHO
              YOU ARE.

              <span className="text-[#A37C34] italic block mt-2">
                WE’LL DECIDE
                TOGETHER.
              </span>
            </motion.h2>

            {/* DESC */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="
                text-gray-300
                text-[13px]
                md:text-[15px]
                leading-[1.9]
                mb-8
                max-w-[520px]
              "
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
              }}
            >
              This is not an application form.
              It is the beginning of a private
              conversation about whether
              TableOne is the right room
              for you — and whether you
              are the right principal for
              the Table.
            </motion.p>

            {/* FORM */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "FULL NAME",
                "DESIGNATION & ORGANISATION",
                "EMAIL ADDRESS",
                "MOBILE NUMBER",
                "INDUSTRY / DOMAIN",
                "CITY OF PREFERENCE",
              ].map((label, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.08,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.3,
                  }}
                >
                  {/* LABEL */}
                  <label
                    className="
                      block
                      text-[10px]
                      tracking-[0.18em]
                      text-[#D6B06A]
                      mb-3
                    "
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "500",
                    }}
                  >
                    {label}
                  </label>

                  {/* INPUT */}
                  <input
                    placeholder="Enter here..."
                    className="
                      w-full
                      bg-white/[0.04]
                      border
                      border-white/10
                      h-[52px]
                      px-4
                      text-[13px]
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#A37C34]
                      focus:bg-white/[0.06]
                      hover:border-[#A37C34]/40
                    "
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "400",
                    }}
                  />
                </motion.div>
              ))}

              {/* TEXTAREA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                className="md:col-span-2"
              >
                {/* LABEL */}
                <label
                  className="
                    block
                    text-[10px]
                    tracking-[0.18em]
                    text-[#D6B06A]
                    mb-3
                  "
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                  }}
                >
                  WHAT DO YOU BRING TO THE TABLE?
                </label>

                {/* TEXTAREA */}
                <textarea
                  placeholder="In two or three sentences..."
                  className="
                    w-full
                    bg-white/[0.04]
                    border
                    border-white/10
                    h-[110px]
                    px-4
                    py-4
                    text-[13px]
                    text-white
                    outline-none
                    resize-none
                    transition-all
                    duration-300
                    focus:border-[#A37C34]
                    focus:bg-white/[0.06]
                    hover:border-[#A37C34]/40
                  "
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                  }}
                />
              </motion.div>

              {/* BUTTON */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                className="md:col-span-2 pt-2"
              >
                <motion.button
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    border
                    border-[#A37C34]
                    bg-[#A37C34]
                    text-black
                    px-7
                    py-3
                    text-[11px]
                    tracking-[0.18em]
                    uppercase
                    hover:bg-[#8D6A2F]
                    transition-all
                    duration-300
                  "
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "600",
                  }}
                >
                  SUBMIT FOR CONSIDERATION
                </motion.button>

                {/* FOOTER TEXT */}
                <p
                  className="
                    text-[12px]
                    md:text-[13px]
                    text-gray-400
                    mt-5
                    leading-[1.8]
                    max-w-[520px]
                  "
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                  }}
                >
                  All submissions are reviewed
                  privately. You will receive a
                  personal response within five
                  business days. TableOne maintains
                  absolute discretion — your
                  submission is never shared.
                </p>
              </motion.div>
            </form>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            relative
            h-[340px]
            sm:h-[450px]
            lg:h-full
            overflow-hidden
          "
        >
          {/* IMAGE */}
          <motion.img
            src={rightImg}
            alt="table"
            className="
              w-full
              h-full
              object-cover
            "
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/25 to-black/70" />
        </div>
      </div>
    </section>
  );
}
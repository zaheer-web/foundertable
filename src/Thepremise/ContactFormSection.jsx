import React from "react";
import rightImg from "../img/img-4.png";
import { motion } from "framer-motion";

export default function ContactFormSection() {
  return (
    <section id="contact"
      className="w-full text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #3D2E13 134.42%)",
      }}
    >
      <div className="w-full h-auto lg:h-[1000px] grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="h-full flex items-center justify-center px-6 md:px-10">
          
          <div className="w-full max-w-[551px] flex flex-col justify-center gap-6 py-10 lg:py-0">

            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="border border-[#A37C34] text-[#A37C34] text-[11px] tracking-[0.2em] px-4 py-2 w-max md:mt-15"
            >
              REQUEST AN INVITATION
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-xl md:text-5xl font-light leading-tight"
            >
              TELL US WHO YOU ARE.
              <br />
              <span className="text-[#A37C34] italic">
                WE’LL DECIDE TOGETHER.
              </span>
            </motion.h2>

            {/* DESC */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-gray-300 text-xs md:text-[17px] leading-relaxed"
            >
              This is not an application form. It is the beginning of a private conversation about whether TableOne is the right room for you — and whether you are the right principal for the Table.
            </motion.p>

            {/* FORM */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-3">

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
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <label className="label">{label}</label>
                  <input
                    className="input transition-all duration-300 focus:border-[#A37C34] focus:shadow-[0_0_10px_rgba(163,124,52,0.4)] hover:scale-[1.02]"
                    placeholder="Enter here..."
                  />
                </motion.div>
              ))}

              {/* TEXTAREA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="md:col-span-2"
              >
                <label className="label">
                  WHAT DO YOU BRING TO THE TABLE?
                </label>
                <textarea
                  className="input h-[80px] transition-all duration-300 focus:border-[#A37C34] focus:shadow-[0_0_10px_rgba(163,124,52,0.4)] hover:scale-[1.02]"
                  placeholder="In two or three sentences..."
                />
              </motion.div>

              {/* BUTTON */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
                className="md:col-span-2 mt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#A37C34] text-black px-5 py-2 text-xs md:text-[16px] hover:bg-[#8c692d] transition duration-300"
                >
                  SUBMIT FOR CONSIDERATION
                </motion.button>

                <p className="text-[10px] md:text-[15px] text-gray-200 mt-2 leading-relaxed">
                  All submissions are reviewed privately. You will receive a personal response within five business days. TableOne maintains absolute discretion — your submission is never shared.
                </p>
              </motion.div>

            </form>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-[300px] sm:h-[400px] lg:h-[1000px] overflow-hidden">
          <motion.img
            src={rightImg}
            alt="table"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          />
        </div>

      </div>
    </section>
  );
}
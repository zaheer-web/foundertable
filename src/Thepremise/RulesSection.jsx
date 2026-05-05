import React from "react";
import bg from "../img/bg-2.png";
import { motion } from "framer-motion";

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
    <section id="protocol"
      className="relative w-full min-h-[900px] text-white flex items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 py-16 grid md:grid-cols-2 gap-10">
        
        {/* LEFT */}
        <div className="flex flex-col h-[500px] md:h-[650px]">
          
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="md:mb-7"
          >
            <p className="text-[#A37C34] text-xs border border-[#A37C34] inline-block px-3 py-1 mb-6">
              THE TABLEONE PROTOCOL
            </p>

            <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
              SIX RULES THAT MAKE <br />
              THE ROOM <span className="text-[#A37C34] italic ">WORK.</span>
            </h2>
          </motion.div>

          {/* RULE LIST */}
          <div className="overflow-y-auto pr-4 space-y-8 custom-scroll">
            {rules.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ scale: 1.04 }}
                className="flex gap-6 group cursor-pointer transition-all duration-300"
              >
                
                {/* NUMBER */}
                <motion.div
                  whileHover={{ scale: 1.25 }}
                  className="text-[#A37C34] text-4xl md:text-7xl font-light transition-all duration-300 group-hover:text-white"
                >
                  {item.num}
                </motion.div>

                {/* TEXT */}
                <div>
                  <h4 className="text-sm md:text-xl tracking-wide mb-2 md:mb-4 md:mt-2 group-hover:text-[#A37C34] transition duration-300">
                    {item.title}
                  </h4>

                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-md group-hover:text-white transition duration-300">
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
          className="flex items-center md:mt-40 md:pl-14"
        >
          <div>
            <p className="text-xl md:text-4xl font-light leading-relaxed">
              The most consequential business relationships in India were not
              formed in conference halls. They were formed in{" "}
              <span className="text-[#A37C34] italic">
                rooms where no one was watching.
              </span>
            </p>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 border border-[#A37C34] text-[#A37C34] px-6 py-2 text-sm tracking-wide hover:bg-[#A37C34] hover:text-black transition duration-300"
            >
              THE TABLEONE PROTOCOL
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
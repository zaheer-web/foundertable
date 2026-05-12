import React from "react";
import { Mail, Phone } from "lucide-react";
import {
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

import { motion } from "framer-motion";

import logo from "../img/logo.png";

export default function Footer() {

  // 🔥 SAME SCROLL FUNCTION AS NAVBAR
  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const links = [
    { name: "The Premise", id: "premise" },
    { name: "The Table", id: "table" },
    { name: "The Protocol", id: "protocol" },
    { name: "The Seat", id: "seat" },
  ];

  return (
    <footer className="w-full bg-black text-[#FAFAFA] overflow-x-hidden flex flex-col items-center">

      <div className="w-full max-w-[1512px] min-h-[522px] px-6 py-12 flex flex-col justify-between">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="flex justify-center mb-10"
        >
          <motion.img
            src={logo}
            alt="logo"
            whileHover={{ scale: 1.05 }}
            className="w-[140px] md:w-[200px] object-contain cursor-pointer"
            onClick={() => scrollToSection("premise")}
          />
        </motion.div>

        {/* GRID */}
        <div
          className="
            w-full
            max-w-[1272px]
            mx-auto
            flex
            flex-col
            md:flex-row
            justify-between
            gap-[50px]
            items-center
            text-center
            md:items-start
            md:text-left
          "
        >

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="
              w-full
              md:w-[230px]
              flex
              flex-col
              gap-[30px]
              items-center
              md:items-start
            "
          >
            <h3 className="text-[#C6A75E] text-sm md:text-lg tracking-widest">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-4 text-[#FAFAFA] text-sm">
              {links.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  onClick={() => scrollToSection(item.id)}
                  className="cursor-pointer transition hover:text-[#C6A75E]"
                >
                  {item.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="
              w-full
              md:w-[230px]
              flex
              flex-col
              gap-6
              items-center
              md:items-start
            "
          >
            <p className="text-[#FAFAFA] text-sm leading-6 md:mb-16 md:text-lg">
              All conversations are private. <br />
              All participation is discreet.
            </p>

            <div className="flex flex-col gap-3 text-gray-400 text-sm items-center md:items-start">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Mail size={16} />
                <span>tableone@tableone.com</span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 md:text-[18px] cursor-pointer"
              >
                <Phone size={16} />
                <span>+91 988778 99887</span>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="
              w-full
              md:w-[230px]
              flex
              flex-col
              gap-[24px]
              items-center
              md:items-end
            "
          >
            <h3 className="text-[#C6A75E] text-sm md:text-[25px] md:mt-2 md:mb-2">
              Follow us on
            </h3>

            <div className="flex gap-5 text-xl md:text-[35px]">
              {[FaXTwitter, FaYoutube, FaFacebookF, FaInstagram].map(
                (Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="cursor-pointer text-[#FAFAFA] hover:text-[#C6A75E] transition"
                  >
                    <Icon />
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: false }}
          className="
            w-full
            border-t
            border-[#2a2a2a]
            mt-12
            pt-6
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            text-[#C6A75E]
            text-sm
            text-center
            md:text-left
          "
        >
          <p className="md:ml-20 md:text-[17px]">
            2026 TableOne. All Right Reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0 md:mr-[80px] md:text-[17px]">
            <span className="text-[#FAFAFA] cursor-pointer hover:text-[#C6A75E] transition">
              Privacy.
            </span>

            <span className="text-[#FAFAFA] cursor-pointer hover:text-[#C6A75E] transition">
              Terms.
            </span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
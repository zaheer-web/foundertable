import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "The Premise", id: "premise" },
    { name: "The Table", id: "table" },
    { name: "The Protocol", id: "protocol" },
    { name: "The Seat", id: "seat" },
  ];

  // 🔥 SCROLL FUNCTION
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-b from-[#666666] to-black backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1450px] mx-auto px-5 md:px-10 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[240px]"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-[30px] text-sm">

          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-[#A37C34] transition relative"
            >
              {item.name}
            </button>
          ))}

        </div>

        {/* BUTTON */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#A37C34] hover:bg-[#8c692d] text-black text-sm w-[201px] h-[39px] flex items-center justify-center"
          >
            REQUEST INVITATION
          </button>
        </div>

        {/* MOBILE BTN */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-lg px-6 pb-6"
        >
          <div className="flex flex-col gap-5 text-sm mt-4">

            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(item.id)}
                className="text-white text-left"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#A37C34] text-black px-4 py-2 mt-4 w-full"
            >
              REQUEST INVITATION
            </button>

          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tableImg from "../img/img-2.png";

import {
  BriefcaseBusiness,
  Landmark,
  BadgeDollarSign,
  Building2,
  BrainCircuit,
  Crown,
  Plus,
  Minus,
} from "lucide-react";

/* 👇 PREMIUM FONTS */
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/400-italic.css";

export default function TableSection() {
  const [active, setActive] = useState(null);

  const boxes = [
    {
      icon: BriefcaseBusiness,
      title: "BUSINESS OWNERS & STARTUP FOUNDERS",
      desc: "Operators who have built something meaningful — with skin in the game, real P&L ownership, and the clarity that only comes from having scaled.",
    },
    {
      icon: Landmark,
      title: "EX-BUREAUCRATS & POLICY ARCHITECTS",
      desc: "Former IAS, IFS, and regulatory principals who shaped entire industries and now operate at the intersection of governance and enterprise.",
    },
    {
      icon: BadgeDollarSign,
      title: "FAMILY OFFICES & VC FIRMS",
      desc: "Capital principals who write significant cheques and shape long-term portfolio thesis — decision-makers with conviction.",
    },
    {
      icon: Building2,
      title: "SENIOR MNC & CORPORATE EXECUTIVES",
      desc: "C-suite and divisional heads who control enterprise budgets, global partnerships, and market access at scale.",
    },
    {
      icon: BrainCircuit,
      title: "DOMAIN EXPERTS & STRATEGIC ADVISORS",
      desc: "The rare specialists — economists, legal architects, technologists — whose insight reframes every conversation in the room.",
    },
    {
      icon: Crown,
      title: "RESERVED FOR THE RIGHT PRINCIPAL",
      desc: "TableOne does not sell tickets. Every seat is extended by personal invitation, after a private evaluation of profile, domain, and contribution potential.",
    },
  ];

  return (
    <section
      id="table"
      className="relative w-full overflow-hidden py-30 md:py-32 px-5 md:px-10 text-white"
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #3D2E13 134.42%)",
      }}
    >
      {/* HEADING */}
      <div className="max-w-[1350px] mx-auto mb-14 md:mb-20">
        <div className="flex flex-col gap-5">
          {/* TAG */}
          <div
            className="
              border
              border-[#A37C34]
              px-4
              py-2
              text-[10px]
              md:text-[11px]
              tracking-[0.22em]
              text-[#A37C34]
              w-fit
              bg-white/[0.03]
              backdrop-blur-sm
            "
            style={{
              fontFamily: "Inter",
              fontWeight: "500",
            }}
          >
            COMPOSITION OF THE TABLE
          </div>

          {/* HEADING */}
          <h1
            className="
              text-[38px]
              sm:text-[50px]
              md:text-[72px]
              leading-[0.98]
              text-white
            "
            style={{
              fontFamily: "Cormorant Garamond",
              fontWeight: "300",
            }}
          >
            FIFTEEN CHAIRS.
            <br />

            <span className="text-[#A37C34] italic">
              EACH ONE EARNED.
            </span>
          </h1>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-[0.85fr_1.15fr]
          gap-10
          xl:gap-16
          items-start
        "
      >
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-start sticky top-24"
        >
          <img
            src={tableImg}
            alt="table"
            className="
              w-full
              max-w-[620px]
              object-contain
              drop-shadow-[0_20px_70px_rgba(163,124,52,0.18)]
            "
          />
        </motion.div>

        {/* RIGHT SIDE */}
        {/* RIGHT SIDE */}
<div
  className="
    columns-1
    md:columns-2
    gap-4
    space-y-4
    md:pt-15
  "
>
  {boxes.map((box, i) => {
    const Icon = box.icon;
    const isOpen = active === i;

    return (
      <motion.div
        key={i}
        layout
        transition={{ duration: 0.4 }}
        className="
          break-inside-avoid
          mb-4
          group
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-[#A37C34]/40
          hover:bg-white/[0.06]
        "
      >
        {/* HOVER GLOW */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
            bg-gradient-to-r
            from-[#A37C34]/10
            to-transparent
          "
        />

        {/* TOP */}
        <button
          onClick={() =>
            setActive(isOpen ? null : i)
          }
          className="
            relative
            z-10
            w-full
            p-5
            md:p-6
            flex
            items-start
            justify-between
            gap-4
            text-left
          "
        >
          {/* LEFT */}
          <div className="flex gap-4">
            {/* ICON */}
            <div
              className="
                min-w-[54px]
                h-[54px]
                rounded-2xl
                flex
                items-center
                justify-center
                border
                border-[#A37C34]/20
                bg-[#A37C34]/10
                transition-all
                duration-500
                group-hover:bg-[#A37C34]
              "
            >
              <Icon
                size={24}
                className="
                  text-[#D6B06A]
                  group-hover:text-black
                  transition-all
                  duration-500
                "
                strokeWidth={2}
              />
            </div>

            {/* TITLE */}
            <div>
              <h3
                className="
                  text-[#D6B06A]
                  text-[13px]
                  md:text-[15px]
                  uppercase
                  tracking-[0.08em]
                  leading-[1.6]
                "
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
              >
                {box.title}
              </h3>
            </div>
          </div>

          {/* PLUS / MINUS */}
          <div
            className="
              min-w-[34px]
              h-[34px]
              rounded-full
              border
              border-white/10
              flex
              items-center
              justify-center
              bg-white/[0.04]
            "
          >
            {isOpen ? (
              <Minus
                size={16}
                className="text-[#D6B06A]"
              />
            ) : (
              <Plus
                size={16}
                className="text-[#D6B06A]"
              />
            )}
          </div>
        </button>

        {/* DROPDOWN */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-6">
                {/* LINE */}
                <div className="w-full h-[1px] bg-white/10 mb-5" />

                {/* DESC */}
                <p
                  className="
                    text-[#E4E4E4]
                    text-[13px]
                    md:text-[14px]
                    leading-[1.9]
                  "
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                  }}
                >
                  {box.desc}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOTTOM LINE */}
        <div
          className="
            h-[2px]
            bg-[#A37C34]
            w-0
            group-hover:w-full
            transition-all
            duration-500
          "
        />
      </motion.div>
    );
  })}
</div>
      </div>
    </section>
  );
}


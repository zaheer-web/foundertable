import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../img/za-7.jpeg";
import img2 from "../img/za-5.jpeg";
import img3 from "../img/za-9.jpeg";
import img4 from "../img/za-11.jpeg";
import img5 from "../img/za-10.jpeg";
import bg from "../img/bg-3.png";

import {
  DoorOpen,
  Users,
  UtensilsCrossed,
  Handshake,
  ShieldCheck,
} from "lucide-react";

/* 👇 PREMIUM FONTS */
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/400-italic.css";

export default function TimelineDesktop() {
  const [index, setIndex] = useState(0);
  const lock = useRef(false);
  const sectionRef = useRef(null);

  const data = [
    {
      time: "7:00 PM",
      title: "ARRIVAL",
      desc: "Guests arrive to a privately reserved venue. A curated dossier distributed 48 hours prior means every person already knows who they are meeting.",
      img: img1,
      icon: DoorOpen,
    },
    {
      time: "7:30 PM",
      title: "TABLE OPENS",
      desc: "Guests take their seats. A brief framing from the host. The conversation begins — unscripted, unrecorded, and unhurried.",
      img: img2,
      icon: Users,
    },
    {
      time: "8:00 PM",
      title: "DINNER",
      desc: "Fine cuisine is the backdrop, never the focus. Food slows the room. The best ideas in India have emerged over a second course.",
      img: img3,
      icon: UtensilsCrossed,
    },
    {
      time: "10:00 PM",
      title: "COUNCIL",
      desc: "The plates clear. The conversation expands. Deals are explored. Consent-based introductions are made. Commitments form in the room.",
      img: img4,
      icon: Handshake,
    },
    {
      time: "11:00 PM",
      title: "CLOSE",
      desc: "No press release. No post-event report. No photographs. Only fifteen people know what was said. That is entirely the design.",
      img: img5,
      icon: ShieldCheck,
    },
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      const inView =
        rect.top <= 0 &&
        rect.bottom >= window.innerHeight;

      if (!inView) return;

      if (lock.current) {
        e.preventDefault();
        return;
      }

      const dir = e.deltaY > 0 ? 1 : -1;

      if (index === 0 && dir === -1) return;
      if (
        index === data.length - 1 &&
        dir === 1
      )
        return;

      e.preventDefault();

      lock.current = true;

      setIndex((prev) =>
        Math.min(
          Math.max(prev + dir, 0),
          data.length - 1
        )
      );

      setTimeout(() => {
        lock.current = false;
      }, 700);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, [index, data.length]);

  return (
    <section
      ref={sectionRef}
      className="w-full h-[210vh] hidden md:block"
    >
      <div
        className="
          sticky
          top-0
          h-screen
          overflow-hidden
          flex
          flex-col
          justify-center
          px-8
          py-10
          text-white
          relative
        "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/80" />

        {/* GOLD GLOW */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#A37C34]/10 blur-[180px]" />

        {/* MAIN CONTENT */}
        <div className="relative z-10">
          {/* HEADING */}
          <div className="text-center mb-16">
            {/* TAG */}
            <div
              className="
                inline-flex
                border
                border-[#A37C34]
                px-4
                py-2
                text-[11px]
                tracking-[0.22em]
                text-[#A37C34]
                mb-6
                bg-white/[0.03]
                backdrop-blur-sm
              "
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
              }}
            >
              HOW A TABLE UNFOLDS
            </div>

            {/* TITLE */}
            <h2
              className="
                text-[64px]
                leading-[0.95]
                text-white
              "
              style={{
                fontFamily:
                  "Cormorant Garamond",
                fontWeight: "300",
              }}
            >
              HOW A{" "}
              <span className="text-[#A37C34] italic">
                TABLE
              </span>{" "}
              UNFOLDS
            </h2>
          </div>

          {/* TIMELINE */}
          <div className="max-w-7xl mx-auto mb-16 relative">
            {/* LINE */}
            <div className="absolute left-[8%] right-[8%] top-[42px] h-[1px] bg-white/10" />

            {/* ACTIVE LINE */}
            <motion.div
              className="absolute left-[8%] top-[42px] h-[2px] bg-[#A37C34]"
              animate={{
                width: `${
                  (index /
                    (data.length - 1)) *
                  84
                }%`,
              }}
              transition={{
                duration: 0.5,
              }}
            />

            {/* TIMELINE ITEMS */}
            <div className="grid grid-cols-5 gap-6">
              {data.map((item, i) => {
                const Icon = item.icon;

                const activeCard = i <= index;

                return (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: activeCard
                        ? 1
                        : 0.45,
                    }}
                    className="
                      flex
                      flex-col
                      items-center
                      text-center
                    "
                  >
                    {/* ICON */}
                    <div
                      className={`
                        relative
                        z-10
                        w-[84px]
                        h-[84px]
                        rounded-full
                        flex
                        items-center
                        justify-center
                        border
                        transition-all
                        duration-500
                        ${
                          activeCard
                            ? "bg-[#A37C34] border-[#D6B06A] shadow-[0_0_35px_rgba(163,124,52,0.35)]"
                            : "bg-white/[0.04] border-white/10"
                        }
                      `}
                    >
                      <Icon
                        size={30}
                        className={
                          activeCard
                            ? "text-black"
                            : "text-[#D6B06A]"
                        }
                        strokeWidth={2}
                      />
                    </div>

                    {/* TIME */}
                    <p
                      className={`
                        mt-5
                        text-[14px]
                        tracking-[0.12em]
                        transition-all
                        duration-500
                        ${
                          activeCard
                            ? "text-[#D6B06A]"
                            : "text-white/50"
                        }
                      `}
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "500",
                      }}
                    >
                      {item.time}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ACTIVE CARD */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                }}
                transition={{
                  duration: 0.55,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                "
              >
                <div className="grid grid-cols-[1fr_1fr] h-[300px]">
                  {/* IMAGE */}
                  <div className="relative overflow-hidden h-[300px]">
                    <img
                      src={data[index].img}
                      alt={data[index].title}
                      className="
                        w-full
                        h-full
                        object-cover
                        object-center
                        scale-[1.01]
                      "
                    />

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/35 to-black/70" />
                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                      relative
                      px-8
                      py-7
                      flex
                      flex-col
                      justify-between
                    "
                  >
                    {/* TOP */}
                    <div>
                      {/* TIME */}
                      <p
                        className="
                          text-[#A37C34]
                          text-[11px]
                          tracking-[0.22em]
                          mb-4
                        "
                        style={{
                          fontFamily: "Inter",
                          fontWeight: "500",
                        }}
                      >
                        {data[index].time}
                      </p>

                      {/* TITLE */}
                      <h3
                        className="
                          text-[40px]
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
                        {data[index].title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p
                        className="
                          text-[#E4E4E4]
                          text-[14px]
                          leading-[1.8]
                          max-w-[400px]
                        "
                        style={{
                          fontFamily: "Inter",
                          fontWeight: "400",
                        }}
                      >
                        {data[index].desc}
                      </p>
                    </div>

                    {/* BOTTOM */}
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        pt-6
                      "
                    >
                      {/* STEP */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-[1px] bg-[#A37C34]" />

                        <p
                          className="
                            text-white/50
                            text-[11px]
                            tracking-[0.18em]
                          "
                          style={{
                            fontFamily: "Inter",
                            fontWeight: "500",
                          }}
                        >
                          STEP 0{index + 1}
                        </p>
                      </div>

                      {/* ICON */}
                      <div
                        className="
                          w-[48px]
                          h-[48px]
                          rounded-full
                          border
                          border-[#A37C34]/30
                          bg-[#A37C34]/10
                          flex
                          items-center
                          justify-center
                        "
                      >
                        {React.createElement(
                          data[index].icon,
                          {
                            size: 22,
                            className:
                              "text-[#D6B06A]",
                            strokeWidth: 2,
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* GOLD BOTTOM LINE */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#A37C34] via-[#D6B06A] to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
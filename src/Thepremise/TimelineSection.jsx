import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import img1 from "../img/img-1.png";
import img2 from "../img/img-1.png";
import img3 from "../img/img-1.png";
import img4 from "../img/img-1.png";
import img5 from "../img/img-1.png";

import bg from "../img/bg-3.png";

export default function Timeline() {
  const [index, setIndex] = useState(0);
  const lock = useRef(false);
  const sectionRef = useRef(null);

  const data = [
    { time: "7:00 PM", title: "ARRIVAL", desc: "Guests arrive to a privately reserved venue. A curated dossier distributed 48 hours prior means every person already knows who they are meeting.", img: img1 },
    { time: "7:30 PM", title: "TABLE OPENS", desc: "Guests take their seats. A brief framing from the host. The conversation begins — unscripted, unrecorded, and unhurried.", img: img2 },
    { time: "8:00 PM", title: "DINNER", desc: "Fine cuisine is the backdrop, never the focus. Food slows the room. The best ideas in India have emerged over a second course.", img: img3 },
    { time: "10:00 PM", title: "COUNCIL", desc: "The plates clear. The conversation expands. Deals are explored. Consent-based introductions are made. Commitments form in the room.", img: img4 },
    { time: "11:00 PM", title: "CLOSE", desc: "No press release. No post-event report. No photographs. Only fifteen people know what was said. That is entirely the design.", img: img5 },
  ];

  // 🔥 DESKTOP SCROLL ONLY (UNCHANGED)
  useEffect(() => {
    const handleWheel = (e) => {
      if (window.innerWidth < 768) return;

      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!inView) return;

      if (lock.current) {
        e.preventDefault();
        return;
      }

      const dir = e.deltaY > 0 ? 1 : -1;

      if (index === 0 && dir === -1) return;
      if (index === data.length - 1 && dir === 1) return;

      e.preventDefault();

      lock.current = true;

      setIndex((prev) =>
        Math.min(Math.max(prev + dir, 0), data.length - 1)
      );

      setTimeout(() => {
        lock.current = false;
      }, 600);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [index]);

  return (
    <section ref={sectionRef} className="w-full h-auto md:h-[200vh]">
      <div
        className="md:sticky top-0 md:h-screen flex flex-col justify-start md:justify-center px-4 md:px-6 py-10 md:py-0 text-white"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        {/* HEADING */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl">
            HOW A <span className="text-[#A37C34] italic">TABLE</span> UNFOLDS
          </h2>
        </div>

       
{/* 📱 MOBILE (FULL WIDTH FIXED) */}
{/* ========================= */}
<div className="md:hidden relative flex flex-col gap-12 w-full px-4 overflow-hidden">

  {/* LINE */}
  <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gray-600" />

  {data.map((item, i) => (
    <div key={i} className="flex gap-4 items-start w-full">

      {/* DOT */}
      <div className="relative z-10 mt-2">
        <div
          className={`w-3 h-3 rounded-full ${
            i <= index ? "bg-[#A37C34]" : "bg-gray-400"
          }`}
        />
      </div>

      {/* CARD */}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full h-[260px]"
        >
          <div className="w-full h-full relative rounded-xl overflow-hidden border border-[#A37C34]/70 shadow-xl">

            <img
              src={item.img}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/90" />

            <div className="relative z-10 p-4 flex flex-col justify-between h-full">

              <div>
                <p className="text-[#A37C34] text-lg tracking-wide">
                  {item.time}
                </p>

                <h3 className="text-xl font-medium leading-tight">
                  {item.title}
                </h3>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                {item.desc}
              </p>

            </div>

          </div>
        </motion.div>
      </div>

    </div>
  ))}
</div>

        {/* ========================= */}
        {/* 🖥 DESKTOP (UNCHANGED) */}
        {/* ========================= */}
        <div className="hidden md:block">

          {/* TIMELINE */}
          <div className="max-w-6xl mx-auto w-full mb-24 relative">
            <div className="grid grid-cols-5 relative items-center">

              <div className="absolute left-[10%] right-[10%] top-[6px] h-[2px] bg-gray-500/40" />

              <motion.div
                className="absolute left-[10%] top-[6px] h-[2px] bg-[#A37C34]"
                animate={{
                  width: `${(index / (data.length - 1)) * 80}%`,
                }}
              />

              {data.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      i <= index ? "bg-[#A37C34]" : "bg-gray-400"
                    }`}
                  />
                  <p className="text-sm mt-3">{item.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CARDS */}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-5 gap-x-12 justify-items-center">

            {data.map((item, i) => {
              const isVisible = i <= index;

              return (
                <div key={i}>
                  {isVisible && (
                    <motion.div
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="w-[260px] h-[320px]"
                    >
                      <div className="w-full h-full relative rounded- overflow-hidden border border-[#A37C34]/70">

                        <img
                          src={item.img}
                          className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/80" />

                        <div className="relative z-10 p-5 flex flex-col justify-between h-full">
                          <div>
                            
                            <h3 className="text-xl">{item.title}</h3>
                          </div>

                          <p className="text-lg text-white">
                            {item.desc}
                          </p>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
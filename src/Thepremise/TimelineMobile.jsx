import React from "react";
import { motion } from "framer-motion";

import img1 from "../img/img-1.png";
import img2 from "../img/img-1.png";
import img3 from "../img/img-1.png";
import img4 from "../img/img-1.png";
import img5 from "../img/img-1.png";
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

export default function TimelineMobile() {
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

  return (
    <section className="w-full md:hidden overflow-hidden">
      <div
        className="
          relative
          px-4
          py-16
          text-white
        "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/85" />

        {/* GOLD GLOW */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#A37C34]/10 blur-[100px]" />

        {/* CONTENT */}
        <div className="relative z-10">
          {/* HEADING */}
          <div className="text-center mb-14">
            {/* TAG */}
            <div
              className="
                inline-flex
                border
                border-[#A37C34]
                px-4
                py-2
                text-[10px]
                tracking-[0.22em]
                text-[#A37C34]
                mb-5
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
                text-[40px]
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
          <div className="relative flex flex-col gap-8">
            {/* GOLD LINE */}
            <div className="absolute left-[26px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#A37C34] via-[#D6B06A] to-transparent" />

            {data.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                  }}
                  className="
                    relative
                    flex
                    gap-5
                    items-start
                  "
                >
                  {/* LEFT SIDE */}
                  <div className="relative z-10 pt-2">
                    {/* ICON */}
                    <div
                      className="
                        w-[52px]
                        h-[52px]
                        rounded-full
                        border
                        border-[#A37C34]/30
                        bg-[#A37C34]
                        flex
                        items-center
                        justify-center
                        shadow-[0_0_30px_rgba(163,124,52,0.30)]
                      "
                    >
                      <Icon
                        size={22}
                        className="text-black"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* CARD */}
                  <div className="flex-1 pb-2">
                    <motion.div
                      whileHover={{
                        y: -4,
                      }}
                      className="
                        relative
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-white/10
                        bg-white/[0.04]
                        backdrop-blur-xl
                      "
                    >
                      {/* IMAGE */}
                      <div className="relative h-[180px] overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="
                            w-full
                            h-full
                            object-cover
                            object-center
                            scale-[1.02]
                          "
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

                        {/* TIME */}
                        <div
                          className="
                            absolute
                            top-4
                            left-4
                            px-3
                            py-2
                            rounded-full
                            border
                            border-[#A37C34]/30
                            bg-black/40
                            backdrop-blur-md
                            text-[#D6B06A]
                            text-[11px]
                            tracking-[0.16em]
                          "
                          style={{
                            fontFamily: "Inter",
                            fontWeight: "500",
                          }}
                        >
                          {item.time}
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-5">
                        {/* TITLE */}
                        <h3
                          className="
                            text-[32px]
                            leading-[0.95]
                            text-white
                            mb-4
                          "
                          style={{
                            fontFamily:
                              "Cormorant Garamond",
                            fontWeight: "300",
                          }}
                        >
                          {item.title}
                        </h3>

                        {/* DESC */}
                        <p
                          className="
                            text-[#DADADA]
                            text-[14px]
                            leading-[1.9]
                          "
                          style={{
                            fontFamily: "Inter",
                            fontWeight: "400",
                          }}
                        >
                          {item.desc}
                        </p>

                        {/* BOTTOM */}
                        <div className="flex items-center justify-between pt-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-[1px] bg-[#A37C34]" />

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
                              STEP 0{i + 1}
                            </p>
                          </div>

                          {/* MINI ICON */}
                          <div
                            className="
                              w-[42px]
                              h-[42px]
                              rounded-full
                              border
                              border-[#A37C34]/20
                              bg-[#A37C34]/10
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <Icon
                              size={18}
                              className="text-[#D6B06A]"
                              strokeWidth={2}
                            />
                          </div>
                        </div>
                      </div>

                      {/* BOTTOM GOLD LINE */}
                      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#A37C34] via-[#D6B06A] to-transparent" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
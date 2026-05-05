import React from "react";
import { motion } from "framer-motion";

import img1 from "../img/img-1.png";
import img2 from "../img/img-1.png";
import img3 from "../img/img-1.png";
import img4 from "../img/img-1.png";
import img5 from "../img/img-1.png";
import bg from "../img/bg-3.png";

export default function TimelineMobile() {
  const data = [
    { time: "7:00 PM", title: "ARRIVAL", desc: "Guests arrive to a privately reserved venue. A curated dossier distributed 48 hours prior means every person already knows who they are meeting.", img: img1 },
    { time: "7:30 PM", title: "TABLE OPENS", desc: "Guests take their seats. A brief framing from the host. The conversation begins — unscripted, unrecorded, and unhurried.", img: img2 },
    { time: "8:00 PM", title: "DINNER", desc: "Fine cuisine is the backdrop, never the focus. Food slows the room. The best ideas in India have emerged over a second course.", img: img3 },
    { time: "10:00 PM", title: "COUNCIL", desc: "The plates clear. The conversation expands. Deals are explored. Consent-based introductions are made. Commitments form in the room.", img: img4 },
    { time: "11:00 PM", title: "CLOSE", desc: "No press release. No post-event report. No photographs. Only fifteen people know what was said. That is entirely the design.", img: img5 },
  ];

  return (
    <section className="w-full md:hidden">
      <div
        className="px-4 py-10 text-white"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >

        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-2xl">
            HOW A <span className="text-[#A37C34] italic">TABLE</span> UNFOLDS
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative flex flex-col gap-12">

          {/* GOLD LINE */}
          <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-[#A37C34]" />

          {data.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">

              {/* DOT */}
              <div className="mt-2">
                <div className="w-3 h-3 rounded-full bg-[#A37C34]" />
              </div>

              {/* CARD */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  className="h-[260px]"
                >
                  <div className="w-full h-full relative rounded-xl overflow-hidden border border-[#A37C34]/70">

                    <img
                      src={item.img}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/90" />

                    <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                      <div>
                        <p className="text-[#A37C34] text-lg">
                          {item.time}
                        </p>

                        <h3 className="text-xl">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-gray-300">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </motion.div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
import React from "react";
import tableImg from "../img/img-2.png";

export default function TableSection() {
  const boxes = [
    {
      title: "BUSINESS OWNERS & STARTUP FOUNDERS",
      desc: "Operators who have built something meaningful — with skin in the game, real P&L ownership, and the clarity that only comes from having scaled.",
    },
    {
      title: "EX-BUREAUCRATS & POLICY ARCHITECTS",
      desc: "Former IAS, IFS, and regulatory principals who shaped entire industries and now operate at the intersection of governance and enterprise.",
    },
    {
      title: "FAMILY OFFICES & VC FIRMS",
      desc: "Capital principals who write significant cheques and shape long-term portfolio thesis — decision-makers with conviction.",
    },
    {
      title: "SENIOR MNC & CORPORATE EXECUTIVES",
      desc: "C-suite and divisional heads who control enterprise budgets, global partnerships, and market access at scale.",
    },
    {
      title: "DOMAIN EXPERTS & STRATEGIC ADVISORS",
      desc: "The rare specialists — economists, legal architects, technologists — whose insight reframes every conversation in the room.",
    },
    {
      title: "RESERVED FOR THE RIGHT PRINCIPAL",
      desc: "TableOne does not sell tickets. Every seat is extended by personal invitation, after a private evaluation of profile, domain, and contribution potential.",
    },
  ];

  return (
    <section id="table"
      className="w-full py-16 md:pt-40 px-4 md:px-10 text-white"
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #3D2E13 134.42%)",
      }}
    >
      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-12">
        <p className="text-sm tracking-widest text-[#A37C34] mb-3">
          COMPOSITION OF THE TABLE
        </p>

        <h1 className="text-3xl md:text-6xl font-light leading-tight">
          FIFTEEN CHAIRS.
          <br />
          <span className="text-[#A37C34] italic">
            EACH ONE EARNED.
          </span>
        </h1>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">

        {/* LEFT IMAGE */}
        <div className="flex justify-center items-center h-full">
          <img
            src={tableImg}
            alt="table"
            className="w-full max-w-[700px] object-contain"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4">

          {boxes.map((box, i) => (
            <div
              key={i}
              className="group w-full rounded cursor-pointer overflow-hidden transition-all duration-300 p-6 border border-[#FAFAFA]"
            >
              {/* TITLE */}
              <h3 className="text-[#A37C34] group-hover:text-[#A37C34] text-sm md:text-lg tracking-wide relative inline-block transition-all duration-300">
                {box.title}

                {/* GOLD LINE */}
                <span className="absolute left-0 -bottom-2 h-[1px] bg-[#A37C34] w-full md:w-0 md:group-hover:w-full transition-all duration-300" />
              </h3>

              {/* CONTENT */}
              <div
                className="
                  overflow-hidden 
                  max-h-[200px] md:max-h-0 
                  md:group-hover:max-h-[200px] 
                  transition-all duration-500
                "
              >
                <p
                  className="
                    mt-4 text-[#FAFAFA] text-sm leading-relaxed 
                    opacity-100 md:opacity-0 
                    md:group-hover:opacity-100 
                    transition-all duration-500
                  "
                >
                  {box.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
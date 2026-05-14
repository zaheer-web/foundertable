import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

import { gsap } from "gsap";

import {
  Globe2,
  Crown,
  Handshake,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import Scene3D from "../component/Scene3D";

export default function PartnershipSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  const [count, setCount] = useState(0);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -60]
  );

  /* =========================================
     COUNTER
  ========================================= */
  useEffect(() => {
    if (!isInView) return;

    let start = 0;

    const id = setInterval(() => {
      start++;

      if (start <= 20) {
        setCount(start);
      } else {
        clearInterval(id);
      }
    }, 70);

    return () => clearInterval(id);
  }, [isInView]);

  /* =========================================
     LIGHT GSAP
  ========================================= */
  useEffect(() => {
    if (!isInView || !titleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".reveal-word", {
        yPercent: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".reveal-line", {
        scaleX: 0,
        duration: 0.8,
        ease: "power3.out",
        transformOrigin: "left center",
        delay: 0.2,
      });

      gsap.to(".gold-shimmer", {
        backgroundPositionX: "150%",
        duration: 6,
        repeat: -1,
        ease: "none",
      });
    }, titleRef);

    return () => ctx.revert();
  }, [isInView]);

  /* =========================================
     LIGHT CARD TILT
  ========================================= */
  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const onMove = (e) => {
      const rect = card.getBoundingClientRect();

      const x =
        (e.clientX - rect.left) / rect.width - 0.5;

      const y =
        (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotateY: x * 3,
        rotateX: -y * 3,
        duration: 0.4,
        ease: "power2.out",
        transformPerspective: 900,
      });
    };

    const onLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const features = [
    {
      icon: Globe2,
      title: "Global Expansion",
      text: "Opening international opportunities for visionary founders and investors.",
    },
    {
      icon: Crown,
      title: "Leadership Access",
      text: "Curated rooms with diplomats, investors and global decision makers.",
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      text: "Building meaningful long-term collaborations across industries.",
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: (i = 0) => ({
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-black
        py-20
        sm:py-24
        px-5
        sm:px-8
        md:px-14
      "
    >
      {/* =========================================
         BIGGER 3D SCENE
      ========================================= */}

      <motion.div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center

          scale-[0.9]
          sm:scale-[1.8]
          md:scale-[2]
          lg:scale-[1.4]
        "
        style={{
          opacity: 0.45,
        }}
      >
        <Scene3D />
      </motion.div>

      {/* =========================================
         LIGHT GLOW
      ========================================= */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-120px]
          left-[-100px]
          w-[420px]
          h-[420px]
          bg-[#A37C34]/5
          blur-[120px]
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          scale: [1.08, 1, 1.08],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-120px]
          right-[-100px]
          w-[420px]
          h-[420px]
          bg-[#D6B06A]/5
          blur-[120px]
          pointer-events-none
        "
      />

      {/* =========================================
         GRID
      ========================================= */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.015]
          pointer-events-none
          [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* =========================================
         CONTENT
      ========================================= */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP BADGE */}

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div
            className="
              relative
              border border-[#A37C34]/20
              bg-[#A37C34]/5
              backdrop-blur-md
              px-4 py-2
              text-[#D6B06A]
              text-[10px]
              tracking-[0.25em]
              uppercase
              flex items-center gap-2
              overflow-hidden
            "
          >
            <Sparkles
              size={10}
              className="text-[#D6B06A]"
            />

            <span className="relative z-10">
              Strategic Global Alliance
            </span>
          </div>
        </motion.div>

        {/* =========================================
           MAIN GRID
        ========================================= */}

        <div
          className="
            grid
            lg:grid-cols-[1.15fr_0.85fr]
            gap-10
            lg:gap-14
            items-center
            mt-12
          "
        >

          {/* =========================================
             LEFT SIDE
          ========================================= */}

          <motion.div style={{ y: headingY }}>

            <div className="mb-10" ref={titleRef}>

              {/* MINI TAG */}

              <div className="flex items-center gap-4 mb-5">

                <div className="reveal-line w-10 h-[1px] bg-[#A37C34]" />

                <p
                  className="
                  
                    uppercase
                    tracking-[0.28em]
                    text-[10px]
                    text-[#D6B06A]
                  "
                >
                  Private Leadership Alliance
                </p>
              </div>

              {/* STARTUP */}

              <div className="overflow-hidden">
                <h1
                  className="
                  mb-4
                    reveal-word
                    font-serif
                    text-[#EAEAEA]
                    font-light
                    leading-[0.9]
                    tracking-[-0.03em]
                    text-[62px]
                    sm:text-[82px]
                    md:text-[110px]
                    lg:text-[92px]
                  "
                >
                  Startup
                </h1>
              </div>

              {/* TIMES + WLC */}

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-4
                  md:gap-6
                  -mt-2
                "
              >

                {/* TIMES */}

                <div className="overflow-hidden">
                  <h1
                    className="
                      reveal-word
                      font-serif
                      italic
                      font-light
                      leading-none
                      text-[52px]
                      sm:text-[72px]
                      md:text-[100px]
                      lg:text-[85px]
                      gold-shimmer
                      bg-clip-text
                      text-transparent
                      bg-[length:180%_100%]
                      md:mr-5
                    "
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg,#8C642A 0%,#D6B06A 35%,#F4D58A 50%,#D6B06A 70%,#8C642A 100%)",
                    }}
                  >
                    Times
                  </h1>
                </div>

                {/* ICON */}

                <div
                  className="
                    relative
                    w-[50px]
                    h-[50px]
                    md:w-[64px]
                    md:h-[64px]
                    rounded-full
                    border border-[#A37C34]/20
                    flex items-center justify-center
                    bg-[#A37C34]/5
                    backdrop-blur-md
                    md:mt-3
                  "
                >
                  <span
                    className="
                      text-[#D6B06A]
                      text-[24px]
                      md:text-[32px]
                      font-serif
                    "
                  >
                    &
                  </span>
                </div>

                {/* WLC */}

                <div className="overflow-hidden">
                  <h1
                    className="
                      reveal-word
                      font-serif
                      font-light
                      tracking-[0.18em]
                      text-[#EAEAEA]
                      leading-none
                      text-[42px]
                      sm:text-[64px]
                      md:text-[88px]
                      lg:text-[82px]
                      md:ml-4
                      md:mt-3
                    "
                  >
                    WLC
                  </h1>
                </div>
              </div>

              {/* LINE */}

              <div className="flex items-center gap-4 mt-6">

                <div className="reveal-line w-16 h-[1px] bg-[#A37C34]/40" />

                <p
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-[9px]
                    text-white/30
                  "
                >
                  Strategic Global Partnership
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2}
              className="
                text-[#EAEAEA]/70
                text-[14px]
                sm:text-[15px]
                md:text-[17px]
                leading-[1.9]
                max-w-[680px]
              "
            >
              StartupTimes and WLC unite to create a private ecosystem for founders,
              diplomats, investors and global decision-makers. This collaboration is built
              around exclusive leadership experiences, strategic conversations and
              international opportunities that shape the future of business, innovation
              and cross-border partnerships.
            </motion.p>

            {/* STATS */}

            <div className="flex flex-wrap gap-4 mt-10">

              {[
                {
                  value: `${count}+`,
                  label: "Distinguished Leaders",
                },

                {
                  value: "4 HRS",
                  label: "Closed-Door Discussions",
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={i + 3}
                  className="
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-md
                    px-6 py-5
                    rounded-2xl
                    min-w-[220px]
                  "
                >
                  <h3 className="text-[#D6B06A] text-3xl font-light">
                    {s.value}
                  </h3>

                  <p className="text-white/55 text-sm mt-2">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* BUTTONS */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={5}
              className="flex flex-wrap gap-3 mt-10"
            >

              {/* PRIMARY BUTTON */}

              <button
                className="
                  bg-[#A37C34]
                  hover:bg-[#8d6b2d]
                  text-black
                  px-6 py-3.5
                  text-xs
                  tracking-[0.18em]
                  transition duration-200
                  flex items-center gap-3
                "
              >
                EXPLORE THE PARTNERSHIP

                <ArrowUpRight size={16} />
              </button>

              {/* SECONDARY BUTTON */}

              <button
                className="
                  border border-white/15
                  hover:border-[#A37C34]/40
                  text-white
                  px-6 py-3.5
                  text-xs
                  tracking-[0.18em]
                  transition duration-200
                "
              >
                JOIN THE NETWORK
              </button>
            </motion.div>
          </motion.div>

          {/* =========================================
             RIGHT CARD
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              ref={cardRef}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border border-[#A37C34]/15
                bg-white/[0.03]
                backdrop-blur-md
                p-6 sm:p-8
                shadow-[0_10px_30px_rgba(163,124,52,0.12)]
              "
            >

              <div className="relative z-10">

                <p
                  className="
                    text-[#D6B06A]
                    tracking-[0.25em]
                    text-[10px]
                    uppercase
                  "
                >
                  Private Leadership Network
                </p>

                <h2
                  className="
                    text-[#EAEAEA]
                    text-3xl
                    sm:text-4xl
                    mt-5
                    leading-none
                    font-serif
                    font-light
                  "
                >
                  Building The
                  <br />

                  <span
                    className="
                      bg-clip-text
                      text-transparent
                    "
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg,#D6B06A,#F4D58A,#A37C34)",
                    }}
                  >
                    Future Corridor
                  </span>
                </h2>

                <p className="text-white/60 mt-5 leading-[1.8] text-sm">
                  Exclusive conversations that connect
                  leadership, investment and innovation
                  across global markets.
                </p>

                {/* FEATURES */}

                <div className="mt-8 space-y-3">

                  {features.map((item, i) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={i}
                        className="
                          border border-white/10
                          bg-black/20
                          rounded-2xl
                          p-4
                          flex gap-4
                        "
                      >
                        <div
                          className="
                            min-w-[44px]
                            h-[44px]
                            rounded-xl
                            bg-[#A37C34]/10
                            border border-[#A37C34]/20
                            flex items-center justify-center
                          "
                        >
                          <Icon
                            size={18}
                            className="text-[#D6B06A]"
                          />
                        </div>

                        <div>
                          <h3 className="text-white text-[15px] font-medium">
                            {item.title}
                          </h3>

                          <p className="text-white/50 text-sm mt-1 leading-[1.7]">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
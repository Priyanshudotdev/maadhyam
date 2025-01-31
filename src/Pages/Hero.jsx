import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const COLORS_TOP = ["#480CA8", "#DD335C", "#6366f1", "#9105FF"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #111111 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 1px 24px ${color}`;
  const textColor = useMotionTemplate`${color}`;

  const navigate = useNavigate();
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200 border-none rounded-b-3xl "
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full text-white/70 bg-gray-600/30 px-3 py-1.5 text-[12px] md:text-sm">
          YCCE | IT & CSD Department Presents
        </span>
        <h1 className=" relative max-w-3xl font-pop font-extrabold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-4xl leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight tracking-wide  ">
          MAADHYAM
          <motion.p
            style={{
              color: textColor,
            }}
            className=" absolute right-0 -bottom-1 sm:-bottom-0 font-semibold text-3xl md:text-5xl tracking-wider font-qw"
          >
            Magzine
          </motion.p>
        </h1>

        <p className="mb-7 max-w-xl text-center md:text-base text-sm leading-none lg:text-lg md:leading-relaxed text-white/70 ">
          Where humanity meets technology.
        </p>
        <motion.button
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          style={{
            border,
            boxShadow,
          }}
          onClick={() => navigate("/read")}
          className="group relative flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-gray-50 transition-colors text-white/70 hover:bg-gray-950/80 hover:text-white/90 font-bold "
        >
          Experience Magazine
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>
    </motion.section>
  );
};

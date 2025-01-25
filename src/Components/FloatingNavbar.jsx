import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import Join from "./Join";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const FloatingNavbar = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollYProgress.get() === 0) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  const handleNavigation = (link) => {
    navigate(link);
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex w-screen bg-transparent h-[4rem] fixed inset-x-0 mx-auto backdrop-blur-[5px] z-[5000] px-8 py-4 items-center font-space justify-between",
          className
        )}
      >
        <h1
          onClick={() => handleNavigation("/")}
          className="cursor-pointer text-2xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.500),theme(colors.pink.300),theme(colors.violet.300),theme(colors.purple.400),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] backdrop-blur-sm mt-3  ml-0"
        >
          <img
            src="https://res.cloudinary.com/priyanshukayarkar/image/upload/v1737792631/Redesigned-CSD_1_l8dpzu.png"
            width={50}
            alt=""
          />
        </h1>
        <div className="hidden sm:flex items-center space-x-12 ml-auto">
          {navItems.map((navItem, idx) => (
            <button
              key={`link-${idx}`}
              onClick={() => handleNavigation(navItem.link)}
              className="relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300"
            >
              <span className="text-sm">{navItem.name}</span>
            </button>
          ))}
          <button className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full hover:bg-zinc-800/80">
            <Join text={"Join Us"} />
          </button>
        </div>
        <button
          className="sm:hidden text-white p-2 ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div
            animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-6 h-5 flex flex-col justify-between"
          >
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 6 : 0,
              }}
              className="w-full h-[1.5px] bg-zinc-300 transition-all"
            ></motion.span>
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="w-full h-[1.5px] bg-zinc-300 transition-all"
            ></motion.span>
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -6 : 0,
              }}
              className="w-full h-[1.5px] bg-zinc-300 transition-all"
            ></motion.span>
          </motion.div>
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-[4rem] h-screen left-0 right-0 bg-black/50 backdrop-blur-lg sm:hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center py-4 space-y-4"
              >
                {navItems.map((navItem, idx) => (
                  <motion.button
                    key={`mobile-link-${idx}`}
                    onClick={() => handleNavigation(navItem.link)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-neutral-50 hover:text-neutral-300"
                  >
                    <span className="text-sm">{navItem.name}</span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

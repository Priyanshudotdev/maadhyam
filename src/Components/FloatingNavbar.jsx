import React, { useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom";
import Join from "./Join";

// Utility function to combine class names
const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

export const FloatingNav = ({ navItems, className, onNavClick }) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollYProgress.get() === 0) {
                setVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollYProgress]);

    // const targetRef = scrollToRef["hero"];
    // if (targetRef?.current) {
    //     targetRef.current.scrollIntoView({
    //         behavior: "smooth",
    //         block: "start",
    //     });
    // }

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

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: 0,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.3,
                }}
                className={cn(
                    "flex w-screen bg-transparent h-[4rem] fixed inset-x-0 mx-auto backdrop-blur-[5px] z-[5000] pr-[6.5rem] pl-8 py-4 items-center font-space justify-end space-x-12",
                    className,
                )}
            >
                <h1
                    onClick={() => onNavClick("hero")}
                    className=" cursor-pointer mr-auto text-2xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.500),theme(colors.pink.300),theme(colors.violet.300),theme(colors.purple.400),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] "
                >
                    MY25
                </h1>

                {navItems.map((navItem, idx) => (
                    <button
                        key={`link-${idx}`}
                        onClick={() => onNavClick(navItem.link)}
                        className={cn(
                            "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300",
                        )}
                    >
                        <span className="hidden text-sm sm:block">
                            {navItem.name}
                        </span>
                    </button>
                ))}
                <button className="border hidden sm:block text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full hover:bg-zinc-800/80">
                    <Join text={"Join Us"} />
                </button>
            </motion.div>
        </AnimatePresence>
    );
};

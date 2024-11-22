import React from "react";
import { contact, service1, service3 } from "../assets";
import { useEffect } from "react";
import {
    useMotionTemplate,
    motion,
    useMotionValue,
    animate,
} from "framer-motion";
import {
    FaXTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa6";

import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    const COLORS_TOP = ["#ff2600", "#fa3e0e", "#ff0000"];
    const COLORS_TEXT = ["#480CA8", "#DD335C", "#6366f1", "#9105FF"];
    const color = useMotionValue(COLORS_TOP[0]);
    const colorText = useMotionValue(COLORS_TEXT[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
        });
        animate(colorText, COLORS_TEXT, {
            ease: "easeInOut",
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #111111 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${colorText}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
    const textColor = useMotionTemplate`${colorText}`;
    return (
        <div className="w-full relative z-1 grid gap-5 lg:grid-cols-2  h-full mt-[5rem] ">
            <div className="flex flex-col gap-5 overflow-hidden lg:min-h-[38rem] ">
                <div className="w-full h-full rounded-3xl overflow-hidden ">
                    <img
                        src="https://ycce.edu/wp-content/uploads/2024/03/YCCE-Information-Technology-Department-768x468.jpg"
                        className="w-full h-full bg-cover "
                        alt="IT-DEPARTMENT"
                    />
                </div>
                <div className="w-full h-auto rounded-3xl bg-[#111111] md:p-6 p-4 py-7 lg:p-8 flex flex-col ">
                    <h1 className="text-center font-semibold text-xl ">
                        Our Magzine Heads
                    </h1>
                    <div className=" mt-10 flex items-center justify-center gap-x-4 lg:gap-x-12  tracking-wide ">
                        <span className=" font-semibold md:text-lg ">
                            <h1>Somesh Sharma</h1>
                        </span>
                        <span className=" font-semibold md:text-lg ">
                            <h1>Kashmira Chaoji</h1>
                        </span>
                        <span className="font-semibold md:text-lg ">
                            <h1>Taniya Borkar</h1>
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4 rounded-3xl overflow-hidden bg-[#111111] lg:min-h-[46rem] ">
                <div className=" w-full mt-4 lg:mt-10 px-4 xl:px-8 ">
                    <h4 className=" text-center md:text-lg lg:text-xl leading-normal mb-4">
                        Got questions, feedback, or ideas?
                        <br />
                        Reach out to us!
                    </h4>
                    <span className="flex mb-10 gap-x-6 items-cener justify-center pt-4 md:pt-8">
                        <motion.a
                            href="https://www.instagram.com/maadhyam.it/"
                            style={{ border }}
                            className="flex items-center justify-center p-2 bg-zinc-900 rounded-full transition-colors hover:bg-zinc-800 cursor-pointer "
                            target="_blank"
                        >
                            <FaInstagram className="size-6 md:size-7 lg:size-8 " />
                        </motion.a>
                        <motion.a
                            href="mailto:maadhyam.it@gmail.com"
                            style={{ border }}
                            className="flex items-center justify-center p-2 bg-zinc-900 rounded-full transition-colors hover:bg-zinc-800 cursor-pointer "
                            target="_blank"
                        >
                            <MdOutlineEmail className="size-6 md:size-7 lg:size-8 " />
                        </motion.a>
                    </span>
                </div>
                <div className="relative h-[20rem] bg-zinc-950/50 rounded-xl overflow-hidden md:h-[25rem] lg:h-[30rem] ">
                    <img
                        src="https://images.shiksha.com/mediadata/images/1552039026php8wnYCG.png"
                        width={520}
                        height={400}
                        className="w-full h-full object-cover"
                        alt="Scary robot"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;

import { useEffect, useState } from "react";
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";

const COLORS_TOP = ["#480CA8", "#DD335C", "#6366f1", "#9105FF"];

const LaunchEvent = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 110% 50%, #111111 60%, ${color})`;

    // Set the target date and time: Jan 26, 2025, 10:00 AM
    const targetDate = new Date("2025-01-26T10:00:00").getTime();

    // State to hold the time remaining in seconds
    const [timeRemaining, setTimeRemaining] = useState(
        Math.floor((targetDate - Date.now()) / 1000),
    );

    useEffect(() => {
        const timerInterval = setInterval(() => {
            const currentTime = Math.floor((targetDate - Date.now()) / 1000);
            setTimeRemaining(currentTime <= 0 ? 0 : currentTime);

            if (currentTime <= 0) {
                clearInterval(timerInterval);
            }
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [targetDate]);

    const days = Math.floor(timeRemaining / (3600 * 24));
    const hours = Math.floor((timeRemaining % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    return (
        <section className="w-full bg-neutral-950 mt-20 ">
            <div className="text-center">
                <h1 className="text-white text-3xl md:text-5xl font-bold mb-6">
                    <span className="text-[#DD335C]">Maadhyam</span> Launch
                    Event
                </h1>
                <p className="text-gray-400 text-lg md:text-xl mb-10">
                    Witness the unveiling of our IT Department magazine on{" "}
                    <span className="text-[#6366f1]">January 26, 2025</span>
                </p>
            </div>
            <div className="relative flex flex-col items-center justify-center">
                <motion.div
                    // style={{ backgroundImage }}
                    className="flex items-center justify-center border border-zinc-800 rounded-3xl p-8 lg:p-12 xl:p-16 shadow-lg"
                >
                    <div className="relative z-10 text-center text-white">
                        <div className="flex justify-center gap-8 text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            <div>
                                <span className="block text-[#DD335C]">
                                    {days}
                                </span>
                                <span className="block text-gray-400 text-sm md:text-lg">
                                    Days
                                </span>
                            </div>
                            <div>
                                <span className="block text-[#6366f1]">
                                    {hours}
                                </span>
                                <span className="block text-gray-400 text-sm md:text-lg">
                                    Hours
                                </span>
                            </div>
                            <div>
                                <span className="block text-[#9105FF]">
                                    {minutes}
                                </span>
                                <span className="block text-gray-400 text-sm md:text-lg">
                                    Minutes
                                </span>
                            </div>
                            <div>
                                <span className="block text-[#480CA8]">
                                    {seconds}
                                </span>
                                <span className="block text-gray-400 text-sm md:text-lg">
                                    Seconds
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-300 md:text-lg">
                            Join us as we launch a groundbreaking magazine
                            exploring{" "}
                            <span className="text-[#DD335C]">
                                Human-AI Interaction
                            </span>
                            .
                        </p>
                    </div>
                    <div className="absolute overflow-hidden top-0  left-0 w-full md:w-[95%] h-full pointer-events-none">
                        <img
                            className="w-full h-full rounded-3xl object-cover opacity-10"
                            src={
                                "https://res.cloudinary.com/priyanshukayarkar/image/upload/v1732293380/service-1_wlau57.png"
                            }
                            alt="Background"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LaunchEvent;

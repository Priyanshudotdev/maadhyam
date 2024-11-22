import {
    animate,
    motion,
    useMotionTemplate,
    useMotionValue,
} from "framer-motion";
import { useEffect } from "react";
import { service1, service2, service3 } from "../assets";

const COLORS_TOP = ["#480CA8", "#DD335C", "#6366f1", "#9105FF"];
const Services = () => {
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
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
    const textColor = useMotionTemplate`${color}`;
    return (
        <section className=" w-full bg-neutral-950 mt-[5rem] min-h-screen">
            <div className="">
                <h1 className="max-w-[50rem] text-2xl md:text-[2.8rem] lg:text-[3.3rem] mx-auto mb-12 lg:mb-20 md:text-center">
                    <span className="font-qw text-[2.8rem] md:text-[3.8rem] lg:text-[5rem] ">
                        Magzine
                    </span>{" "}
                    Details
                </h1>
            </div>
            <div className="relative  ">
                <motion.div
                    style={{
                        backgroundImage,
                    }}
                    className="  z-1 flex h-[39rem] items-center mb-5 p-8 border border-zinc-800 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] "
                >
                    <div className="top-0 left-0 absolute w-full h-full pointer-events-none md:w-3/5 xl:w-auto  ">
                        <img
                            className="w-full h-full object-cover md:object-right  "
                            height={730}
                            width={790}
                            alt="Smartest AI"
                            src={service1}
                        />
                    </div>
                    <div className="relative z-1 sm:max-w-[25rem] max-w-[20rem] ml-auto ">
                        <h4 className="text-[2rem] font-semibold leading-normal mb-4">
                            What is Maadhyam ?
                        </h4>
                        <p className=" text-[#c5c5c5] leading-6 md:text-lg mb-[3rem] ">
                            "MAADHYAM" represents the voice of innovation,
                            connecting human creativity with artificial
                            intelligence. Presented by the{" "}
                            <span className="text-[#6366f1]">IT </span>and{" "}
                            <span className="text-[#DD335C]">CSD </span>
                            department , this magazine explores the evolving
                            relationship between humanity and technology,
                            celebrating the fusion of imagination and
                            computation.
                            <br />
                            In-depth articles on AI's role in modern life.
                            Creative perspectives from students and faculty.
                            Future-focused tech trends and innovations.
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className="relative z-1 grid gap-5 lg:grid-cols-2 ">
                <div className="relative min-h-[39rem] bg-[#111111] rounded-3xl  overflow-hidden ">
                    <div className="absolute inset-0">
                        <img
                            src={service2}
                            className="w-full h-full object-cover"
                            width={630}
                            height={750}
                            alt="robot"
                        />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15 ">
                        <h4 className="text-[2rem] font-semibold leading-normal mb-4">
                            Exploring the Intersection of Minds and Machines
                        </h4>
                        <p className=" text-[#c5c5c5] leading-6 md:text-lg mb-[3rem] ">
                            From AI-powered healthcare to ethical dilemmas in
                            machine learning, our magazine delves into the
                            profound ways AI is reshaping the human experience.
                            Be it innovation or introspection, discover it here.
                        </p>
                    </div>
                </div>

                <div className="p-4 rounded-3xl overflow-hidden bg-zinc-900/30 lg:min-h-[46rem] ">
                    <div className="py-12 px-4 xl:px-8 ">
                        <h4 className="text-[2rem] font-semibold leading-normal mb-4">
                            Our Vision
                        </h4>
                        <p className=" text-[#c5c5c5] leading-6 md:text-lg mb-[3rem] ">
                            We envision a world where human intuition and AI’s
                            precision work together to build a harmonious,
                            tech-driven future.
                            <br /> MAADHYAM is a platform to amplify this
                            synergy, offering insights, creativity, and
                            inspiration.
                        </p>
                    </div>
                    <div className="relative h-[20rem] bg-zinc-950/80 rounded-xl overflow-hidden md:h-[25rem] ">
                        <img
                            src={service3}
                            width={520}
                            height={400}
                            className="w-full h-full object-cover"
                            alt="Scary robot"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";

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

  return (
    <section className="w-full bg-neutral-950 mt-20 min-h-screen">
      <div className=" {container} {mx-auto px-2 sm:px-4} ">
        <h1 className="max-w-[50rem] text-2xl md:text-[2.8rem] lg:text-[3.3rem] mx-auto mb-12 lg:mb-20 md:text-center">
          <span className="font-qw text-[2.8rem] md:text-[3.8rem] lg:text-[5rem]">
            Magzine
          </span>{" "}
          Details
        </h1>

        <div className="relative">
          <motion.div
            style={{ backgroundImage }}
            className="z-1 flex h-[39rem] items-center mb-5 p-8 border border-zinc-800 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
          >
            <div className="top-0 left-0 absolute w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right rounded-3xl"
                height={730}
                width={790}
                alt="Smartest AI"
                loading="lazy"
                src="https://res.cloudinary.com/priyanshukayarkar/image/upload/v1732293380/service-1_wlau57.png"
              />
            </div>
            <div className="relative z-1 sm:max-w-[25rem] max-w-[20rem] ml-auto">
              <h4 className="text-[2rem] font-semibold leading-normal mb-4">
                What is Maadhyam ?
              </h4>
              <p className="text-[#c5c5c5] leading-6 md:text-lg mb-[3rem]">
                "MAADHYAM" represents the voice of innovation, connecting{" "}
                <span className="text-[#6366f1]">IT</span> and{" "}
                <span className="text-[#DD335C]">CSD</span> department, this
                magazine explores the evolving relationship between humanity and
                technology, celebrating the fusion of imagination and
                computation.
                <br />
                In-depth articles on AI's role in modern life. Creative
                perspectives from students and faculty. Future-focused tech
                trends and innovations.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Service Cards */}
          <ServiceCard
            image="https://res.cloudinary.com/priyanshukayarkar/image/upload/v1732293379/service-2_w6mxfq.png"
            title="Exploring the Intersection of Minds and Machines"
            description="From AI-powered healthcare to ethical dilemmas in machine learning, our magazine delves into the profound ways AI is reshaping the human experience. Be it innovation or introspection, discover it here."
          />

          <div className="p-4 rounded-3xl overflow-hidden bg-zinc-900/30 lg:min-h-[46rem]">
            <div className="py-12 px-4 xl:px-8">
              <h4 className="text-[2rem] font-semibold leading-normal mb-4">
                Our Vision
              </h4>
              <p className="text-[#c5c5c5] leading-6 md:text-lg mb-12">
                We envision a world where human intuition and AI's precision
                work together to build a harmonious, tech-driven future.
                <br /> MAADHYAM is a platform to amplify this synergy, offering
                insights, creativity, and inspiration.
              </p>
            </div>
            <div className="relative h-[20rem] bg-zinc-950/80 rounded-xl overflow-hidden md:h-[25rem]">
              <img
                src="https://res.cloudinary.com/priyanshukayarkar/image/upload/v1732293378/service-3_amgcru.png"
                width={520}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
                alt="Scary robot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ServiceCard component for better code organization
const ServiceCard = ({ image, title, description }) => (
  <div className="relative min-h-[39rem] bg-[#111111] rounded-3xl overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={image}
        className="w-full h-full object-cover"
        width={630}
        height={750}
        loading="lazy"
        alt={title}
      />
    </div>
    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
      <h4 className="text-[2rem] font-semibold leading-normal mb-4">{title}</h4>
      <p className="text-[#c5c5c5] leading-6 md:text-lg mb-12">{description}</p>
    </div>
  </div>
);

export default Services;

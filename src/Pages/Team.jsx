import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  designTeamHead,
  magazineHeads,
  designTeam,
  newsLetterHead,
  newsLetterTeam,
  editingHead,
  editingTeam,
  dataCollectionHead,
  dataCollectionTeam,
  wallMagazineHead,
  wallMagazineTeam,
  socialMediaHead,
} from "../contants";

const Team = () => {
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
  const textColor = useMotionTemplate`${colorText}`;

  const renderTeamSection = (title, team, isHead = false) => (
    <div className="w-full mt-8 flex flex-col items-center px-20">
      <motion.span
        style={{ color: textColor }}
        className="text-center w-full font-semibold text-[2.1rem] md:text-[3.2rem] tracking-wider font-qw"
      >
        {title}
      </motion.span>
      <div className="heads flex gap-x-[2rem] justify-center flex-wrap ">
        {team.map((it, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center rounded-lg p-4 border-[1px] border-neutral-900 "
          >
            <img
              src={it.imageUrl}
              className={
                isHead
                  ? "w-[200px] h-[200px] object-cover rounded-full"
                  : "w-[150px] h-[150px] object-cover rounded-full"
              }
              alt={it.name}
            />
            <h1 className="mt-4 text-xl font-semibold text-gray-300 uppercase tracking-wide font-pop">
              {it.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full pt-[6rem] min-h-screen flex flex-col items-center py-8 px-6">
      <div className="relative mb-3 text-center">
        <h1 className="relative font-pop font-extrabold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-4xl sm:text-5xl md:text-7xl text-transparent tracking-wide">
          MAADHYAM
          <motion.p
            style={{ color: textColor }}
            className="absolute right-[-10px] bottom-[-12px] sm:right-[-10px] sm:bottom-[-15px] font-semibold text-[2.5rem] md:text-[4rem] tracking-wider font-qw"
          >
            Team
          </motion.p>
        </h1>
      </div>
      {renderTeamSection("Magazine Heads", magazineHeads, true)}
      {renderTeamSection("Design Team Heads", designTeamHead, true)}
      {renderTeamSection("Design Team", designTeam)}
      {renderTeamSection("Newsletter Heads", newsLetterHead, true)}
      {renderTeamSection("Newsletter Team", newsLetterTeam)}
      {renderTeamSection("Editing Heads", editingHead, true)}
      {renderTeamSection("Editing Team", editingTeam)}
      {renderTeamSection("Data Collection Heads", dataCollectionHead, true)}
      {renderTeamSection("Data Collection Team", dataCollectionTeam)}
      {renderTeamSection("Wall Magazine Heads", wallMagazineHead, true)}
      {renderTeamSection("Wall Magazine Team", wallMagazineTeam)}
      {renderTeamSection("Social Media Heads", socialMediaHead, true)}
    </div>
  );
};

export default Team;

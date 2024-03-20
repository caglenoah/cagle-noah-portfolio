import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ExperienceCardTwo from "./ExperienceCardTwo";
import ExperienceCardThree from "./ExperienceCardThree";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <div className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl pb-20">
        <h3>Experience</h3>
      </div>

      <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory pt-12">
        <ExperienceCard />
        <ExperienceCardTwo />
        <ExperienceCardThree />
      </div>
    </motion.div>
  );
}

export default WorkExperience;

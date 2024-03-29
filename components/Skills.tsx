import React from "react";
import { motion } from "framer-motion";
import SkillJs from "./SkillJs";
import SkillReact from "./SkillReact";
import SkillNext from "./SkillNext";
import SkillGoogleCloud from "./SkillGoogleCloud";
import SkillExpress from "./SkillExpress";
import SkillTypeScript from "./SkillTypeScript";
import SkillNode from "./SkillNode";
import SkillTailwindcss from "./SkillTailwindcss";
import SkillMySQL from "./SkillMySQL";
import SkillAws from "./SkillAws";
import SkillGitHub from "./SkillGitHub";
import SkillRestream from "./SkillRestream";
type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row
      max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current profieciency!
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <SkillJs />
        <SkillReact />
        <SkillNext />
        <SkillGoogleCloud />
        <SkillExpress />
        <SkillTypeScript />
        <SkillNode />
        <SkillTailwindcss />
        <SkillMySQL />
        <SkillAws />
        <SkillGitHub />
        <SkillRestream />
      </div>
    </motion.div>
  );
}

export default Skills;

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import JavaScriptImage from "../images/JavaScriptImage.png";

type Props = {
  directionLeft?: boolean;
};

function SkillJs({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-black object-fit w-24 h-24
        md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition
        duration-300 ease-in-out"
      >
        <Image id="JSImage" src={JavaScriptImage} alt="javascript" />
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-yellow opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default SkillJs;

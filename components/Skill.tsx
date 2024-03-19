import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F27540%2Fjavascript-js&psig=AOvVaw2UHTZQG8Y8_WgzKPD8Zs2N&ust=1710699205146000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIiPi6Wx-YQDFQAAAAAdAAAAABAE"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-yellow opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

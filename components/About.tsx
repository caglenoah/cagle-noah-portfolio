import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutImage from "../images/AboutImage.JPG";
type Props = {};

export default function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10
      justify-evenly mx-auto items-center"
    >
      <h3 className="md:absolute top-24 uppercase tracking-[20px] text-gray-500 text 2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[400px]"
      >
        <Image src={AboutImage} alt="about image" />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10 pt-4 md:pt-4">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[yellow]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          As a graduate of the Austin Coding Academy with a Full Stack Software
          Engineering certification, I offer a unique blend of technical
          experience and a rich background in leadership, problem-solving, and
          adventure. I can help your business or project grow using my ability
          to thrive in challenging environments and my technical knowledge and
          expertise. If you are not looking for that set of skills, I am happy
          to teach you, or manage website design systems such as Canva. Building
          your website, setting up scheduling systems, and adding payment forms
          in a way you can learn easily. My work always prioritizes effective
          communication, creative problem-solving, and a commitment to achieving
          YOUR goal. I am an avid whitewater kayaker, extreme snowboarder, and
          now a full-stack software engineer with a fire to share the mindset my
          experiences have forged. With an intrinsic need to overcome
          challenges, I am passionate about helping people find success in their
          endeavors through coding. I will give you 110% in all that I do.
        </p>
      </div>
    </div>
  );
}

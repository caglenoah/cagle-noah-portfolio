import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TechImage from "../images/TechImage.jpeg";
import { SocialIcon } from "react-social-icons";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center p-4p bg-[#292929] hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light pt-12">
          Web/Database optimization consultant
        </h4>
        <p className="font-bold text-2xl mt-1">
          Ethical Tech Initialtive of DC
        </p>
        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          <Image
            className="h-10 w-10 rounded-full"
            src={TechImage}
            alt="EthicalTechImage"
          />
          <SocialIcon url="https://www.linkedin.com/company/ethical-tech-initiative/" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started 10/2023 -Present</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Analyze database effeciency</li>
          <li>Anaylyze site functionality and design</li>
          <li>Identify errors and other discrepancies</li>
          <li>
            report recommendation to optimize the sites functionality, and
            aesthetics
          </li>
        </ul>
      </div>
    </article>
  );
}

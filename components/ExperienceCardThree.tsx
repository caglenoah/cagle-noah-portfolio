import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import RmocImage from "../images/RmocImage.png";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function ExperienceCardThree({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center p-4p bg-[#292929] hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light pt-12">
          White Water Educator/Kayak Instructor/Raft Guide/Lead Safety/Camp
          Counselor
        </h4>
        <p className="font-bold text-2xl mt-1">Rocky Mountain Outdoor Center</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src={RmocImage}
            alt="Rmoc Image"
          />
          <SocialIcon url="https://rmoc.com/" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started 10/2023 -Present</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Taught Hydrology/Safety Courses for Private and Commercial Boaters/
            Row and Paddle Raft/ White Water Kayaking
          </li>
          <li>
            {" "}
            Analyzed Rapids/ Formulated Safety Strategy/ Lead Team in
            Implementation, and on Unfortunate Occasions Execution of Strategy
          </li>
          <li>
            Loaded Trips/Orchestrated Shuttles/Planned and Packed Food/
            Orchestrated Trips/
          </li>
          <li>
            Lead Safety For Kids Camps/ Lead Safety during First Decent Programs
            <SocialIcon url="https://www.facebook.com/search/top?q=first%20descents" />
          </li>
        </ul>
      </div>
    </article>
  );
}

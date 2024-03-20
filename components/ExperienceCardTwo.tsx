import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DispatchImage from "../images/DispatchImage.svg";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function ExperienceCardTwo({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center p-4p bg-[#292929] hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light pt-12">
          Producer/Web-Design/Content Manager
        </h4>
        <p className="font-bold text-2xl mt-1">
          The Daily Dispatch With Sam Shalhoub
        </p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src={DispatchImage}
            alt="Dispatch Image"
          />
          <SocialIcon url="https://samshalhoub.com/" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started 10/2023 -Present</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            I act as a Consultant, and Editor to the business owner in regards
            to site design and function
          </li>
          <li>
            {" "}
            I implement and manage tools such as scheduling, payment routes, and
            communication
          </li>
          <li>
            Actively manage content on a multitude of platforms including,
            Canva, Linktr.ee, and the business owners personal website
          </li>
          <li>
            I produce remote simulcast podcasts, offer and offer marketing
            advice.
          </li>
        </ul>
      </div>
    </article>
  );
}

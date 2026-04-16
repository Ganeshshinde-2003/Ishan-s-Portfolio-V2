"use client";

import zoth from "../../public/assets/workedwith/zoth.svg";
import aspora from "../../public/assets/workedwith/aspora.svg";
import di from "../../public/assets/workedwith/di.svg";
import homepic from "../../public/assets/home_screen_pic.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import CardWrapper from "./CardWrapper";
import {
  appreciation,
  mylife,
  personalProjectsData,
  recentHighlights,
  videCodedProjectsData,
} from "../content/data";
import Footer from "./Footer";

export function Home() {
  return (
    <div className="h-full w-full flex flex-col items-start justify-start relative">
      {/* White light gradient spreading from top-left */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 1000px 700px at 20% -10%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />
      <motion.div
        className="w-full mx-auto px-6  md:max-w-212.5 relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* First Section */}
        <div className="flex flex-col md:flex-row mt-10 mb-36 md:my-36 justify-between gap-0 md:gap-8 items-stretch w-full">
          <div className="flex flex-col justify-center md:justify-between md:w-[65%] h-fit md:h-100">
            <div>
              <div className="flex gap-2">
                <p className="text-[#00F48D] font-medium text-xs">
                  Product + AI Designer{" "}
                </p>
                <p className="text-[#474853] font-medium text-xs">|</p>
                <p className="text-[#A7AAB4] font-medium text-xs">
                  OPEN TO WORK
                </p>
              </div>
              <p className="text-white font-normal text-3xl md:text-4xl mt-5">
                Hey, I&apos;m Ishan Tandel
              </p>
              <p className="text-[#A7AAB4] font-medium text-sm mt-3 leading-6 tracking-wide">
                I&apos;m a product designer who builds. MSc in User Experience,
                Computer Science undergrad currently shipping my own products using AI
                while looking for the right design role in the United Kingdom.
              </p>
            </div>
            <div className="mb-0 md:mb-20">
              <p className="text-[#A7AAB4] font-medium text-xs mt-12 tracking-wider">
                COMPANIES I’VE WORKED WITH
              </p>
              <div className="flex gap-4 mt-4">
                <Image
                  src={zoth}
                  alt="Zoth"
                  className="h-8 w-auto object-contain"
                />
                <Image
                  src={aspora}
                  alt="Aspora"
                  className="h-8 w-auto object-contain"
                />
                <Image
                  src={di}
                  alt="DI"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center w-1/3 gap-2 h-100">
            <div className="flex-1 flex items-stretch p-2 rounded-2xl border border-[#2F3037] bg-[#232529]">
              <Image
                src={homepic}
                alt="Home"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
            <div className="w-full flex items-center justify-end gap-2">
              <p className="text-xs font-medium text-[#A7AAB4] tracking-wider">WINDY HAIR</p>
              <div className="flex items-center justify-center py-1 px-2 border border-[#2F3037] rounded-md bg-[#131415]">
                <p className="text-sm font-medium tracking-wider text-[#A7AAB4]">Img</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-36 md:my-36">
          <div className="w-full md:max-w-212.5">
            {/* personal projects */}
            <CardWrapper data={personalProjectsData} />
          </div>
        </div>
        <div className="flex justify-center my-36 md:my-36">
          <div className="w-full md:max-w-212.5">
            {/* personal projects */}
            <CardWrapper data={videCodedProjectsData} />
          </div>
        </div>
        <div className="flex justify-center my-36 md:my-36">
          <div className="w-full md:max-w-212.5">
            {/* personal projects */}
            <CardWrapper data={appreciation} />
          </div>
        </div>
        <div className="flex justify-center my-36 md:my-36">
          <div className="w-full md:max-w-212.5">
            {/* personal projects */}
            <CardWrapper data={recentHighlights} />
          </div>
        </div>
        <div className="flex justify-center my-36 md:my-36">
          <div className="w-full md:max-w-212.5">
            {/* personal projects */}
            <CardWrapper data={mylife} />
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

"use client";

import zoth from "../../public/assets/workedwith/zoth.png";
import aspora from "../../public/assets/workedwith/aspora.png";
import di from "../../public/assets/workedwith/di.png";
import homepic from "../../public/assets/home_screen_pic.jpg";
import Image from "next/image";
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
    <div className="h-full w-full flex flex-col items-start justify-start">
        <div className="w-full mx-auto max-w-4xl">
        {/* First Section */}
        <div className="flex my-10 justify-between gap-32 items-stretch w-full">
          <div className="flex flex-col justify-between h-100">
            <div>
              <div className="flex gap-4">
                <p className="text-[#00F48D] font-semibold text-sm">
                  Product+AI Designer{" "}
                </p>
                <p className="text-[#474853] font-semibold text-sm">|</p>
                <p className="text-[#A7AAB4] font-semibold text-sm">
                  OPEN TO WORK
                </p>
              </div>
              <p className="text-white font-semibold text-2xl mt-5">
                Hey, I&apos;m Ishan Tandel
              </p>
              <p className="text-[#A7AAB4] font-semibold text-sm mt-3">
                I&apos;m a product designer who builds. MSc in User Experience,
                Computer
                <br />
                Science undergrad currently shipping my own products using AI
                while <br />
                looking for the right design role in the United Kingdom.
              </p>
            </div>
            <div className="mb-20">
              <p className="text-[#A7AAB4] font-semibold text-xs mt-12">
                COMPANIES I’VE WORKED WITH
              </p>
              <div className="flex gap-3 mt-4">
                <Image
                  src={zoth}
                  alt="Zoth"
                  className="h-5 w-auto object-contain"
                />
                <Image
                  src={aspora}
                  alt="Aspora"
                  className="h-5 w-auto object-contain"
                />
                <Image
                  src={di}
                  alt="DI"
                  className="h-5 w-auto object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/3 gap-2 h-100">
            <div className="flex-1 flex items-stretch p-1.5 rounded-lg border border-[#2F3037]">
              <Image
                src={homepic}
                alt="Home"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <div className="w-full flex items-center justify-end gap-2">
              <p className="text-xs font-semibold text-[#A7AAB4]">WINDY HAIR</p>
              <div className="flex items-center justify-center py-1 px-2 border border-[#2F3037] rounded-md bg-[#131415]">
                <p className="text-sm font-semibold text-[#A7AAB4]">Img</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-20">
          <div className="w-full max-w-4xl">
            {/* personal projects */}
            <CardWrapper data={personalProjectsData} />
          </div>
        </div>
        <div className="flex justify-center my-20">
          <div className="w-full max-w-4xl">
            {/* personal projects */}
            <CardWrapper data={videCodedProjectsData} />
          </div>
        </div>
        <div className="flex justify-center my-20">
          <div className="w-full max-w-4xl">
            {/* personal projects */}
            <CardWrapper data={appreciation} />
          </div>
        </div>
        <div className="flex justify-center my-20">
          <div className="w-full max-w-4xl">
            {/* personal projects */}
            <CardWrapper data={recentHighlights} />
          </div>
        </div>
        <div className="flex justify-center my-20">
          <div className="w-full max-w-4xl">
            {/* personal projects */}
            <CardWrapper data={mylife} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

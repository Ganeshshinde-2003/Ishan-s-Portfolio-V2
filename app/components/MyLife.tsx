"use client";

import homepic from "../../public/assets/home_screen_pic.jpg";
import Image from "next/image";
import MyLifeCardWrapper from "./MyLifeCardWrapper";
import {
  myLifeExploringWorld,
  myLifeGoals,
  myLifeGoes,
  myLifePlans,
  myLifeShared,
  myLifeSomeDay,
} from "../content/data";
import Footer from "./Footer";

export function MyLife() {
  return (
    <div className="h-full w-full flex flex-col items-start justify-start relative">
      {/* White light gradient spreading from top */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 1000px 700px at 20% -10%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />
      <div className="w-full mx-auto px-5 md:px-0 md:max-w-212.5 relative z-10">
        {/* First Section */}
        <div className="flex flex-col md:flex-row mt-10 mb-36 md:my-36 justify-between gap-0 md:gap-8 items-stretch w-full">
          <div className="flex flex-col justify-between w-full md:w-2/5 h-auto md:h-100">
            <div>
              <div className="flex gap-2">
                <p className="text-[#00F48D] font-semibold text-xs">
                  DESIGNING FOR ZEPTO
                </p>
                <p className="text-[#474853] font-semibold text-xs">|</p>
                <p className="text-[#A7AAB4] font-semibold text-xs">
                  PRODUCT DESIGNER
                </p>
              </div>
              <p className="text-white font-semibold text-3xl md:text-4xl mt-5">
                A collection of stories, miles, and moments that shape how I
                Think & Design.
              </p>
            </div>
            <div className="mb-0 md:mb-20">
              <p className="text-[#A7AAB4] font-semibold text-xs mt-12">
                Product Thinker ||Conceptual Designer || Traveller <br />
                || Curious Mind || Athlete
              </p>
            </div>
          </div>
          <div className="hidden md:flex w-1/2 gap-2">
            <div className="flex flex-col items-center w-1/2 gap-2 h-100">
              <div className="flex-1 flex items-stretch p-2 rounded-2xl border border-[#2F3037] bg-[#232529]">
                <Image
                  src={homepic}
                  alt="Home"
                  className="h-full w-full object-cover rounded-xl"
                  loading="eager"
                />
              </div>
              <div className="w-full flex items-center justify-end gap-2">
                <p className="text-xs font-semibold text-[#A7AAB4]">
                  WINDY HAIR
                </p>
                <div className="flex items-center justify-center py-1 px-2 border border-[#2F3037] rounded-md bg-[#131415]">
                  <p className="text-xs font-semibold text-[#A7AAB4]">Img</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/2 gap-2 h-100">
              <div className="flex-1 flex items-stretch p-2  rounded-2xl border border-[#2F3037] bg-[#232529]">
                <Image
                  src={homepic}
                  alt="Home"
                  className="h-full w-full object-cover rounded-xl"
                  loading="eager"
                />
              </div>
              <div className="w-full flex items-center justify-end gap-2">
                <p className="text-xs font-semibold text-[#A7AAB4]">
                  WINDY HAIR
                </p>
                <div className="flex items-center justify-center py-1 px-2 border border-[#2F3037] rounded-md bg-[#131415]">
                  <p className="text-xs font-semibold text-[#A7AAB4]">Img</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-36">
          <div className="w-full max-w-212.5">
            {/* personal projects */}
            <MyLifeCardWrapper data={myLifeExploringWorld} />
          </div>
        </div>
        <div className="flex justify-center my-36">
          <div className="w-full max-w-212.5">
            {/* personal projects */}
            <MyLifeCardWrapper data={myLifeSomeDay} />
          </div>
        </div>
        <div className="flex justify-center my-36">
          <div className="w-full max-w-212.5">
            {/* personal projects */}
            <MyLifeCardWrapper data={myLifeShared} />
          </div>
        </div>
        <div className="flex justify-center my-36">
          <div className="w-full max-w-212.5">
            {/* personal projects */}
            <MyLifeCardWrapper data={myLifePlans} />
          </div>
        </div>
        <div className="flex justify-center my-36">
          <div className="w-full max-w-212.5">
            {/* personal projects */}
            <MyLifeCardWrapper data={myLifeGoals} />
          </div>
        </div>
          <div className="flex justify-center my-36">
          <div className="w-full max-w-212.5">
            {/* personal projects */}
            <MyLifeCardWrapper data={myLifeGoes} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

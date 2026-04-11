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
    <div className="h-full w-full flex flex-col items-start justify-start">
      <div className="w-full mx-auto max-w-5xl">
        {/* First Section */}
        <div className="flex my-36 justify-between items-stretch w-full">
          <div className="flex flex-col justify-between w-2/5 h-100">
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
              <p className="text-white font-semibold text-4xl mt-5">
                A collection of stories, miles, and moments that shape how I
                Think & Design.
              </p>
            </div>
            <div className="mb-20">
              <p className="text-[#A7AAB4] font-semibold text-xs mt-12">
                Product Thinker ||Conceptual Designer || Traveller <br />
                || Curious Mind || Athlete
              </p>
            </div>
          </div>
          <div className="flex w-1/2 gap-2">
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
              <div className="flex-1 flex items-stretch p-2 rounded-2 border border-[#2F3037] bg-[#232529]">
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
          <div className="w-full max-w-5xl">
            {/* personal projects */}
            <MyLifeCardWrapper data={myLifeExploringWorld} />
          </div>
        </div>
        <div className="flex justify-center my-36">
          <div className="w-full max-w-5xl">
            {/* personal projects */}
            <MyLifeCardWrapper data={myLifeSomeDay} />
          </div>
        </div>
        <div className="flex justify-center my-36">
          <div className="w-full max-w-5xl">
            {/* personal projects */}
            <MyLifeCardWrapper data={myLifeShared} />
          </div>
        </div>
        <div className="flex justify-center my-36">
          <div className="w-full max-w-5xl">
            {/* personal projects */}
            <MyLifeCardWrapper data={myLifePlans} />
          </div>
        </div>
        <div className="flex justify-center my-36">
          <div className="w-full max-w-5xl">
            {/* personal projects */}
            <MyLifeCardWrapper data={myLifeGoals} />
          </div>
        </div>
          <div className="flex justify-center my-36">
          <div className="w-full max-w-5xl">
            {/* personal projects */}
            <MyLifeCardWrapper data={myLifeGoes} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

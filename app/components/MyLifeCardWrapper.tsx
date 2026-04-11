"use client";

import Image from "next/image";
import ProjectsCard from "./ProjectsCard";

export interface CardItem {
  imagePath: string;
  title?: string;
  coverImage?: boolean;
}

interface CardData {
  header: string;
  icon: string;
  subheader?: string;
  contentPerRow?: number;
  imageHeight?: number;
  startWith?: number;
  flexible?: boolean;
  data: CardItem[];
}

interface MyLifeCardWrapperProps {
  data: CardData;
}

const MyLifeCardWrapper = ({
  data: {
    header,
    subheader,
    icon,
    data,
    contentPerRow,
    imageHeight = 80,
    startWith = 0,
    flexible = false,
  },
}: MyLifeCardWrapperProps) => {
  const firstItem = startWith > 0 ? data[0] : null;
  const slicedData = data.slice(startWith);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between mb-8">
        <div className="flex items-center justify-center gap-5">
          <div className="border border-[#2F3037] p-1.5 rounded-xl">
            <div className="border border-[#474853] p-2 rounded-lg">
              <Image src={icon} alt={header} width={20} height={20} />
            </div>
          </div>
          <div>
            <p className="font-semibold text-xl mb-2">{header}</p>
            {subheader && (
              <p className="font-semibold text-sm text-[#A7AAB4]">
                {subheader}
              </p>
            )}
          </div>
        </div>
      </div>

      {startWith > 0 && firstItem ? (
        <div className="flex gap-5 w-full items-center justify-center">
          <div
            className={`${flexible ? "w-2/5" : "w-1/2"} flex-1 flex flex-col`}
          >
            <ProjectsCard {...firstItem} imageHeight={0} />
          </div>
          <div
            className={`${flexible ? "w-3/5" : "w-1/2"} grid gap-6 auto-rows-min`}
            style={{
              gridTemplateColumns: `repeat(${contentPerRow ? contentPerRow : 4}, minmax(0, 1fr))`,
            }}
          >
            {slicedData.map((item, index) => (
              <ProjectsCard key={index} {...item} imageHeight={imageHeight} />
            ))}
          </div>
        </div>
      ) : (
        <div
          className="grid gap-6 w-full"
          style={{
            gridTemplateColumns: `repeat(${contentPerRow ? contentPerRow : 4}, minmax(0, 1fr))`,
          }}
        >
          {slicedData.map((item, index) => (
            <ProjectsCard key={index} {...item} imageHeight={imageHeight} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLifeCardWrapper;

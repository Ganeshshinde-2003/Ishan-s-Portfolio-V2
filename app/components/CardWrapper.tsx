"use client";

import Image from "next/image";
import roundedArrow from "../../public/assets/icons/roundedarrow.svg";
import ProjectsCard from "./ProjectsCard";
import AppreciationCard from "./AppreciationCard";
import MyLifeCard from "./MyLifeCard";
import { NavItem, useNavigation } from "../context/NavigationContext";

export interface CardItem {
  imagePath: string;
  title?: string;
  description?: string;
  talk?: string;
  name?: string;
  position?: string;
  coverImage?: boolean;
  activity?: string;
  arrow?: boolean;
}

interface CardData {
  header: string;
  subheader: string;
  title: string;
  link?: NavItem;
  icon: string;
  data: CardItem[];
}

interface CardWrapperProps {
  data: CardData;
  showHeaders?: boolean;
}

const CardWrapper = ({
  data: { header, subheader, title, link, icon, data },
  showHeaders = true,
}: CardWrapperProps) => {
  const { setActiveNav } = useNavigation();
  return (
    <div className="w-full">
      {showHeaders && (
        <div className="w-full flex items-center justify-between mb-8">
          <div className="flex items-center justify-center gap-5">
            <div className="hidden md:flex items-center justify-center border border-[#2F3037] p-1.5 rounded-xl h-14 w-14 shrink-0">
              <div className="border border-[#474853] p-2 rounded-lg flex items-center justify-center">
                <Image src={icon} alt={title} width={28} height={28} />
              </div>
            </div>
            <div>
              <p className="font-semibold text-lg md:text-xl mb-2">{header}</p>
              <p className="font-medium text-xs md:text-sm text-[#A7AAB4]">
                {subheader}
              </p>
            </div>
          </div>
          {link && (
            <button
              onClick={() => {
                setActiveNav(link);
              }}
              className="flex gap-2 py-3 px-4 rounded-xl border border-[#2F3037] bg-[#232529] cursor-pointer"
            >
              <p className="hidden md:flex font-extrabold text-sm">{title}</p>
              <Image
                src={roundedArrow}
                alt="Rounded Arrow"
                width={18}
                height={18}
              />
            </button>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) =>
          item.talk ? (
            <AppreciationCard key={index} {...item} />
          ) : item.activity ? (
            <MyLifeCard key={index} {...item} />
          ) : (
            <ProjectsCard
              key={index}
              {...item}
              onClick={item.title === "Aspora" ? () => setActiveNav("case-study-aspora") : undefined}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default CardWrapper;

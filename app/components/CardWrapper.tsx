"use client";

import Image from "next/image";
import roundedArrow from "../../public/assets/icons/roundedarrow.svg";
import Link from "next/link";
import ProjectsCard from "./ProjectsCard";
import AppreciationCard from "./AppreciationCard";
import MyLifeCard from "./MyLifeCard";

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
  link: string;
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
  return (
    <div className="w-full">
      {showHeaders && (
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center justify-center gap-5">
            <div className="hidden md:flex border border-[#2F3037] p-1.5 rounded-xl">
              <div className="border border-[#474853] p-2 rounded-lg">
                <Image src={icon} alt={title} width={20} height={20} />
              </div>
            </div>
            <div>
              <p className="font-semibold text-lg md:text-xl mb-2">{header}</p>
              <p className="font-semibold text-xs md:text-sm text-[#A7AAB4]">{subheader}</p>
            </div>
          </div>
          <Link
            href={link}
            className="flex gap-2 py-3 px-4 rounded-xl border border-[#2F3037] bg-[#232529]"
          >
            <p className="hidden md:flex font-semibold text-sm">{title}</p>
            <Image
              src={roundedArrow}
              alt="Rounded Arrow"
              width={18}
              height={18}
            />
          </Link>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) =>
          item.talk ? (
            <AppreciationCard key={index} {...item} />
          ) : item.activity ? (
            <MyLifeCard key={index} {...item} />
          ) : (
            <ProjectsCard key={index} {...item} />
          ),
        )}
      </div>
    </div>
  );
};

export default CardWrapper;

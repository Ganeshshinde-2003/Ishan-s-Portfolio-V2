"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import roundedArrow from "../../public/assets/icons/roundedarrow.svg";
import ProjectsCard from "./ProjectsCard";
import AppreciationCard from "./AppreciationCard";
import MyLifeCard from "./MyLifeCard";
import { NavItem } from "../context/NavigationContext";

const navItemToRoute: Record<string, string> = {
  home: "/",
  work: "/work-personal-projects",
  "ai-projects": "/ai-enabled-projects",
  "my-life": "/my-life",
  "case-study-aspora": "/work-personal-projects/aspora",
  "case-study-zoth": "/work-personal-projects/zoth",
  "case-study-researchlens": "/ai-enabled-projects/researchmap",
  "case-study-blinkspeak": "/ai-enabled-projects/blinkspeak",
};


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
  flipBack?: string;
}

interface CardData {
  header: string;
  subheader: string;
  title: string;
  link?: NavItem | string;
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
  const router = useRouter();
  return (
    <div className="w-full">
      {showHeaders && (
        <div className="w-full flex items-center justify-between mb-8">
          <div className="flex items-center justify-center gap-5">
            <div className="hidden md:flex items-center justify-center border border-[var(--border)] p-1.5 rounded-xl h-14 w-14 shrink-0">
              <div className="border border-[var(--border-strong)] p-2 rounded-lg flex items-center justify-center">
                <Image src={icon} alt={title} width={28} height={28} />
              </div>
            </div>
            <div>
              <p className="font-semibold text-lg md:text-xl mb-2">{header}</p>
              <p className="font-medium text-xs md:text-sm text-[var(--text-muted)]">
                {subheader}
              </p>
            </div>
          </div>
          {link && (
            link.startsWith("http") ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="shiny-btn flex gap-2 py-3 px-4 rounded-xl cursor-pointer"
              >
                <p className="hidden md:flex font-extrabold text-sm">{title}</p>
                <Image
                  src={roundedArrow}
                  alt="Rounded Arrow"
                  width={18}
                  height={18}
                />
              </a>
            ) : navItemToRoute[link] ? (
              <Link
                href={navItemToRoute[link]}
                className="shiny-btn flex gap-2 py-3 px-4 rounded-xl cursor-pointer"
              >
                <p className="hidden md:flex font-extrabold text-sm">{title}</p>
                <Image
                  src={roundedArrow}
                  alt="Rounded Arrow"
                  width={18}
                  height={18}
                />
              </Link>
            ) : null
          )}
        </div>
      )}
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 pb-2 md:pb-0 scrollbar-hide snap-x snap-mandatory md:snap-none">
        {data.map((item, index) =>
          item.talk ? (
            <div key={index} className="shrink-0 w-[75vw] max-w-[280px] md:w-auto md:max-w-none snap-start h-full">
              <AppreciationCard {...item} />
            </div>
          ) : item.activity ? (
            <div key={index} className="shrink-0 w-[75vw] max-w-[280px] md:w-auto md:max-w-none snap-start">
              <MyLifeCard {...item} />
            </div>
          ) : (
            <div key={index} className="shrink-0 w-[75vw] max-w-[280px] md:w-auto md:max-w-none snap-start">
              <ProjectsCard
                {...item}
                onClick={
                  item.title === "Aspora"
                    ? () => router.push("/work-personal-projects/aspora")
                    : item.title === "Zoth.io"
                    ? () => router.push("/work-personal-projects/zoth")
                    : item.title === "ResearchLens"
                    ? () => router.push("/ai-enabled-projects/researchmap")
                    : item.title === "BlinkSpeak"
                    ? () => router.push("/ai-enabled-projects/blinkspeak")
                    : undefined
                }
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default CardWrapper;

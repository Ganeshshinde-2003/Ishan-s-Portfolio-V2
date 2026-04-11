"use client";

import { useNavigation, type NavItem } from "@/app/context/NavigationContext";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import profilePic from "../../public/assets/sidebar_pic.png";
import mail from "../../public/assets/mail.svg";
import x from "../../public/assets/icons/x.svg";
import gram from "../../public/assets/icons/gram.svg";
import be from "../../public/assets/icons/be.svg";
import bubble from "../../public/assets/icons/bubble.svg";
import globe from "../../public/assets/icons/globe.svg";
import linkedin from "../../public/assets/icons/linkedin.svg";
import note from "../../public/assets/icons/note.svg";
import home from "../../public/assets/icons/home.svg";
import work from "../../public/assets/icons/work.svg";
import aiProjects from "../../public/assets/icons/ai.svg";
import resume from "../../public/assets/icons/resume.svg";
import myLife from "../../public/assets/icons/mylife.svg";

const navigationItems: {
  id: NavItem;
  label: string;
  icon: StaticImageData;
}[] = [
  { id: "home", label: "Home", icon: home },
  { id: "work", label: "Work & personal project", icon: work },
  { id: "ai-projects", label: "AI Enabled Projects", icon: aiProjects },
  { id: "resume", label: "Resume", icon: resume },
  { id: "my-life", label: "My Life", icon: myLife },
];

const socialItems: {
  id: string;
  image: StaticImageData;
  link: string;
}[] = [
  { id: "mail", image: mail, link: "#" },
  { id: "behance", image: be, link: "#" },
  { id: "linkedin", image: linkedin, link: "#" },
  { id: "globe", image: globe, link: "#" },
  { id: "twitter", image: x, link: "#" },
  { id: "bubble", image: bubble, link: "#" },
  { id: "instagram", image: gram, link: "#" },
  { id: "note", image: note, link: "#" },
];

export function Sidebar() {
  const { activeNav, setActiveNav } = useNavigation();

  return (
    <aside className="flex flex-col justify-between h-screen sticky top-0 pl-10 py-10 w-fit">
      <div>
        <div className="flex gap-3 items-center mb-10">
          <Image
            src={profilePic}
            alt="Profile Picture"
            height={40}
            width={40}
            className="rounded-full shrink-0"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-white font-semibold text-sm">Ishan Tandel</h3>
            <p className="text-gray-400 text-xs">Product Designer</p>
          </div>
        </div>
        <div>
          <p className="text-white font-semibold text-xs mb-5">CREATIONS</p>
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveNav(item.id)}
                  className={`text-base font-semibold transition-colors px-2 py-2.5 rounded-xl w-full text-start flex items-center gap-3 ${
                    activeNav === item.id
                      ? 'text-[#ffffff] bg-[#1A1B1E]'
                      : 'text-[#A7AAB4] hover:text-[#ffffff]'
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={16}
                    height={16}
                    className="w-full h-full object-cover"
                    objectFit="cover"
                    style={{
                      filter: activeNav === item.id
                        ? 'brightness(0) saturate(100%) invert(100%)'
                        : 'brightness(0) saturate(100%) invert(67%)',
                      width: 'auto'
                    }}
                  />
                  <span className="flex-1 text-sm">{item.label}</span>
                  {item.id === "my-life" && (
                    <div className="text-[#00F48D] text-xs font-semibold px-2 py-1 rounded-lg">
                      NEW
                    </div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
          <p className="text-white font-semibold text-xs mb-5">SOCIALS</p>
          <div className="grid grid-cols-4 gap-3 mb-5 place-items-center">
            {socialItems.map((item) => (
              <Link key={item.id} href={item.link} className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <Image src={item.image} alt={item.id} width={24} height={24} style={{ width: 'auto' }} />
              </Link>
            ))}
          </div>
          <p className="text-xs text-center font-semibold mt-5 text-[#A7AAB4]">51.5074° N, 0.1278° W</p>
      </div>
    </aside>
  );
}

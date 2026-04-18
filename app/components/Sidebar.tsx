"use client";

import { useNavigation, type NavItem } from "@/app/context/NavigationContext";
import { useMarsAssistant } from "@/app/context/MarsAssistantContext";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  { id: "mail", image: mail, link: "mailto: ishan.tandel1803@gmail.com" },
  { id: "behance", image: be, link: "https://www.behance.net/ishantandel" },
  { id: "linkedin", image: linkedin, link: "https://www.linkedin.com/in/ishan-tandel-90b592222/" },
  { id: "globe", image: globe, link: "#" },
  { id: "twitter", image: x, link: "#" },
  { id: "bubble", image: bubble, link: "https://medium.com/@ishantandel637" },
  { id: "instagram", image: gram, link: "#" },
  { id: "note", image: note, link: "#" },
];

export function Sidebar() {
  const { activeNav, setActiveNav } = useNavigation();
  const { openMars } = useMarsAssistant();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <aside className={`flex flex-col justify-between ${isMenuOpen ? 'h-screen' : 'h-fit'} md:h-screen sticky top-0 px-5 md:px-0 py-5 md:pl-10 md:py-10 w-full md:w-fit transition-all duration-300`}>
      <div className="flex flex-col">
        <div className={`flex flex-row items-center justify-between md:justify-start md:flex-col md:items-start ${isMenuOpen ? 'mb-10' : 'mb-0'} md:mb-10`}>
          <div className="flex gap-3 items-center w-auto">
            <Image
              src={profilePic}
              alt="Profile Picture"
              height={40}
              width={40}
              className="rounded-full shrink-0"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-white font-semibold text-sm">Ishan Tandel</h3>
              <p className="text-gray-400 text-xs font-medium">Product Designer</p>
            </div>
          </div>

          <div className="flex md:hidden items-center justify-center py-1 px-2 border border-[#2F3037] rounded-lg bg-[#131415]">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex flex-col gap-1 items-center justify-center w-6 h-6">
              <div className="w-4 h-px bg-white"></div>
              <div className="w-4 h-px bg-white"></div>
              <div className="w-4 h-px bg-white"></div>
            </button>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block opacity-100' : 'hidden opacity-0'} md:block md:opacity-100 transition-opacity duration-300`}>
          <p className="text-white font-medium text-xs mb-5 tracking-wider">CREATIONS</p>
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const isResume = item.id === "resume";

              if (isResume) {
                return (
                  <li key={item.id}>
                    <a
                      href="/fonts/resume.pdf"
                      download="Ishan_Tandel_Resume.pdf"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-base font-medium transition-colors px-2 py-2.5 rounded-xl w-full text-start flex items-center gap-3 text-[#A7AAB4] hover:text-[#ffffff]"
                    >
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={16}
                        height={16}
                        className="w-full h-full object-cover"
                        objectFit="cover"
                        style={{
                          filter: "brightness(0) saturate(100%) invert(67%)",
                          width: "auto",
                        }}
                      />
                      <span className="flex-1 text-sm">{item.label}</span>
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveNav(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`text-base font-medium transition-colors px-2 py-2.5 rounded-xl w-full text-start flex items-center gap-3 ${
                      activeNav === item.id
                        ? "text-[#ffffff] bg-[#1A1B1E]"
                        : "text-[#A7AAB4] hover:text-[#ffffff]"
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
                        filter:
                          activeNav === item.id
                            ? "brightness(0) saturate(100%) invert(100%)"
                            : "brightness(0) saturate(100%) invert(67%)",
                        width: "auto",
                      }}
                    />
                    <span className="flex-1 text-sm">{item.label}</span>
                    {item.id === "my-life" && (
                      <div className="text-[#00F48D] text-xs font-medium px-2 py-1 rounded-lg">
                        NEW
                      </div>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mars AI Assistant CTA */}
          <div className="h-px bg-[#2F3037] my-4" />
          <button
            onClick={() => {
              openMars();
              setIsMenuOpen(false);
            }}
            className="text-base font-medium transition-colors px-2 py-2.5 rounded-xl w-full text-start flex items-center gap-3 text-[#A7AAB4] hover:text-[#ffffff]"
          >
            <div className="w-7 h-7 rounded-full bg-[#2F3037] flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" fill="#A7AAB4" />
                <path d="M13 2L13.5 3.5L15 4L13.5 4.5L13 6L12.5 4.5L11 4L12.5 3.5L13 2Z" fill="#A7AAB4" opacity="0.6" />
              </svg>
            </div>
            <span className="flex-1 text-sm">Mars AI Assistant</span>
            <span className="bg-[#00F48D] text-[#0A0B0D] text-xs font-bold px-2 py-0.5 rounded-md">AI</span>
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block opacity-100' : 'hidden opacity-0'} md:block md:opacity-100 transition-opacity duration-300`}>
        <p className="text-white font-medium text-xs mb-5 tracking-wider">SOCIALS</p>
        <div className="grid grid-cols-4 gap-3 mb-5 place-items-center">
          {socialItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={() => setIsMenuOpen(false)}
              className="hover:opacity-80 transition-opacity flex items-center justify-center"
            >
              <Image
                src={item.image}
                alt={item.id}
                width={24}
                height={24}
                style={{ width: "auto" }}
              />
            </Link>
          ))}
        </div>
        <p className="text-xs text-center font-extrabold mt-5 text-[#A7AAB4]">
          51.5074° N, 0.1278° W
        </p>
      </div>
    </aside>
  );
}

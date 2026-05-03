"use client";

import { useMarsAssistant } from "@/app/context/MarsAssistantContext";
import { useTheme } from "@/app/context/ThemeContext";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import profilePic from "../../public/assets/sidebar_pic.png";
import mail from "../../public/assets/mail.svg";
import be from "../../public/assets/icons/be.svg";
import bubble from "../../public/assets/icons/bubble.svg";
import globe from "../../public/assets/icons/globe.svg";
import linkedin from "../../public/assets/icons/linkedin.svg";
import home from "../../public/assets/icons/home.svg";
import work from "../../public/assets/icons/work.svg";
import aiProjects from "../../public/assets/icons/ai.svg";
import resume from "../../public/assets/icons/resume.svg";
import myLife from "../../public/assets/icons/mylife.svg";

const navigationItems: {
  id: string;
  label: string;
  icon: StaticImageData;
  href: string;
}[] = [
  { id: "home", label: "Home", icon: home, href: "/" },
  { id: "work", label: "Work & personal project", icon: work, href: "/work-personal-projects" },
  { id: "ai-projects", label: "AI Enabled Projects", icon: aiProjects, href: "/ai-enabled-projects" },
  { id: "resume", label: "Resume", icon: resume, href: "/resume" },
  { id: "my-life", label: "My Life", icon: myLife, href: "/my-life" },
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
  { id: "bubble", image: bubble, link: "https://medium.com/@ishantandel637" },
];

export function Sidebar() {
  const { openMars } = useMarsAssistant();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLight = theme === "light";

  const activeFilter = isLight
    ? "brightness(0) saturate(100%) invert(14%)"
    : "brightness(0) saturate(100%) invert(100%)";
  const inactiveFilter = isLight
    ? "brightness(0) saturate(100%) invert(45%)"
    : "brightness(0) saturate(100%) invert(67%)";

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
              <h3 className="text-[var(--text)] font-semibold text-sm">Ishan Tandel</h3>
              <p className="text-gray-400 text-xs font-medium">Product Designer</p>
            </div>
          </div>

          <div className="flex md:hidden items-center justify-center py-1 px-2 border border-[var(--border)] rounded-lg bg-[var(--bg)]">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex flex-col gap-1 items-center justify-center w-6 h-6">
              <div className="w-4 h-px bg-[var(--text)]"></div>
              <div className="w-4 h-px bg-[var(--text)]"></div>
              <div className="w-4 h-px bg-[var(--text)]"></div>
            </button>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block opacity-100' : 'hidden opacity-0'} md:block md:opacity-100 transition-opacity duration-300`}>
          <p className="text-[var(--text)] font-medium text-xs mb-5 tracking-wider">CREATIONS</p>
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base font-medium transition-colors px-2 py-2.5 rounded-xl w-full text-start flex items-center gap-3 ${
                      isActive
                        ? "text-[var(--text)] bg-[var(--panel)]"
                        : "text-[var(--text-muted)] hover:text-[var(--text)]"
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
                        filter: isActive ? activeFilter : inactiveFilter,
                        width: "auto",
                      }}
                    />
                    <span className="flex-1 text-sm">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mars AI Assistant CTA */}
          <div className="h-px bg-[var(--border)] my-4" />
          <button
            onClick={() => {
              openMars();
              setIsMenuOpen(false);
            }}
            className="text-base font-medium transition-colors px-2 py-2.5 rounded-xl w-full text-start flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            <div className="w-7 h-7 rounded-full bg-[var(--border)] flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" fill="currentColor" />
                <path d="M13 2L13.5 3.5L15 4L13.5 4.5L13 6L12.5 4.5L11 4L12.5 3.5L13 2Z" fill="currentColor" opacity="0.6" />
              </svg>
            </div>
            <span className="flex-1 text-sm">Mars AI Assistant</span>
            <span className="bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-bold px-2 py-0.5 rounded-md">AI</span>
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block opacity-100' : 'hidden opacity-0'} md:block md:opacity-100 transition-opacity duration-300`}>
        {/* <button
          onClick={toggleTheme}
          className="flex items-center gap-3 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors mb-5 w-full"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 1V2.5M8 13.5V15M15 8H13.5M2.5 8H1M12.95 3.05L11.9 4.1M4.1 11.9L3.05 12.95M12.95 12.95L11.9 11.9M4.1 4.1L3.05 3.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 9.5C13.1 9.8 12.2 10 11.2 10C7 10 3.5 6.5 3.5 2.3C3.5 1.9 3.5 1.6 3.6 1.2C1.5 2.4 0 4.6 0 7.2C0 11 3 14 6.8 14C9.8 14 12.4 12.1 13.4 9.5H14Z" fill="currentColor"/>
            </svg>
          )}
          <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
        </button> */}
        <p className="text-[var(--text)] font-medium text-xs mb-5 tracking-wider">SOCIALS</p>
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
        <p className="text-xs text-center font-extrabold mt-5 text-[var(--text-muted)]">
          51.5074° N, 0.1278° W
        </p>
      </div>
    </aside>
  );
}

"use client";

import { useNavigation, type NavItem } from "@/app/context/NavigationContext";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import profilePic from "../../public/assets/sidebar_pic.png";
import mail from "../../public/assets/mail.svg";

const navigationItems: {
  id: NavItem;
  label: string;
}[] = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work & personal project" },
  { id: "ai-projects", label: "AI Enabled Projects" },
  { id: "resume", label: "Resume" },
  { id: "about", label: "About" },
  { id: "my-life", label: "My Life" },
];

const socialItems: {
  id: string;
  image: StaticImageData;
  link: string;
}[] = [
  { id: "mail", image: mail, link: "#" },
  { id: "twitter", image: mail, link: "#" },
  { id: "linkedin", image: mail, link: "#" },
  { id: "github", image: mail, link: "#" },
  { id: "facebook", image: mail, link: "#" },
  { id: "instagram", image: mail, link: "#" },
  { id: "youtube", image: mail, link: "#" },
  { id: "dribbble", image: mail, link: "#" },
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
            height={60}
            width={60}
            className="rounded-full shrink-0"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-white font-semibold text-2xl">Ishan Tandel</h3>
            <p className="text-gray-400 text-base">Product Designer</p>
          </div>
        </div>
        <div>
          <p className="text-white font-semibold text-sm mb-5">CREATIONS</p>
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveNav(item.id)}
                  className={`text-base font-semibold transition-colors px-2 py-2.5 rounded-xl w-full text-start flex items-center justify-between ${
                    activeNav === item.id
                      ? 'text-primaryText bg-[#1A1B1E]'
                      : 'text-gray-400 hover:text-primaryText'
                  }`}
                >
                  {item.label}
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
          <p className="text-white font-semibold text-sm mb-5">SOCIALS</p>
          <div className="grid grid-cols-4 gap-3 mb-5">
            {socialItems.map((item) => (
              <Link key={item.id} href={item.link} className="hover:opacity-80 transition-opacity">
                <Image src={item.image} alt={item.id} width={24} height={24} />
              </Link>
            ))}
          </div>
          <p className="text-xs text-center font-semibold mt-5">51.5074° N, 0.1278° W</p>
      </div>
    </aside>
  );
}

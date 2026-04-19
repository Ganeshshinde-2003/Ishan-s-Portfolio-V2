"use client";

import { useNavigation } from "@/app/context/NavigationContext";
import { Home } from "@/app/components/Home";
import { MyLife } from "@/app/components/MyLife";
import { Work } from "@/app/components/Work";
import { AiProject } from "@/app/components/AiProject";
import { CaseStudyAspora } from "@/app/components/CaseStudyAspora";

export default function Page() {
  const { activeNav } = useNavigation();

  return (
    <div className="bg-[#1A1B1E] text-white h-full w-full rounded-t-2xl md:rounded-2xl shadow-[0_1px_40px_10px_rgba(5,5,5,0.2)] overflow-y-auto scrollbar-hide">
      {activeNav === "home" && <Home />}
      {activeNav === "my-life" && <MyLife />}
      {activeNav === "work" && <Work />}
      {activeNav === "ai-projects" && <AiProject />}
      {activeNav === "case-study-aspora" && <CaseStudyAspora />}
    </div>
  );
}

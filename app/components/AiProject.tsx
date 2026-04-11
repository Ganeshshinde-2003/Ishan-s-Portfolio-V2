"use client";

import { videCodedProjectsData } from "../content/data";
import CardWrapper from "./CardWrapper";

export function AiProject() {
  return (
    <div className="h-auto md:h-full w-full flex flex-col items-center justify-center py-10 md:py-16">
<div className="w-full mx-auto px-5 md:px-0 md:max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Work & Personal Project</h1>
          <p className="text-[#A7AAB4] text-xs">A curated collection showcasing all my designs</p>
        </div>
        <div className="w-full">
          {/* personal projects */}
          <CardWrapper data={videCodedProjectsData} showHeaders={false} />
        </div>
      </div>
    </div>
  );
}

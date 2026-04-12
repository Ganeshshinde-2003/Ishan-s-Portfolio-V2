"use client";

import { personalProjectsData } from "../content/data";
import CardWrapper from "./CardWrapper";

export function Work() {
  return (
    <div className="h-auto md:h-full w-full flex flex-col items-center justify-center py-10 md:py-16 relative">
      {/* Horizontal capsule light effect - half dome visible at top */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 550px 450px at 50% -10%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.06) 40%, transparent 70%)",
          zIndex: 0,
        }}
      />
      <div className="w-full mx-auto px-5 md:px-0 md:max-w-212.5 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Work & Personal Project</h1>
          <p className="text-[#A7AAB4] text-xs">A curated collection showcasing all my designs</p>
        </div>
        <div className="w-full">
          {/* personal projects */}
          <CardWrapper data={personalProjectsData} showHeaders={false} />
        </div>
      </div>
    </div>
  );
}

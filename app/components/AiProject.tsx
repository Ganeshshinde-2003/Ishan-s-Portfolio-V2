"use client";

import { motion } from "framer-motion";
import { videCodedProjectsData } from "../content/data";
import CardWrapper from "./CardWrapper";

export function AiProject() {
  return (
    <div className="h-auto md:h-full w-full flex flex-col items-center justify-center py-10 md:py-16 relative">
      {/* Horizontal capsule light effect - subtle half dome */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 250px at 50% -10%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />
      <motion.div
        className="w-full mx-auto px-6 md:max-w-212.5 relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            AI Enabled Projects
          </h1>
          <p className="text-[#A7AAB4] font-extrabold text-xs">
            A curated collection showcasing all my designs
          </p>
        </div>
        <div className="w-full">
          {/* personal projects */}
          <CardWrapper data={videCodedProjectsData} showHeaders={false} />
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Footer from "@/app/components/Footer";

export default function ResumePage() {
  return (
    <div className="h-full w-full flex flex-col items-start justify-start relative">
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ background: "var(--hero-gradient-overlay)", zIndex: 0 }}
      />
      <motion.div
        className="w-full mx-auto px-6 md:max-w-212.5 relative z-10 py-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--text)] mb-4">Resume</h1>
          <p className="text-[var(--text-muted)] font-medium text-sm">
            Ishan Tandel — Product + AI Designer
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <a
            href="/fonts/resume.pdf"
            download="Ishan_Tandel_Resume.pdf"
            className="shiny-btn flex gap-2 py-3 px-6 rounded-xl cursor-pointer font-bold text-sm"
          >
            Download PDF
          </a>
        </div>

        <div className="w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
          <iframe
            src="/fonts/resume.pdf"
            className="w-full"
            style={{ height: "80vh" }}
            title="Ishan Tandel Resume"
          />
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

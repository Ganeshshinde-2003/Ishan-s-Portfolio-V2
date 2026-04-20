"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigation } from "../context/NavigationContext";
import Footer from "./Footer";

const sections = [
  { id: "bs-section-01", label: "Problem Statement" },
  { id: "bs-section-02", label: "Role & Constraints" },
  { id: "bs-section-03", label: "Research & Insight" },
  { id: "bs-section-04", label: "The Core User Need" },
  { id: "bs-section-05", label: "Design Process" },
  { id: "bs-section-06", label: "The Build" },
  { id: "bs-section-07", label: "The Product" },
  { id: "bs-section-08", label: "Results & Impact" },
  { id: "bs-section-09", label: "Monetisation Strategy" },
  { id: "bs-section-10", label: "Future Work" },
  { id: "bs-section-11", label: "Learnings" },
];

export function CaseStudyBlinkSpeak() {
  const { setActiveNav } = useNavigation();
  const [activeSection, setActiveSection] = useState<string>("bs-section-01");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="h-full w-full flex flex-col items-start justify-start relative">
      <motion.div
        className="w-full"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Top bar */}
        <div className="sticky top-0 z-20 bg-[#1A1B1E] border-b border-[#2F3037] px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => setActiveNav("home")}
            className="flex items-center gap-2 text-[#A7AAB4] hover:text-white transition-colors text-sm font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
          <span className="hidden md:block text-xs font-medium tracking-wide max-w-sm truncate">
            <span className="text-[#A7AAB4]">Case Study / </span>
            <span className="text-white">BlinkSpeak (Supported by Published research paper)</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="bg-[#00F48D]/10 border border-[#00F48D]/30 text-[#00F48D] px-2.5 py-1 rounded-md text-xs font-semibold">
              IEEE Published
            </span>
            <span className="text-[#A7AAB4] text-xs font-medium">7 min read</span>
          </div>
        </div>

        {/* Main layout: content + sticky TOC */}
        <div className="relative flex gap-8 px-6 pt-10 md:pt-12 pb-0 w-full mx-auto md:max-w-212.5">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Hero section */}
            <div className="mb-10">
              <h1 className="text-white text-2xl md:text-3xl font-bold max-w-xl leading-tight mb-6 text-center mx-auto">
                Giving ALS patients their voice back - one blink at a time.
              </h1>

              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0A1B4D 0%, #2D1B69 50%, #4A148C 100%)" }}
              >
                <div className="px-6 pt-10 pb-6 flex flex-col items-center text-center">
                  <div className="relative w-full max-w-sm mx-auto">
                    <div className="absolute top-3 right-3 z-10 bg-[#1A1B1E]/60 text-white text-xs px-2 py-1 rounded-md font-medium">
                      2025
                    </div>
                    <div className="w-full aspect-[3/2] rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#4C1D95] flex items-center justify-center">
                      <span className="text-[#A7AAB4] text-sm font-medium">[ BlinkSpeak cover ]</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom label — outside the gradient box, aligned right */}
              <div className="flex items-center justify-end gap-2 px-4 py-3">
                <p className="text-xs font-medium text-[#A7AAB4] tracking-wider">CASE STUDY COVER</p>
                <div className="flex items-center justify-center py-1 px-2 border border-[#2F3037] rounded-md bg-[#131415]">
                  <p className="text-sm font-medium tracking-wider text-[#A7AAB4]">IMG</p>
                </div>
              </div>
            </div>

            {/* Metadata row — 4 columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div>
                <p className="text-[#A7AAB4] text-xs tracking-widest font-medium mb-1">PUBLISHED</p>
                <p className="text-white text-sm font-medium">IEEE I2CT 2024</p>
              </div>
              <div>
                <p className="text-[#A7AAB4] text-xs tracking-widest font-medium mb-1">MY ROLE</p>
                <p className="text-white text-sm font-medium">Solo Designer &amp; Builder</p>
              </div>
              <div>
                <p className="text-[#A7AAB4] text-xs tracking-widest font-medium mb-1">TECH</p>
                <p className="text-white text-sm font-medium">Claude Code · React · FastAPI · MediaPipe</p>
              </div>
              <div>
                <p className="text-[#A7AAB4] text-xs tracking-widest font-medium mb-1">LIVE</p>
                <a
                  href="https://researchmap.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-medium hover:text-[#00F48D] transition-colors"
                >
                  researchmap.site
                </a>
              </div>
            </div>
            <div className="border-t border-[#2F3037] mb-10" />

            {/* Product screenshot placeholder */}
            <div className="w-full rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#4C1D95] aspect-video flex items-center justify-center mb-10">
              <span className="text-[#A7AAB4] text-sm font-medium">[ BlinkSpeak product screenshot ]</span>
            </div>

            {/* Intro paragraph */}
            <p className="text-[#A7AAB4] text-sm leading-7 mb-16">
              The average AAC device costs £3,000–£8,000. Requires specialist calibration, dedicated hardware, weeks of clinical training. I built an alternative that runs in a browser tab, needs nothing but a webcam, and took three weeks from research paper to working prototype. If it helps one ALS patient communicate without waiting for institutional procurement — it was worth it.
            </p>

            {/* Content sections */}
            <div className="space-y-16 pb-16">

              {/* 01 Problem Statement */}
              <section id="bs-section-01">
                <p className="text-[#00F48D] font-semibold text-sm tracking-wider uppercase mb-3">01&nbsp;&nbsp;Problem Statement</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Progressive paralysis silences people. Technology shouldn&apos;t.</h2>
                <div className="space-y-4 text-[#A7AAB4] text-sm leading-7">
                  <p>
                    Amyotrophic Lateral Sclerosis (ALS) progressively strips patients of speech and motor control. As the disease advances, eye movement becomes the last reliable output channel. In India alone, 44% of 2.68 billion specially challenged individuals have speech, hearing, or visual impairments (MOSPI).
                  </p>
                  <p>
                    The existing tools are expensive, hardware-dependent, or require clinical setup — inaccessible for the majority of patients who need them most.
                  </p>
                </div>
              </section>

              {/* 02 Role & Constraints */}
              <section id="bs-section-02">
                <p className="text-[#00F48D] font-semibold text-sm tracking-wider uppercase mb-3">02&nbsp;&nbsp;Role &amp; Constraints</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Built under real constraints, not ideal ones.</h2>

                <div className="space-y-8 text-[#A7AAB4] text-sm leading-7">
                  <div>
                    <p className="text-[#00F48D] font-semibold text-xs tracking-wider uppercase mb-2">01 Team</p>
                    <p>Core research team of 4. Frontend and system design led by me. Paper co-authored collaboratively with Anuj Singh and faculty advisors at MIT-WPU.</p>
                  </div>
                  <div>
                    <p className="text-[#00F48D] font-semibold text-xs tracking-wider uppercase mb-2">02 Tech constraint</p>
                    <p>No GPU budget. Must run entirely in-browser on consumer hardware. Dlib required cmake — blocked web deployment. Forced full migration to MediaPipe JS.</p>
                  </div>
                  <div>
                    <p className="text-[#00F48D] font-semibold text-xs tracking-wider uppercase mb-2">03 Time</p>
                    <p>Research-to-prototype: ~3 weeks. Web port to browser-native stack: iterative sprints alongside IEEE submission deadlines.</p>
                  </div>
                  <div>
                    <p className="text-[#00F48D] font-semibold text-xs tracking-wider uppercase mb-2">04 Budget</p>
                    <p>Zero. No cloud spend, no hardware, no paid APIs. Every dependency is open source. The only cost is a webcam most laptops already have.</p>
                  </div>
                </div>
              </section>

              {/* 03 Research & Insight */}
              <section id="bs-section-03">
                <p className="text-[#00F48D] font-semibold text-sm tracking-wider uppercase mb-3">03&nbsp;&nbsp;Research &amp; Insight</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Five approaches. One clear winner for ALS patients.</h2>
                <div className="space-y-4 text-[#A7AAB4] text-sm leading-7">
                  <p>
                    The research audit compared five eye communication methods: EOG, eye tracking, auditory BCIs, eye blinking, and hybrid gesture devices across four axes — assistive person required, communication speed, hardware cost, and software support.
                  </p>
                  <p>
                    <span className="text-white font-semibold">Key insight:</span> Eye blinking is the only method that requires no external hardware, no assistive person, and can be implemented in pure software on any device with a camera. For patients in low-income contexts, it is the only viable path.
                  </p>
                </div>
              </section>

              {/* 04 The Core User Need */}
              <section id="bs-section-04">
                <p className="text-[#00F48D] font-semibold text-sm tracking-wider uppercase mb-3">04&nbsp;&nbsp;The Core User Need</p>
                <div className="space-y-4 text-[#A7AAB4] text-sm leading-7">
                  <p>
                    An ALS patient needs a way to compose and send messages using only their eyes so that they can communicate independently, without expensive equipment or a caregiver present, using any device with a camera.
                  </p>
                  <p>
                    <span className="text-white font-semibold">Success:</span> a patient sitting alone at a laptop, composing &ldquo;HELLO&rdquo; in under 60 seconds, sending it to a family member on WhatsApp with no one else in the room, and nothing bought.
                  </p>
                </div>
              </section>

              {/* 05 Design Process */}
              <section id="bs-section-05">
                <p className="text-[#00F48D] font-semibold text-sm tracking-wider uppercase mb-3">05&nbsp;&nbsp;Design Process</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-6">From EAR formula to browser-native interaction.</h2>

                <div className="space-y-8 text-[#A7AAB4] text-sm leading-7 mb-10">
                  <div>
                    <p className="text-[#00F48D] font-semibold text-xs tracking-wider uppercase mb-2">01 Algorithm first, interface second</p>
                    <p>Started with the EAR formula and thresholds. Short blink (&lt;10 frames) = dot. Long blink (≥10 frames) = dash. 1.5s silence = letter boundary. 3s = word space. The interaction model was dictated by human physiology — this shaped all layout decisions downstream.</p>
                  </div>
                  <div>
                    <p className="text-[#00F48D] font-semibold text-xs tracking-wider uppercase mb-2">02 Information architecture — what must be visible at all times</p>
                    <p>Three outputs matter simultaneously: live camera feed with EAR readout (system sees you), Morse buffer building in real-time (catch errors early), decoded text (the goal). Split-panel layout: camera left, data right — all visible without scrolling.</p>
                  </div>
                  <div>
                    <p className="text-[#00F48D] font-semibold text-xs tracking-wider uppercase mb-2">03 Live-tunable calibration</p>
                    <p>Blink physiology varies significantly between users — especially patients with neuromuscular conditions. EAR and dot/dash thresholds must be tunable live. This made the Control Panel a persistent UI element, never a buried settings page.</p>
                  </div>
                  <div>
                    <p className="text-[#00F48D] font-semibold text-xs tracking-wider uppercase mb-2">04 Browser-native stack</p>
                    <p>Original implementation used Python/Dlib/OpenCV on desktop. For web, this was a dead end — dlib requires cmake, OpenCV can&apos;t access browser webcams from a server. Migrated entirely to MediaPipe JS + WebRTC getUserMedia. Everything runs in-browser. Zero install.</p>
                  </div>
                </div>

                <h3 className="text-white text-base font-semibold mb-6">Key Design Decisions</h3>
                <div className="space-y-8 text-[#A7AAB4] text-sm leading-7">
                  <div>
                    <p className="text-[#00F48D] font-semibold text-xs tracking-wider uppercase mb-2">01 Dark terminal aesthetic, not a medical app aesthetic</p>
                    <p>Medical UI defaults to white and clinical. BlinkSpeak uses a dark monospace aesthetic — EAR in electric green, Morse buffer in amber, decoded text in white. It signals &ldquo;precision instrument&rdquo; over &ldquo;patient portal&rdquo;. Real-time data should feel like a live signal being monitored.</p>
                  </div>
                  <div>
                    <p className="text-[#00F48D] font-semibold text-xs tracking-wider uppercase mb-2">02 No keyboard fallback — blinks only during active session</p>
                    <p>Early idea: allow keyboard input as a fallback. Killed it. The moment you add keyboard input, you&apos;ve built a different product for a different user. Blinks-only keeps the product honest about who it&apos;s for.</p>
                  </div>
                  <div>
                    <p className="text-[#00F48D] font-semibold text-xs tracking-wider uppercase mb-2">03 Morse reference always visible, never modal</p>
                    <p>New users will forget the Morse alphabet. Rather than a help modal that requires clicking away, the reference is a collapsible panel that sits alongside the interface — consultable without interrupting the blink session.</p>
                  </div>
                </div>
              </section>

              {/* 06 The Build */}
              <section id="bs-section-06">
                <p className="text-[#00F48D] font-semibold text-sm tracking-wider uppercase mb-3">06&nbsp;&nbsp;The Build</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Vibe-coded with precision.</h2>
                <div className="space-y-4 text-[#A7AAB4] text-sm leading-7">
                  <p>
                    Built using Claude Code as the primary development environment. Architecture co-designed: I specified structure, component boundaries, data flow, and interaction model — Claude implemented and iterated each phase.
                  </p>
                  <p>
                    <span className="text-white font-semibold">The constraint that made it better:</span> Dlib failing to install in the deployment environment forced the MediaPipe JS migration. The result works on any browser, any webcam, any OS, with one click. The constraint was a gift.
                  </p>
                </div>
              </section>

              {/* 07 The Product */}
              <section id="bs-section-07">
                <p className="text-[#00F48D] font-semibold text-sm tracking-wider uppercase mb-3">07&nbsp;&nbsp;The Product</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Four panels. One purpose.</h2>
                <div className="space-y-4 text-[#A7AAB4] text-sm leading-7">
                  <p>
                    <span className="text-white font-semibold">Live Feed:</span> WebRTC stream with EAR overlaid in green. Open/closed state indicator. Browser inference at 30fps — no server round-trip.
                  </p>
                  <p>
                    <span className="text-white font-semibold">Morse Buffer:</span> Dots as filled circles, dashes as rectangles, animated in as registered. In-progress symbol pulses — immediate confirmation before letter commits.
                  </p>
                  <p>
                    <span className="text-white font-semibold">Decoded Message:</span> Typewriter animation per character. Speak (Web Speech API), WhatsApp (FastAPI backend), Copy, Clear.
                  </p>
                  <p>
                    <span className="text-white font-semibold">Controls:</span> EAR threshold (0.20–0.35) and dot/dash duration (5–20 frames) tunable live without restarting — critical for patients with atypical blink physiology.
                  </p>
                </div>
              </section>

              {/* 08 Results & Impact */}
              <section id="bs-section-08">
                <p className="text-[#00F48D] font-semibold text-sm tracking-wider uppercase mb-3">08&nbsp;&nbsp;Results &amp; Impact</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Tested. Published. Deployed.</h2>
                <p className="text-[#A7AAB4] text-sm leading-7">
                  The accuracy graph shows blink accuracy is inversely proportional to frequency — at 20–30 BPM, accuracy approaches 100%. At 50 BPM it degrades. Expected and documented: the tool is calibrated for deliberate, intentional blinks, not reflexive ones.
                </p>
              </section>

              {/* 09 Monetisation Strategy */}
              <section id="bs-section-09">
                <p className="text-[#00F48D] font-semibold text-sm tracking-wider uppercase mb-3">09&nbsp;&nbsp;Monetisation Strategy</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Free for patients. Sustainable by design.</h2>
                <p className="text-[#A7AAB4] text-sm leading-7">
                  The core tool is always free for individual ALS patients. Monetisation targets institutions and healthcare systems that have procurement budgets — not the patients who don&apos;t.
                </p>
              </section>

              {/* 10 Future Work */}
              <section id="bs-section-10">
                <p className="text-[#00F48D] font-semibold text-sm tracking-wider uppercase mb-3">10&nbsp;&nbsp;Future Work</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Roadmap driven by patient need.</h2>
              </section>

              {/* 11 Learnings */}
              <section id="bs-section-11">
                <p className="text-[#00F48D] font-semibold text-sm tracking-wider uppercase mb-3">11&nbsp;&nbsp;Learnings</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-6">Built under real constraints, not ideal ones.</h2>

                <div className="space-y-8 text-[#A7AAB4] text-sm leading-7">
                  <div>
                    <h3 className="text-white text-base font-semibold mb-3">What building taught me about design</h3>
                    <p>
                      Latency is a design problem, not just an engineering one. Moving blink detection from server to browser changed EAR update rate from 200ms to 33ms. That 167ms difference changed how the whole interface felt — from sluggish to alive. You can&apos;t design responsiveness in Figma.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white text-base font-semibold mb-3">What design taught me about building</h3>
                    <p>
                      Making calibration sliders persistent — always visible, not buried in settings — came from a UX principle: don&apos;t hide controls users need to discover by trial and error. That single layout decision made the tool usable for people with atypical blink physiology. Architecture serves people.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white text-base font-semibold mb-3">Key takeaway</h3>
                    <p>
                      The best accessibility tools feel like they have no interface at all. BlinkSpeak at its best is invisible — the patient thinks about what they want to say, not how to use the software. Every design decision should be evaluated against that standard.
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </div>

          {/* Sticky TOC — desktop only */}
          <aside className="hidden md:block w-44 shrink-0">
            <div className="sticky top-20">
              <p className="text-[#A7AAB4] text-xs font-medium tracking-widest mb-4">CONTENTS</p>
              <nav className="flex flex-col gap-2">
                {sections.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`text-left text-xs font-medium transition-colors ${
                      activeSection === id ? "text-white" : "text-[#A7AAB4] hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

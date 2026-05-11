"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useMarsAssistant } from "../context/MarsAssistantContext";
import Footer from "./Footer";


const sections = [
  { id: "section-glance", label: "1. Project at Glance" },
  { id: "section-context", label: "2. Context" },
  { id: "section-problem", label: "3. Problem" },
  { id: "section-research", label: "4. Research" },
  { id: "section-design", label: "5. Design" },
  { id: "section-outcome", label: "6. Outcome" },
  { id: "section-takeaway", label: "7. Takeaway" },
];

export function CaseStudyAspora() {
  const router = useRouter();
  const { openMars } = useMarsAssistant();
  const [activeSection, setActiveSection] = useState<string>("section-glance");
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
        <div className="sticky top-0 z-20 bg-[var(--panel)] border-b border-[var(--border)] px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors text-sm font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
          <span className="text-[var(--text-muted)] text-xs font-medium tracking-wide hidden md:block">
            Improving Platform Navigation
          </span>
          <span className="text-[var(--text-muted)] text-xs font-medium">7 min read</span>
        </div>

        {/* Main layout: content + sticky TOC */}
        <div className="relative flex gap-8 px-6 pt-10 md:pt-12 pb-0 w-full mx-auto md:max-w-212.5">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Hero section */}
            <div className="mb-10">
              <h1 className="text-[var(--text)] text-2xl md:text-3xl font-bold max-w-xl leading-tight mb-6 text-center mx-auto">
                Aspora Referral and Invite: A new experience
              </h1>

              <div className="relative rounded-2xl overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0A1B4D 0%, #2D1B69 50%, #4A148C 100%)" }}>
                <div className="absolute top-4 right-4 z-10 bg-[#1A1B1E]/60 text-white text-xs px-2 py-1 rounded-md font-medium">
                  2025
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/aspora-cover.png"
                  alt="Aspora Referral Screen Redesign"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              {/* Bottom label — outside the gradient box, aligned right */}
              <div className="flex items-center justify-end gap-2 px-4 py-3">
                <p className="text-xs font-medium text-[var(--text-muted)] tracking-wider">CASE STUDY COVER</p>
                <div className="flex items-center justify-center py-1 px-2 border border-[var(--border)] rounded-md bg-[var(--bg)]">
                  <p className="text-sm font-medium tracking-wider text-[var(--text-muted)]">IMG</p>
                </div>
              </div>
            </div>

            {/* Metadata row */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
              {[
                { label: "COMPANY", value: "Aspora" },
                { label: "PLATFORM", value: "IOS. Android" },
                { label: "MY ROLE", value: "Product Designer" },
                { label: "OUTCOME", value: "68% → 89% referral rate" },
                { label: "MARKET", value: "United Kingdom" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[var(--text-muted)] text-xs tracking-widest font-medium mb-1">{label}</p>
                  <p className="text-[var(--text)] text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-[var(--border)] mb-12" />

            {/* Content sections */}
            <div className="space-y-16 pb-16">

              {/* 01 Project at Glance */}
              <section id="section-glance">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">01 · Project at Glance</p>
                <div className="space-y-6 text-[var(--text-muted)] text-sm leading-7">
                  <div>
                    <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">What I Did</h2>
                    <div className="space-y-4">
                      <p>
                        Spearheaded the end-to-end redesign of the UK referral journey to transform an underperforming acquisition loop into a high-converting growth engine.
                      </p>
                      <ul className="list-disc list-outside ml-5 space-y-2">
                        <li>Conducted on-ground ethnographic research by observing 120+ live user interactions at community events to identify &ldquo;invisible&rdquo; friction points that traditional analytics missed.</li>
                        <li>Leveraged AI-integrated workflows (Claude Code) to rapidly prototype and iterate on design hypotheses, focusing on value-led Information Architecture and social proof integration.</li>
                        <li>Eliminated technical friction by replacing manual copy-paste mechanisms with a native contact-invite selector, significantly reducing the &ldquo;time-to-action&rdquo; for users.</li>
                        <li>Delivered a measurable commercial outcome, increasing the referral invite completion rate from 68% to 89% within the UK market.</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">Goal</h2>
                    <p>
                      To drive a measurable increase in UK referral conversions by optimizing the &ldquo;invite-to-action&rdquo; funnel. The objective was to transform dormant user intent into immediate commercial impact by clarifying the £25 value exchange, establishing trust through social proof, and eliminating technical friction to lower the overall Cost Per Lead (CPL).
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">The Challenge in One Sentence</h2>
                    <p>
                      Despite a high-value £25 double-sided incentive, Aspora&apos;s UK referral funnel was underperforming at 68% due to critical trust friction and high cognitive load at the point of invite.
                    </p>
                  </div>
                </div>
              </section>

              {/* 02 Context */}
              <section id="section-context">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">02 · Context</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">
                  A great feature that UK users weren't using
                </h2>
                <div className="space-y-4 text-[var(--text-muted)] text-sm leading-7">
                  <p>
                    Aspora is a fintech platform designed for the UK and UAE diaspora, focusing on financial confidence and cross-border growth. While the referral program featured a competitive £25 double-sided incentive, UK engagement remained significantly below its commercial potential.
                  </p>
                  <p>
                    My role provided unique ground-level access that bridged the gap between product strategy and actual user intent. By facilitating live app downloads and first-time transfers at community events, I observed exactly where high-intent users hesitated. This direct ethnographic insight allowed me to treat user friction not just as a design flaw, but as a measurable opportunity for conversion optimization.
                  </p>
                </div>
              </section>

              {/* 03 Problem */}
              <section id="section-problem">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">03 · Problem</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">
                  A £25 reward wasn't enough.
                </h2>
                <div className="space-y-4 text-[var(--text-muted)] text-sm leading-7">
                  <p>
                    On paper, the £25 double-sided incentive was a high-performing lead-gen tool, yet the conversion rate was stagnant at 68%. Despite a clear value exchange, the referral journey failed to drive action, creating a performance ceiling that hindered organic growth and increased the effective Cost Per Lead (CPL). The challenge wasn&apos;t the incentive&apos;s value; it was a breakdown in the conversion-to-action pipeline caused by underlying trust friction and excessive cognitive load at the point of invite.
                  </p>
                </div>
              </section>

              {/* 04 Research */}
              <section id="section-research">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">04 · Research</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">
                  Identifying Friction through Behavioral Observation
                </h2>
                <div className="space-y-4 text-[var(--text-muted)] text-sm leading-7">
                  <p>
                    To move beyond surface-level analytics, I leveraged my role at major community events across the UK to conduct on-ground ethnographic research. By observing 120+ first-time users as they navigated the referral journey in high-intent environments, I identified critical behavioral signals that informed my optimization strategy.
                  </p>
                  <p>
                    This observational study allowed me to pinpoint exactly where users paused, hesitated, or abandoned the funnel—translating &ldquo;silent&rdquo; friction into actionable data points. I specifically focused on identifying the psychological barriers that prevented users from completing the invite action, ensuring my research directly supported the objective of increasing funnel performance.
                  </p>
                </div>

                {/* Event photos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/images/aspora/event-1.jpg"
                      alt="Ishan helping users at Aspora event booth"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/images/aspora/event-2.jpg"
                      alt="Ishan at Aspora brand activation event"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <p className="font-semibold text-[var(--text)]">Behavioral Insights: Four Repeated Friction Patterns</p>
                <p>
                  Through direct observation and funnel analysis, I identified four critical friction points that inhibited conversion and prevented users from acting on high-intent signals:
                </p>
                <ul className="list-disc list-outside ml-5 space-y-3">
                  <li><span className="text-[var(--text)] font-medium">01 · Value Blindness (Incentive Recognition):</span> Users failed to register the £25 reward headline, perceiving the invite as a simple download link share rather than a high-value financial exchange.</li>
                  <li><span className="text-[var(--text)] font-medium">02 · Social Friction (Lack of Validation):</span> The absence of social proof created &ldquo;first-to-try&rdquo; anxiety; without signals that others were referring, the action felt socially risky instead of normalized.</li>
                  <li><span className="text-[var(--text)] font-medium">03 · Cognitive Load (Process Obscurity):</span> Users were unclear on the &ldquo;how-it-works&rdquo; mechanics—specifically the friend&apos;s required actions and payout triggers—leading to hesitation and funnel drop-off.</li>
                  <li><span className="text-[var(--text)] font-medium">04 · Interaction Friction (High-Effort UX):</span> The requirement to manually copy, switch apps, and paste a link into WhatsApp served as a high-effort technical barrier that most users were unwilling to accept at the point of intent.</li>
                </ul>
              </section>

              {/* 05 Design */}
              <section id="section-design">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">05 · Design</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">
                  Strategic Optimizations for Conversion
                </h2>

                {/* Vimeo embed — 4 screens walkthrough */}
                <div className="w-full rounded-lg bg-[var(--card)] border border-[var(--border)] overflow-hidden mb-8">
                  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      src="https://player.vimeo.com/video/1188779381?title=0&byline=0&portrait=0&transparent=1"
                      className="absolute inset-0 w-full h-full rounded-lg"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <p>
                  By leveraging AI-integrated workflows (Claude Code) for rapid prototyping and iteration, I implemented four structural changes to align the interface with high-intent user behavior:
                </p>
                <ul className="list-disc list-outside ml-5 space-y-3">
                  <li><span className="text-[var(--text)] font-medium">Value-First Information Architecture:</span> Promoted the £25 reward to the primary headline, ensuring the &ldquo;give-to-get&rdquo; value exchange was visible above the fold in clear, persuasive language.</li>
                  <li><span className="text-[var(--text)] font-medium">Trust-Building Social Proof:</span> Integrated real-time signals of active referrers to provide immediate social validation and lower the &ldquo;first-to-try&rdquo; anxiety identified during ethnographic research.</li>
                  <li><span className="text-[var(--text)] font-medium">Reducing Cognitive Load:</span> Clarified the reward lifecycle with a transparent, three-step visual guide (Invite → Transfer → Reward) to eliminate uncertainty regarding payout triggers.</li>
                  <li><span className="text-[var(--text)] font-medium">Seamless Direct Interaction:</span> Replaced the high-friction manual copy-paste workflow with an integrated contact selector, drastically reducing &ldquo;time-to-action&rdquo; and technical abandonment.</li>
                </ul>
              </section>

              {/* 06 Outcome */}
              <section id="section-outcome">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">06 · Outcome</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">
                  Invite rates moved from 68% to 89%.
                </h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-8">
                  After the redesign went live in the UK, the share of users completing a referral invite increased from 68% to 89%.
                </p>

                {/* Stat card */}
                <div className="border border-[var(--border)] rounded-xl p-6 inline-block min-w-[220px]">
                  <p className="text-[var(--text-muted)] text-xs tracking-widest font-medium mb-4">UNITED KINGDOM</p>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-[var(--text-muted)] text-2xl font-bold line-through">68%</span>
                    <span className="text-[var(--text)] text-5xl font-extrabold">89%</span>
                  </div>
                  <p className="text-[var(--text-muted)] text-xs">Share of users completing a referral invite</p>
                </div>
              </section>

              {/* 07 Takeaway */}
              <section id="section-takeaway">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">07 · Takeaway</p>
                <p className="text-[var(--text-muted)] text-sm leading-7">
                  The redesign worked because the research was close to the product. Sitting with users as they installed the app surfaced problems that wouldn't have shown up in analytics or in scheduled interviews. The ambassador role wasn't separate from the design work — it was the input for it.
                </p>
              </section>

            </div>
          </div>

          {/* Sticky TOC — desktop only */}
          <aside className="hidden md:block w-44 shrink-0">
            <div className="sticky top-20">
              <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-4">CONTENTS</p>
              <nav className="flex flex-col gap-2">
                {sections.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`text-left text-xs font-medium transition-colors ${
                      activeSection === id ? "text-[var(--text)]" : "text-[var(--text-muted)] hover:text-[var(--text)]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
                <button
                  onClick={openMars}
                  className="text-left text-xs font-medium mt-2 transition-all duration-200"
                  style={{
                    color: "#00D9A3",
                    textShadow: "0 0 0px #00D9A3",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#33e8b8";
                    (e.currentTarget as HTMLButtonElement).style.textShadow = "0 0 8px #00D9A3, 0 0 16px #00D9A366";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#00D9A3";
                    (e.currentTarget as HTMLButtonElement).style.textShadow = "0 0 0px #00D9A3";
                  }}
                >
                  Ask Mars about Aspora
                </button>
              </nav>
            </div>
          </aside>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

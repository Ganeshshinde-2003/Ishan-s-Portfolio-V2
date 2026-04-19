"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigation } from "../context/NavigationContext";
import Footer from "./Footer";

const sections = [
  { id: "section-context", label: "Context" },
  { id: "section-problem", label: "The Problem" },
  { id: "section-research", label: "Research" },
  { id: "section-design", label: "Design" },
  { id: "section-outcome", label: "Outcome" },
  { id: "section-takeaway", label: "Takeaway" },
];

export function CaseStudyAspora() {
  const { setActiveNav } = useNavigation();
  const [activeSection, setActiveSection] = useState<string>("section-context");
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
          <span className="text-[#A7AAB4] text-xs font-medium tracking-wide hidden md:block">
            Improving Platform Navigation
          </span>
          <span className="text-[#A7AAB4] text-xs font-medium">7 min read</span>
        </div>

        {/* Main layout: content + sticky TOC */}
        <div className="relative flex gap-8 px-6 pt-10 md:pt-12 pb-0 w-full mx-auto md:max-w-212.5">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Hero section */}
            <div className="mb-10">
              <h1 className="text-white text-2xl md:text-3xl font-bold max-w-xl leading-tight mb-6 text-center mx-auto">
                Aspora Referral and Invite: A new experience
              </h1>

              <div className="relative rounded-2xl overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0A1B4D 0%, #2D1B69 50%, #4A148C 100%)" }}>
                <div className="px-6 pt-10 pb-6 flex flex-col items-center text-center">
                  {/* Phone mockup placeholder */}
                  <div className="relative w-full max-w-sm mx-auto">
                    <div className="absolute top-3 right-3 z-10 bg-[#1A1B1E]/60 text-white text-xs px-2 py-1 rounded-md font-medium">
                      2025
                    </div>
                    <div className="w-full aspect-[3/2] rounded-xl bg-gradient-to-br from-[#6B46C1] to-[#4C1D95] flex items-center justify-center">
                      <span className="text-white/40 text-sm font-medium">[ Mobile mockup ]</span>
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

            {/* Metadata row */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
              {[
                { label: "COMPANY", value: "Aspora" },
                { label: "PLATFORM", value: "IOS. Android" },
                { label: "MY ROLE", value: "UX Designer & Student Ambassador" },
                { label: "OUTCOME", value: "68% → 89% referral rate" },
                { label: "MARKET", value: "United Kingdom" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[#A7AAB4] text-xs tracking-widest font-medium mb-1">{label}</p>
                  <p className="text-white text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-[#2F3037] mb-12" />

            {/* Content sections */}
            <div className="space-y-16 pb-16">

              {/* 01 Context */}
              <section id="section-context">
                <p className="text-[#A7AAB4] text-xs font-medium tracking-widest mb-3">01 · Context</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
                  A great feature that UK users weren't using
                </h2>
                <div className="space-y-4 text-[#A7AAB4] text-sm leading-7">
                  <p>
                    Aspora is a fintech platform built for the UK and UAE diaspora helping people send money, build financial confidence, and grow together. The referral programme promised real value: £25 for the inviter and £25 for the friend. But UK users weren't engaging with it anywhere near its potential.
                  </p>
                  <p>
                    As a Student Ambassador, my role gave me something most designers don't get, ground-level access. I helped real users download the app at live events, watched where they got confused, and listened carefully to what made them hesitate. That friction became the foundation of our redesign.
                  </p>
                </div>
              </section>

              {/* 02 The Problem */}
              <section id="section-problem">
                <p className="text-[#A7AAB4] text-xs font-medium tracking-widest mb-3">02 · The Problem</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
                  A £25 reward wasn't enough.
                </h2>
                <div className="space-y-4 text-[#A7AAB4] text-sm leading-7">
                  <p>
                    On paper, the offer was strong. £25 for the person sending the invite, £25 for the friend who signed up. For a first-time money transfer, that's a meaningful amount. But UK invite rates were stuck at 68%, well below what the programme should have been delivering. The screen worked. The reward was real. Users just weren't acting on it.
                  </p>
                  <p>
                    The question wasn't whether the incentive was big enough — it was why users didn't trust it, understand it, or follow through.
                  </p>
                </div>
              </section>

              {/* 03 Research */}
              <section id="section-research">
                <p className="text-[#A7AAB4] text-xs font-medium tracking-widest mb-3">03 · Research</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
                  Watching users at the point of use.
                </h2>
                <div className="space-y-4 text-[#A7AAB4] text-sm leading-7">
                  <p>
                    The Student Ambassador role put me at events where diaspora users actually were — Diwali markets, university events, food festivals, community meetups across London, Leicester, Birmingham, and Manchester.
                  </p>
                  <p>
                    My job at these events was to help people download Aspora and send their first transfer. That meant sitting next to users as they went through the app for the first time, including the referral screen. Over a few months I worked with around 100–120 people this way.
                  </p>
                  <p>
                    I wasn't running formal interviews. I was watching where users paused, what they asked about, and what made them close the app.
                  </p>
                </div>

                {/* Image placeholders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#6B46C1] to-[#4C1D95] flex items-center justify-center">
                    <span className="text-white/40 text-xs font-medium">[ Ambassador event image ]</span>
                  </div>
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#6B46C1] to-[#4C1D95] flex items-center justify-center">
                    <span className="text-white/40 text-xs font-medium">[ Ambassador event image ]</span>
                  </div>
                </div>

                <p className="text-white text-sm font-semibold mb-4">Four patterns came up repeatedly:</p>
                <div className="space-y-4">
                  {[
                    { num: "01", title: "Unclear benefit", body: "Users didn't register the £25 reward. Most thought they were just sharing a download link." },
                    { num: "02", title: "No social proof", body: "Nothing on the screen suggested other users were referring. Sending the first invite felt risky." },
                    { num: "03", title: "Unclear mechanics", body: "Users weren't sure what the friend had to do, or when the £25 actually arrived." },
                    { num: "04", title: "Too much effort", body: "Copying a link and pasting it into WhatsApp was more friction than most users would accept." },
                  ].map(({ num, title, body }) => (
                    <div key={num} className="flex gap-4">
                      <span className="text-[#A7AAB4] text-xs font-medium tracking-widest mt-0.5 shrink-0">{num}</span>
                      <p className="text-[#A7AAB4] text-sm leading-7">
                        <span className="text-white font-semibold">{title}</span> — {body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 04 Design */}
              <section id="section-design">
                <p className="text-[#A7AAB4] text-xs font-medium tracking-widest mb-3">04 · Design</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
                  Four changes to the screen.
                </h2>

                {/* Wide placeholder for 4 screens */}
                <div className="w-full rounded-lg bg-white/5 border border-[#2F3037] aspect-[16/6] flex items-center justify-center mb-8">
                  <span className="text-[#A7AAB4] text-xs font-medium">[ 4 mobile screens ]</span>
                </div>

                <div className="space-y-4">
                  {[
                    { num: "01", title: "Made the £25 reward the headline", body: "Led the screen with the value exchange — £25 for you, £25 for your friend — in plain language, visible without scrolling." },
                    { num: "02", title: "Added social proof", body: "Surfaced the number of users already referring, so sending an invite felt normal rather than unusual." },
                    { num: "03", title: "Explained how it works", body: "A three-step breakdown - invite a friend, they make their first transfer, you both get £25 - so there were no open questions." },
                    { num: "04", title: "Enabled direct contact invites", body: "Users could select contacts and send invites from inside the app, removing the copy-paste step entirely." },
                  ].map(({ num, title, body }) => (
                    <div key={num} className="flex gap-4">
                      <span className="text-[#A7AAB4] text-xs font-medium tracking-widest mt-0.5 shrink-0">{num}</span>
                      <p className="text-[#A7AAB4] text-sm leading-7">
                        <span className="text-white font-semibold">{title}</span> — {body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 05 Outcome */}
              <section id="section-outcome">
                <p className="text-[#A7AAB4] text-xs font-medium tracking-widest mb-3">05 · Outcome</p>
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
                  Invite rates moved from 68% to 89%.
                </h2>
                <p className="text-[#A7AAB4] text-sm leading-7 mb-8">
                  After the redesign went live in the UK, the share of users completing a referral invite increased from 68% to 89%.
                </p>

                {/* Stat card */}
                <div className="border border-[#2F3037] rounded-xl p-6 inline-block min-w-[220px]">
                  <p className="text-[#A7AAB4] text-xs tracking-widest font-medium mb-4">UNITED KINGDOM</p>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-[#A7AAB4] text-2xl font-bold line-through">68%</span>
                    <span className="text-white text-5xl font-extrabold">89%</span>
                  </div>
                  <p className="text-[#A7AAB4] text-xs">Share of users completing a referral invite</p>
                </div>
              </section>

              {/* 06 Takeaway */}
              <section id="section-takeaway">
                <p className="text-[#A7AAB4] text-xs font-medium tracking-widest mb-3">06 · Takeaway</p>
                <p className="text-[#A7AAB4] text-sm leading-7">
                  The redesign worked because the research was close to the product. Sitting with users as they installed the app surfaced problems that wouldn't have shown up in analytics or in scheduled interviews. The ambassador role wasn't separate from the design work — it was the input for it.
                </p>
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

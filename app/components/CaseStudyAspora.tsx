"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useMarsAssistant } from "../context/MarsAssistantContext";
import Footer from "./Footer";

const sections = [
  { id: "aspora-section-1", label: "1. Project at Glance" },
  { id: "aspora-section-2", label: "2. Problem" },
  { id: "aspora-section-3", label: "3. Design Strategy" },
  { id: "aspora-section-4", label: "4. Stakeholder" },
  { id: "aspora-section-5", label: "5. User" },
  { id: "aspora-section-6", label: "6. Competition" },
  { id: "aspora-section-7", label: "7. Platform Study" },
  { id: "aspora-section-8", label: "8. Ideation" },
  { id: "aspora-section-8a", label: "— Approach" },
  { id: "aspora-section-8b", label: "— Key Insights" },
  { id: "aspora-section-9", label: "9. Visual Design & UI" },
];

export function CaseStudyAspora() {
  const router = useRouter();
  const { openMars } = useMarsAssistant();
  const [activeSection, setActiveSection] = useState<string>("aspora-section-1");
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
            Aspora — Referral Funnel Redesign
          </span>
          <span className="text-[var(--text-muted)] text-xs font-medium">10 min read</span>
        </div>

        {/* Main layout: content + sticky TOC */}
        <div className="relative flex gap-8 px-6 pt-10 md:pt-12 pb-0 w-full mx-auto md:max-w-212.5">
          {/* Main content */}
          <div className="flex-1 min-w-0">

            {/* Hero */}
            <div className="mb-10">
              <h1 className="text-[var(--text)] text-2xl md:text-3xl font-bold max-w-xl leading-tight mb-6 text-center mx-auto">
                Optimizing the Referral Funnel for 31% Relative Conversion Growth
              </h1>
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0A1B4D 0%, #2D1B69 50%, #4A148C 100%)" }}
              >
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
                { label: "PLATFORM", value: "iOS/Android" },
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

            {/* What I Did */}
            <div className="mb-6">
              <p className="text-[var(--text)] text-sm font-bold mb-2">WHAT I DID ?</p>
              <p className="text-[var(--text-muted)] text-sm leading-7">
                Spearheaded the end-to-end redesign of the UK referral journey, conducting on-ground ethnographic research at community events, then using AI-integrated workflows to rapidly prototype and ship a higher-converting flow.
              </p>
              <p className="text-[var(--text)] text-sm font-semibold mt-4 mb-1">The Challenge in One Sentence:</p>
              <p className="text-[var(--text-muted)] text-sm leading-7">
                Despite a high-value £25 double-sided incentive, Aspora&apos;s UK referral funnel was underperforming at 68% due to critical trust friction and high cognitive load at the point of invite.
              </p>
            </div>

            <div className="border-t border-[var(--border)] mb-12" />

            {/* Content sections */}
            <div className="space-y-16 pb-16">

              {/* 1. Project at a Glance */}
              <section id="aspora-section-1">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">TEASER SECTION · 1 min Read</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-2">1. Project at a Glance</h2>
                <p className="text-[var(--accent)] text-xs font-semibold tracking-wider mb-4">CONTEXT & PROBLEM</p>
                <div className="space-y-4 text-[var(--text-muted)] text-sm leading-7">
                  <p>Aspora is a fintech platform for the UK and UAE diaspora. Its referral program offered a competitive £25 double-sided incentive, yet UK engagement stayed well below its commercial potential — stuck at a 68% invite completion rate.</p>
                  <p>My role gave me ground-level access that bridged product strategy and real user intent — facilitating live app downloads and first transfers at community events let me see exactly where high-intent users hesitated.</p>
                </div>
                <p className="text-[var(--text)] text-sm font-semibold mt-6 mb-3">RESEARCH APPROACH</p>
                <div className="space-y-2 text-[var(--text-muted)] text-sm leading-7">
                  {[
                    "Observed 120+ live user interactions at community events to find friction analytics couldn't show",
                    "Used AI-integrated workflows (Claude Code) to rapidly prototype and test hypotheses",
                    "Replaced manual copy-paste sharing with a native contact-invite selector",
                    "Shipped and measured the redesign against the live UK funnel",
                  ].map((item) => (
                    <div key={item} className="flex gap-3"><span className="text-[var(--accent)] shrink-0">→</span><p>{item}</p></div>
                  ))}
                </div>
                <p className="text-[var(--text)] text-sm font-semibold mt-6 mb-3">BUSINESS IMPACT</p>
                <div className="space-y-2 text-[var(--text-muted)] text-sm leading-7">
                  {[
                    "Referral invite completion rate rose from 68% to 89% (31% relative growth)",
                    "Lower effective Cost Per Lead (CPL) from the UK referral channel",
                    "Validated ambassador-led, on-ground research as a repeatable model for future markets",
                  ].map((item) => (
                    <div key={item} className="flex gap-3"><span className="text-[var(--accent)] shrink-0">→</span><p>{item}</p></div>
                  ))}
                </div>
                <p className="text-[var(--text)] text-sm font-semibold mt-6 mb-2">GOAL</p>
                <p className="text-[var(--text-muted)] text-sm leading-7">To drive a measurable increase in UK referral conversions by optimizing the &ldquo;invite-to-action&rdquo; funnel — clarifying the £25 value exchange, establishing trust through social proof, and eliminating technical friction to lower Cost Per Lead (CPL).</p>
              </section>

              {/* 2. Problem Worth Solving */}
              <section id="aspora-section-2">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">FULL CASE STUDY</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">2. Problem Worth Solving</h2>
                <div className="space-y-4 text-[var(--text-muted)] text-sm leading-7">
                  <p><span className="text-[var(--text)] font-semibold">User Problem:</span> Users didn&apos;t register the £25 reward as a real financial exchange, saw no social proof that others were referring, weren&apos;t clear how the payout worked, and hit a high-effort copy-paste step right at the point of intent.</p>
                  <p><span className="text-[var(--text)] font-semibold">Business Problem:</span> A strong incentive alone wasn&apos;t enough — the conversion-to-action pipeline had a ceiling that inflated effective CPL and slowed organic growth in the UK market.</p>
                </div>
              </section>

              {/* 3. Design Strategy */}
              <section id="aspora-section-3">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">03 · DESIGN STRATEGY</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">3. Design Strategy — 4 Areas I Focused On</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Understanding User Behavior On the Ground", body: "Where exactly did high-intent users pause or abandon the invite flow in real, live settings?" },
                    { title: "Understanding the Funnel Data", body: "What did the 68% completion rate hide about drop-off points along the journey?" },
                    { title: "Understanding Trust Signals in Fintech", body: "What lessons could be drawn from how other referral-driven fintechs build confidence?" },
                    { title: "Understanding Aspora's Existing Flow", body: "Where were the usability gaps in the current referral screen, and how could they be closed?" },
                  ].map(({ title, body }) => (
                    <div key={title} className="border border-[#2F3037] rounded-xl p-5 bg-[#232529]">
                      <p className="text-[var(--text)] text-sm font-semibold mb-2">{title}</p>
                      <p className="text-[var(--text-muted)] text-xs leading-6">{body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 4. Stakeholder Vision */}
              <section id="aspora-section-4">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">04 · STAKEHOLDERS</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">4. Stakeholder Vision</h2>
                <p className="text-[var(--text-muted)] text-xs font-medium mb-4 italic">— Placeholder content pending confirmation</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: "Grow organic acquisition", body: "Reduce reliance on paid channels by making referrals the primary UK growth lever." },
                    { title: "Prove the ambassador model", body: "Validate on-ground research as a repeatable input for design decisions in other markets." },
                    { title: "Protect the incentive economics", body: "Improve conversion without increasing the £25 payout, keeping CPL sustainable." },
                  ].map(({ title, body }) => (
                    <div key={title} className="border border-[#2F3037] rounded-xl p-5 bg-[#232529]">
                      <p className="text-[var(--text)] text-sm font-semibold mb-2">{title}</p>
                      <p className="text-[var(--text-muted)] text-xs leading-6">{body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 5. Users Wanted Trust & Speed */}
              <section id="aspora-section-5">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">05 · USERS</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">5. Users Wanted Trust & Speed</h2>
                <div className="space-y-3 mb-8">
                  {[
                    { title: "Value Blindness", body: "Users failed to register the £25 reward headline, perceiving the invite as a simple download link share rather than a high-value financial exchange." },
                    { title: "Social Friction", body: "The absence of social proof created \u2018first-to-try\u2019 anxiety; without signals that others were referring, the action felt socially risky instead of normalized." },
                    { title: "Cognitive Load", body: "Users were unclear on the \u2018how-it-works\u2019 mechanics — specifically the friend\u2019s required actions and payout triggers — leading to hesitation and drop-off." },
                    { title: "Interaction Friction", body: "The requirement to manually copy, switch apps, and paste a link into WhatsApp was a high-effort barrier most users weren\u2019t willing to accept at the point of intent." },
                  ].map(({ title, body }) => (
                    <div key={title} className="flex gap-4">
                      <span className="text-[var(--accent)] shrink-0 mt-0.5">→</span>
                      <p className="text-[var(--text-muted)] text-sm leading-7"><span className="text-[var(--text)] font-semibold">{title}:</span> {body}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/aspora/event-1.jpg"
                      alt="Ishan helping users at Aspora event booth"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/aspora/event-2.jpg"
                      alt="Ishan at Aspora brand activation event"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </section>

              {/* 6. Competition */}
              <section id="aspora-section-6">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">06 · COMPETITIVE ANALYSIS</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">6. Competition</h2>
                <p className="text-[var(--text-muted)] text-xs font-medium mb-4 italic">— Placeholder content pending confirmation</p>
                <div className="space-y-3 mb-6">
                  {[
                    { title: "Remittance apps\u2019 limitation", body: "Most lead with a flat reward amount but give no lifecycle clarity, leaving users unsure when they\u2019ll actually get paid." },
                    { title: "Neobank gap", body: "Challenger banks like Revolut and Wise lean on in-app leaderboards and streaks, which work for engaged users but do little for first-time, low-trust invites." },
                    { title: "Aspora\u2019s opportunity", body: "Combine a clear value-first headline with lightweight social proof, without needing a full gamification layer." },
                    { title: "Trust as foundation", body: "Diaspora users specifically needed reassurance the reward and transfer were legitimate — more so than typical domestic fintech users." },
                  ].map(({ title, body }) => (
                    <div key={title} className="flex gap-4">
                      <span className="text-[var(--accent)] shrink-0 mt-0.5">→</span>
                      <p className="text-[var(--text-muted)] text-sm leading-7"><span className="text-[var(--text)] font-semibold">{title}:</span> {body}</p>
                    </div>
                  ))}
                </div>
                <div className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] mt-6 aspect-[16/6] flex items-center justify-center">
                  <span className="text-[var(--text-muted)] text-xs font-medium">[ Competitive landscape matrix ]</span>
                </div>
              </section>

              {/* 7. Platform Study */}
              <section id="aspora-section-7">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">07 · PLATFORM STUDY</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">7. Platform Study — Gaps & Opportunities</h2>
                <div className="space-y-3">
                  {[
                    "The £25 reward was mentioned but not visually prioritized on the screen",
                    "No indication that other users were actively referring — no social proof",
                    "No visual explanation of the invite → transfer → reward lifecycle",
                    "Sharing required manually copying a link and pasting it into a separate messaging app",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-[var(--text-muted)] text-sm leading-7">
                      <span className="text-red-400 shrink-0">→</span><p>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] mt-6 aspect-[16/6] flex items-center justify-center">
                  <span className="text-[var(--text-muted)] text-xs font-medium">[ Platform audit screenshots ]</span>
                </div>
              </section>

              {/* 8. Ideation */}
              <section id="aspora-section-8">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">08 · IDEATION</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">8. Ideation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {[
                    { title: "Value-first headline", body: "Promote the £25 reward to the primary headline, visible above the fold in persuasive, plain language." },
                    { title: "Live social proof", body: "Surface real-time signals of active referrers to lower first-to-try anxiety." },
                    { title: "Reward lifecycle guide", body: "A transparent three-step visual (Invite → Transfer → Reward) to remove uncertainty about payout timing." },
                    { title: "Native contact-invite selector", body: "Replace manual copy-paste with a direct, in-app contact picker to cut time-to-action." },
                    { title: "Gamified referral tiers", body: "Milestone-based badges for repeat referrers to sustain engagement beyond the first invite." },
                    { title: "Post-invite nudges", body: "Lightweight reminders to referred contacts who haven\u2019t completed onboarding yet." },
                  ].map(({ title, body }) => (
                    <div key={title} className="border border-[var(--border)] rounded-xl p-5 bg-[var(--card)]">
                      <p className="text-[var(--text)] text-sm font-semibold mb-2">{title}</p>
                      <p className="text-[var(--text-muted)] text-xs leading-6">{body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 8a. Approach */}
              <section id="aspora-section-8a">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">08a · APPROACH</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-6">Approach</h2>
                <div className="space-y-8">
                  {[
                    {
                      num: "APPROACH 1",
                      title: "Education-first explainer modal",
                      body: "Show a short explainer on how referrals and payouts work before letting users reach the invite screen, addressing the confusion we observed on-site.",
                      decision: "❌ Rejected",
                      decisionNote: "Added a step before value was visible — exactly the kind of friction we were trying to remove.",
                      pros: [
                        "Could pre-empt confusion about payout timing",
                        "Sets expectations upfront for first-time users",
                      ],
                      cons: [
                        "Delays the £25 headline the user actually cares about",
                        "Extra screen users are likely to skip or abandon",
                      ],
                    },
                    {
                      num: "APPROACH 2",
                      title: "Leaderboard-style gamification",
                      body: "Rank users by number of successful referrals with badges and tiers, borrowing from neobank engagement patterns.",
                      decision: "⚠️ Partially adopted",
                      decisionNote: "Kept the lightweight idea of visible referrer counts, but dropped ranks/badges — too heavy for a one-time, high-trust decision.",
                      pros: [
                        "Strong for repeat, engaged users",
                        "Adds a light social-proof signal",
                      ],
                      cons: [
                        "Doesn\u2019t address first-time trust or the copy-paste friction",
                        "Feels like a distraction on a first visit to the screen",
                      ],
                    },
                    {
                      num: "APPROACH 3",
                      title: "Value-first, low-friction invite",
                      body: "Lead with the reward, show simple social proof and a lifecycle guide, then let the user invite a contact directly with no manual copy-paste.",
                      decision: "✅ Adopted",
                      decisionNote: "Directly addressed all four friction patterns observed on the ground, with the least added steps.",
                      pros: [
                        "Matches exactly what we observed users hesitate on",
                        "Fastest path from intent to completed invite",
                      ],
                      cons: [
                        "Needs a native contact-picker integration",
                        "Social proof numbers need to stay current to stay credible",
                      ],
                    },
                  ].map(({ num, title, body, decision, decisionNote, pros, cons }) => (
                    <div key={num} className="border border-[var(--border)] rounded-xl overflow-hidden">
                      <div className="bg-[var(--card)] px-6 py-4 border-b border-[var(--border)]">
                        <p className="text-[var(--text-muted)] text-xs tracking-widest font-medium mb-1">{num}</p>
                        <h3 className="text-[var(--text)] text-base font-bold">{title}</h3>
                      </div>
                      <div className="px-6 py-5">
                        <p className="text-[var(--text-muted)] text-sm leading-7 mb-4">{body}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-[var(--text)] text-xs font-semibold mb-2">Why this would work</p>
                            <div className="space-y-1">{pros.map(p => <div key={p} className="flex gap-2 text-xs text-[var(--text-muted)] leading-5"><span className="text-green-400 shrink-0">+</span><p>{p}</p></div>)}</div>
                          </div>
                          <div>
                            <p className="text-[var(--text)] text-xs font-semibold mb-2">Challenges</p>
                            <div className="space-y-1">{cons.map(c => <div key={c} className="flex gap-2 text-xs text-[var(--text-muted)] leading-5"><span className="text-red-400 shrink-0">−</span><p>{c}</p></div>)}</div>
                          </div>
                        </div>
                        <div className="border-t border-[var(--border)] pt-4">
                          <p className="text-[var(--text)] text-xs font-bold mb-1">Decision: {decision}</p>
                          <p className="text-[var(--text-muted)] text-xs leading-5">{decisionNote}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 8b. Key Insights */}
              <section id="aspora-section-8b">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">08b · KEY INSIGHTS</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-6">Key Insights</h2>
                <div className="space-y-4">
                  {[
                    { num: "01", title: "\u201cThe reward has to be seen, not just offered\u201d", body: "A generous incentive buried in body copy performs the same as no incentive at all." },
                    { num: "02", title: "\u201cFirst-time trust needs a social signal\u201d", body: "Even a simple \u2018X people referred this month\u2019 reduced the sense of being the first to try something unproven." },
                    { num: "03", title: "\u201cClarity beats persuasion\u201d", body: "Users didn\u2019t need convincing to refer — they needed to understand exactly when and how they\u2019d get paid." },
                    { num: "04", title: "\u201cRemove the manual step, not just explain it\u201d", body: "No amount of copy could fix a UX flow that still required leaving the app to paste a link." },
                  ].map(({ num, title, body }) => (
                    <div key={num} className="flex gap-4">
                      <span className="text-[var(--text-muted)] text-xs font-medium tracking-widest mt-0.5 shrink-0">{num}</span>
                      <p className="text-[var(--text-muted)] text-sm leading-7"><span className="text-[var(--text)] font-semibold">{title}</span> — {body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 9. Visual Design & UI */}
              <section id="aspora-section-9">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">09 · VISUAL DESIGN & UI</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">9. Visual Design & UI</h2>

                {/* Vimeo embed */}
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

                {/* Placeholder screens */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {[
                    "Referral screen — value-first headline",
                    "Social proof + reward lifecycle guide",
                    "Native contact-invite selector",
                  ].map((label) => (
                    <div
                      key={label}
                      className="rounded-xl border border-[var(--border)] bg-[var(--card)] aspect-[9/16] flex items-center justify-center p-4"
                    >
                      <span className="text-[var(--text-muted)] text-xs font-medium text-center">[ {label} ]</span>
                    </div>
                  ))}
                </div>

                {/* Outcome stat card */}
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">
                  After the redesign went live in the UK, the share of users completing a referral invite increased from 68% to 89%.
                </p>
                <div className="border border-[var(--border)] rounded-xl p-6 inline-block min-w-[220px] mb-10">
                  <p className="text-[var(--text-muted)] text-xs tracking-widest font-medium mb-4">UNITED KINGDOM</p>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-[var(--text-muted)] text-2xl font-bold line-through">68%</span>
                    <span className="text-[var(--text)] text-5xl font-extrabold">89%</span>
                  </div>
                  <p className="text-[var(--text-muted)] text-xs">Share of users completing a referral invite</p>
                </div>

                {/* Takeaway */}
                <div className="border-t border-[var(--border)] pt-8">
                  <p className="text-[var(--text)] text-sm font-bold mb-3">TAKEAWAY</p>
                  <p className="text-[var(--text-muted)] text-sm leading-7">
                    The redesign worked because the research was close to the product. Sitting with users as they installed the app surfaced problems that wouldn&apos;t have shown up in analytics or scheduled interviews — the ambassador role wasn&apos;t separate from the design work, it was the input for it.
                  </p>
                </div>
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

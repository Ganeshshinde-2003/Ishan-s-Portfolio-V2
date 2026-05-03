"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigation } from "../context/NavigationContext";
import { useMarsAssistant } from "../context/MarsAssistantContext";
import Footer from "./Footer";

const sections = [
  { id: "zoth-section-1", label: "1. Project at Glance" },
  { id: "zoth-section-2", label: "2. Problem" },
  { id: "zoth-section-3", label: "3. Design Strategy" },
  { id: "zoth-section-4", label: "4. Stakeholder" },
  { id: "zoth-section-5", label: "5. User" },
  { id: "zoth-section-6", label: "6. Competition" },
  { id: "zoth-section-7", label: "7. Platform Study" },
  { id: "zoth-section-8", label: "8. Ideation" },
  { id: "zoth-section-8a", label: "— Approach" },
  { id: "zoth-section-8b", label: "— Key Insights" },
  { id: "zoth-section-9", label: "9. Design System" },
  { id: "zoth-section-10", label: "10. Visual Design & UI" },
  { id: "zoth-section-11", label: "11. Interactive Prototype" },
];

export function CaseStudyZoth() {
  const { setActiveNav } = useNavigation();
  const { openMars } = useMarsAssistant();
  const [activeSection, setActiveSection] = useState<string>("zoth-section-1");
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
            onClick={() => setActiveNav("home")}
            className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors text-sm font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
          <span className="text-[var(--text-muted)] text-xs font-medium tracking-wide hidden md:block">
            Zoth.io - RWA Investment Platform
          </span>
          <span className="text-[var(--text-muted)] text-xs font-medium">7 min read</span>
        </div>

        {/* Main layout: content + sticky TOC */}
        <div className="relative flex gap-8 px-6 pt-10 md:pt-12 pb-0 w-full mx-auto md:max-w-212.5">
          {/* Main content */}
          <div className="flex-1 min-w-0">

            {/* Hero */}
            <div className="mb-10">
              <h1 className="text-[var(--text)] text-2xl md:text-3xl font-bold max-w-xl leading-tight mb-6 text-center mx-auto">
                Tokenised Asset Marketplace
              </h1>
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1a0533 0%, #3b0764 50%, #6d28d9 100%)" }}
              >
                <div className="px-6 pt-10 pb-6 flex flex-col items-center text-center">
                  <div className="relative w-full max-w-sm mx-auto">
                    <div className="absolute top-3 right-3 z-10 bg-[#1A1B1E]/60 text-white text-xs px-2 py-1 rounded-md font-medium">
                      2025
                    </div>
                    <div className="w-full aspect-[3/2] rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] flex items-center justify-center">
                      <span className="text-white/40 text-sm font-medium">[ Zoth.io mockup ]</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 px-4 py-3">
                <p className="text-xs font-medium text-[var(--text-muted)] tracking-wider">CASE STUDY COVER</p>
                <div className="flex items-center justify-center py-1 px-2 border border-[var(--border)] rounded-md bg-[var(--bg)]">
                  <p className="text-sm font-medium tracking-wider text-[var(--text-muted)]">IMG</p>
                </div>
              </div>
            </div>

            {/* Metadata row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              {[
                { label: "COMPANY", value: "Zoth.io" },
                { label: "MY ROLE", value: "Product Designer" },
                { label: "TIMELINE", value: "4 Months (from initiation to Go-live date)" },
                { label: "FIGMA PROTOTYPE", value: "United Kingdom" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[var(--text-muted)] text-xs tracking-widest font-medium mb-1">{label}</p>
                  <p className="text-[var(--text)] text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            {/* What I did */}
            <div className="mb-6">
              <p className="text-[var(--text)] text-sm font-bold mb-2">WHAT I DID ?</p>
              <p className="text-[var(--text-muted)] text-sm leading-7">
                I researched users and competitors, proposed 3 strategic directions, designed an experience that earned stakeholder buy-in, and delivered within tight resource and timeline constraints. The new DeFi model enabled fractional access, real yield, and cross-chain liquidity making RWAs truly scalable and inclusive.
              </p>
              <p className="text-[var(--text)] text-sm font-semibold mt-4 mb-1">The Challenge in One Sentence:</p>
              <p className="text-[var(--text-muted)] text-sm leading-7">
                Zoth&apos;s retail-facing real estate tokenisation model struggled to scale due to limited liquidity and niche investors.
              </p>
            </div>

            <div className="border-t border-[var(--border)] mb-12" />

            {/* Content sections */}
            <div className="space-y-16 pb-16">

              {/* 1. Project at Glance */}
              <section id="zoth-section-1">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">TEASER SECTION · 1 min Read</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-2">1. Project at a Glance</h2>
                <p className="text-[var(--accent)] text-xs font-semibold tracking-wider mb-4">CONTEXT & PROBLEM</p>
                <div className="space-y-4 text-[var(--text-muted)] text-sm leading-7">
                  <p>Traditional investment platforms have high barriers — large minimum capital, limited access. Zoth&apos;s old model was retail-facing real estate tokenisation where users could buy fractions of property.</p>
                  <p>Shift: Zoth has now built a restaking infrastructure for RWAs, expanding beyond just real estate to yield-bearing assets across chains.</p>
                </div>
                <p className="text-[var(--text)] text-sm font-semibold mt-6 mb-3">RESEARCH APPROACH</p>
                <div className="space-y-2 text-[var(--text-muted)] text-sm leading-7">
                  {["Researched users and competitors","Proposed 3 strategic directions","Designed an experience that earned stakeholder buy-in","Delivered within tight resource and timeline constraints (4 months from initiation to Go-live)"].map((item) => (
                    <div key={item} className="flex gap-3"><span className="text-[var(--accent)] shrink-0">→</span><p>{item}</p></div>
                  ))}
                </div>
                <p className="text-[var(--text)] text-sm font-semibold mt-6 mb-3">BUSINESS IMPACT</p>
                <div className="space-y-2 text-[var(--text-muted)] text-sm leading-7">
                  {["10K+ members joined via the Index Fund feature","Unlocked institutional partnership & compliance conversations","Design supported the full retail → RWA infrastructure pivot"].map((item) => (
                    <div key={item} className="flex gap-3"><span className="text-[var(--accent)] shrink-0">→</span><p>{item}</p></div>
                  ))}
                </div>
                <p className="text-[var(--text)] text-sm font-semibold mt-6 mb-3">TEAM COMPOSITION</p>
                <div className="space-y-2 text-[var(--text-muted)] text-sm leading-7">
                  {["Ishan — Product Designer","Sayali — Lead Product Designer","Badal Agarwal — Product Manager","10 Engineers & QA"].map((item) => (
                    <div key={item} className="flex gap-3"><span className="text-[var(--accent)] shrink-0">→</span><p>{item}</p></div>
                  ))}
                </div>
                <p className="text-[var(--text)] text-sm font-semibold mt-6 mb-2">GOAL</p>
                <p className="text-[var(--text-muted)] text-sm leading-7">Design an app that democratises access to real-world assets (RWAs) by allowing users to invest, stake, and earn from tokenised assets securely and seamlessly.</p>
              </section>

              {/* 2. Problem */}
              <section id="zoth-section-2">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">FULL CASE STUDY</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">2. Problem Worth Solving</h2>
                <div className="space-y-4 text-[var(--text-muted)] text-sm leading-7">
                  <p><span className="text-[var(--text)] font-semibold">User Problem:</span> Zoth made assets digital but didn&apos;t solve accessibility — investments were still high-ticket and illiquid. The new model introduced Zoth tokens and a DeFi layer, letting users invest in real-world assets at smaller ticket sizes while earning real yield across a liquid marketplace.</p>
                  <p><span className="text-[var(--text)] font-semibold">Business Problem:</span> Earlier, Zoth&apos;s real estate tokenization model struggled to scale due to limited liquidity and niche investors. The new DeFi model solves this by enabling fractional access, real yield, and cross-chain liquidity making RWAs truly scalable and inclusive.</p>
                  <p>80% of users were small-ticket retail investors. These were early adopters — however, limited liquidity slowed overall growth. Institutional investors were hesitant due to regulatory clarity and liquidity concerns.</p>
                </div>
                <div className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 mt-6 aspect-[16/6] flex items-center justify-center">
                  <span className="text-[var(--text-muted)] text-xs font-medium">[ Problem framing diagram ]</span>
                </div>
              </section>

              {/* 3. Design Strategy */}
              <section id="zoth-section-3">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">03 · DESIGN STRATEGY</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">3. Design Strategy — 4 Areas I Focused On</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">I viewed Zoth from both retail and institutional investor perspectives, and it was clear why adoption was uneven. Small-ticket investors liked the concept but lacked trust. Larger investors hesitated due to liquidity and regulatory uncertainty. To address this, I worked with stakeholders, conducted competitive research, and audited the platform to identify four critical focus areas.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Understanding Senior Stakeholders", body: "What is their vision for Zoth's scale — retail-first or infrastructure-ready?" },
                    { title: "Understanding The Users", body: "Who are our core investors — small-ticket retail or institutions — and what are their pain points?" },
                    { title: "Understanding the Market", body: "What lessons can we draw from global RWA and fractional investing platforms?" },
                    { title: "Understanding Zoth's Platform", body: "Where are the usability gaps, and how can we redesign for trust, clarity, and scalability?" },
                  ].map(({ title, body }) => (
                    <div key={title} className="border border-[var(--border)] rounded-xl p-5 bg-[var(--card)]">
                      <p className="text-[var(--text)] text-sm font-semibold mb-2">{title}</p>
                      <p className="text-[var(--text-muted)] text-xs leading-6">{body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 4. Stakeholder */}
              <section id="zoth-section-4">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">04 · STAKEHOLDERS</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">4. Stakeholder Vision</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">In early meetings, leadership made clear that Zoth should evolve beyond a fractional marketplace into a scalable platform attracting both retail and institutional investors.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: "Envision a new vertical for Zoth", body: "Shift from $10–$50 retail tickets to also targeting high-value investors." },
                    { title: "Emerge as an RWA leader", body: "Differentiate from small marketplaces by aiming to be a global RWA destination." },
                    { title: "Leverage existing traction", body: "Use early real estate success and compliance strengths to scale further." },
                  ].map(({ title, body }) => (
                    <div key={title} className="border border-[var(--border)] rounded-xl p-5 bg-[var(--card)]">
                      <p className="text-[var(--text)] text-sm font-semibold mb-2">{title}</p>
                      <p className="text-[var(--text-muted)] text-xs leading-6">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-2 text-[var(--text-muted)] text-sm">
                  <p className="text-[var(--text)] font-semibold mb-2">My work began there…</p>
                  {["Aligned with manager on business objective","Drafted project plan with milestones and scope","Mapped key deliverables and timelines","Established weekly syncs with product & design teams","Planned 1–2 day buffers for each milestone","Regular brainstorming, feedback, and progress check-ins with my manager","Weekly syncs with product & design teams","Bi-weekly syncs with key stakeholders"].map((item) => (
                    <div key={item} className="flex gap-3"><span className="text-[var(--accent)] shrink-0">→</span><p>{item}</p></div>
                  ))}
                </div>
              </section>

              {/* 5. User */}
              <section id="zoth-section-5">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">05 · USERS</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">5. Users Wanted Trust & Clarity</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">We used secondary research, early platform data, and competitive analysis to understand core users. Insights showed small-ticket investors were enthusiastic but lacked trust and understanding of tokenized assets. Institutional investors remained hesitant due to unclear compliance and liquidity risks.</p>
                <p className="text-[var(--text)] text-sm font-semibold mb-4">Retail Investors Pain Points</p>
                <div className="space-y-2 text-[var(--text-muted)] text-sm leading-7">
                  {[
                    "Intimidated by blockchain and DeFi terminology",
                    "Spent 10–15 mins trying to understand what they were investing in",
                    "Lacked trust in tokenised assets — needed proof of security",
                    "Couldn't easily understand compliance, liquidity, or potential returns",
                    "Dropped off during KYC or wallet connection steps",
                    "Felt overwhelmed by DeFi jargon before reaching any asset listing",
                    "Preferred simple flows and plain language over institutional dashboards",
                    "Needed social proof — member counts, returns before taking action",
                    "Hesitant to commit capital without visible track records",
                  ].map((item) => (
                    <div key={item} className="flex gap-3"><span className="text-[var(--accent)] shrink-0">→</span><p>{item}</p></div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="aspect-[4/3] rounded-lg bg-[var(--card)] border border-[var(--border)] flex items-center justify-center">
                    <span className="text-[var(--text-muted)] text-xs font-medium">[ User journey map ]</span>
                  </div>
                  <div className="aspect-[4/3] rounded-lg bg-[var(--card)] border border-[var(--border)] flex items-center justify-center">
                    <span className="text-[var(--text-muted)] text-xs font-medium">[ User persona ]</span>
                  </div>
                </div>
              </section>

              {/* 6. Competition */}
              <section id="zoth-section-6">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">06 · COMPETITIVE ANALYSIS</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">6. Competition</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">I analyzed the landscape of fractional ownership and RWA platforms to understand gaps and opportunities. Most players were either focusing only on real estate listings for retail or on institutional-grade infrastructure, leaving a middle ground for Zoth to position itself.</p>
                <div className="space-y-3 mb-6">
                  {[
                    { title: "Retail RWA startups' limitation", body: "They target small-ticket users but fail to inspire long-term trust and liquidity." },
                    { title: "Institutional gap", body: "Protocols like Centrifuge focus on large-scale adoption, leaving retail investors underserved." },
                    { title: "Zoth's opportunity", body: "Position itself as the bridge between retail access and institutional-grade infrastructure." },
                    { title: "Trust as foundation", body: "Build with transparency, compliance, and education to attract both small and large investors." },
                  ].map(({ title, body }) => (
                    <div key={title} className="flex gap-4">
                      <span className="text-[var(--accent)] shrink-0 mt-0.5">→</span>
                      <p className="text-[var(--text-muted)] text-sm leading-7"><span className="text-[var(--text)] font-semibold">{title}:</span> {body}</p>
                    </div>
                  ))}
                </div>
                <div className="border border-[var(--border)] rounded-xl p-5 bg-[var(--card)]">
                  <p className="text-[var(--text)] text-sm font-bold mb-2">⚡ Positioning for Zoth:</p>
                  <p className="text-[var(--text-muted)] text-sm leading-7">Competitors are either retail-first (but struggle with liquidity/trust) OR institutional-first (but inaccessible to retail). Zoth&apos;s opportunity lies in bridging the two — making RWAs accessible for retail while scalable and compliant for institutions.</p>
                </div>
                <div className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] mt-6 aspect-[16/6] flex items-center justify-center">
                  <span className="text-[var(--text-muted)] text-xs font-medium">[ Competitive landscape matrix ]</span>
                </div>
              </section>

              {/* 7. Platform Study */}
              <section id="zoth-section-7">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">07 · PLATFORM STUDY</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">7. Platform Study — Gaps & Opportunities</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">After a detailed UX audit of Zoth&apos;s old model, I identified critical gaps that limited adoption. While the idea of fractional real estate was strong, the platform lacked clarity, trust-building features, and smooth integration into the investor journey.</p>
                <div className="space-y-3">
                  {[
                    "No centralised visibility of assets and returns — users couldn't understand options or risks",
                    "Missing brand identity to build trust in a financial product",
                    "Listing-only experience with no performance insights or education hooks",
                    "Fragmented information flow — compliance, liquidity, and returns were hard to find",
                    "No filtering for high-value investments — users were overwhelmed by underfunded listings",
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
              <section id="zoth-section-8">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">08 · IDEATION</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">8. Ideation</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">Together, we brainstormed a range of ideas for improving Zoth&apos;s investor experience — focusing on building trust, simplifying discovery, and making tokenized investing more intuitive for retail users. The goal was not to finalise a solution yet, but to explore every possible direction worth testing.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {[
                    { title: "Seamless investment flow", body: "Integrate investing directly into asset discovery — users should be able to research, analyse, and invest in one continuous flow." },
                    { title: "Build trust through education", body: "Add bite-sized learning modules, explainer videos, and guided onboarding for new investors exploring tokenised assets." },
                    { title: "Bridge retail & institutional needs", body: "Design scalable systems that serve $10 retail users today and $10K institutional players tomorrow." },
                    { title: "Unified dashboard", body: "Show real-time portfolio performance, tokenised asset value, and liquidity status in one transparent view." },
                    { title: "Gamified discovery experience", body: "Use badges, tiers, and milestone unlocks to keep retail investors engaged through learning and reinvestment." },
                    { title: "Introduce a Zoth Mini app", body: "A lightweight, mobile-first version focusing on quick investments, updates, and referrals — similar to Revolut or Groww." },
                  ].map(({ title, body }) => (
                    <div key={title} className="border border-[var(--border)] rounded-xl p-5 bg-[var(--card)]">
                      <p className="text-[var(--text)] text-sm font-semibold mb-2">{title}</p>
                      <p className="text-[var(--text-muted)] text-xs leading-6">{body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 8a. Approach */}
              <section id="zoth-section-8a">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">08a · APPROACH</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-6">Approach</h2>
                <div className="space-y-8">
                  {[
                    {
                      num: "APPROACH 1",
                      title: "Education-first flow",
                      body: "Most retail users had zero exposure to RWAs or DeFi. This approach built awareness first — explaining investment types, yields, and risks before leading users to asset discovery and purchase.",
                      decision: "❌ Rejected",
                      decisionNote: "Education needed to feel integrated, not instructional. We moved it out of the main flow entirely.",
                      pros: ["Education could reduce hesitation and fear of losing money","Explaining compliance and security upfront builds early trust","Creates a knowledge hub users can revisit before they're ready to invest","Bridges the psychological gap between traditional and blockchain investing"],
                      cons: ["Risk of becoming too content-heavy — impatient users drop off","Slows discovery — most users prefer seeing assets before reading","Redundant and frustrating for returning investors","Overly linear structure breaks the seamless flow expected in fintech"],
                    },
                    {
                      num: "APPROACH 2",
                      title: "Data-led trust",
                      body: "Lead with live asset performance — APR, liquidity status, token availability. Let real numbers do the trust-building instead of copy or content.",
                      decision: "⚠️ Partially adopted",
                      decisionNote: "We embedded live stats into the discovery cards — always paired with plain-language context.",
                      pros: ["Experienced investors don't need education — they need evidence","Reduces time-to-investment for users already familiar with DeFi","Real-time data signals build confidence faster than explainer text","Mirrors trusted fintech patterns like Groww and Robinhood"],
                      cons: ["Risks feeling like a Bloomberg terminal — powerful but intimidating","Data without context overwhelms first-time retail investors","Doesn't solve the trust gap for users new to tokenised assets"],
                    },
                    {
                      num: "APPROACH 3",
                      title: "Contextual onboarding marketplace",
                      body: "Drop users directly into a curated asset marketplace. No onboarding gate. Education delivered contextually — tooltips and inline explainers at the exact point of need, not before.",
                      decision: "✅ Adopted",
                      decisionNote: "This became the foundation of the final design direction.",
                      pros: ["Gets users to the product immediately — no content gate","Reduces time-to-first-action significantly","Contextual hints feel helpful rather than instructional","Scales to both retail and institutional users without friction"],
                      cons: ["Requires carefully placed education hooks","More complex to design for varying user knowledge levels"],
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
              <section id="zoth-section-8b">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">08b · KEY INSIGHTS</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-6">Key Insights</h2>
                <div className="space-y-4">
                  {[
                    { num: "01", title: "Trust is built by showing, not telling", body: "Retail users responded better to live performance data than educational copy. Real numbers reduced hesitation faster than any explainer." },
                    { num: "02", title: "Contextual education outperforms front-loaded onboarding", body: "Users dropped off when forced through education gates. Inline tooltips and explainers at the point of decision performed significantly better." },
                    { num: "03", title: "Both user types need the same foundation, different layers", body: "Retail and institutional investors shared core needs — clarity, compliance visibility, and portfolio transparency. The difference was depth, not direction." },
                    { num: "04", title: "Liquidity visibility is a conversion driver", body: "Showing real-time liquidity status directly on asset cards reduced the most common drop-off point — hesitation before first investment." },
                  ].map(({ num, title, body }) => (
                    <div key={num} className="flex gap-4">
                      <span className="text-[var(--text-muted)] text-xs font-medium tracking-widest mt-0.5 shrink-0">{num}</span>
                      <p className="text-[var(--text-muted)] text-sm leading-7"><span className="text-[var(--text)] font-semibold">{title}</span> — {body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 9. Design System */}
              <section id="zoth-section-9">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">09 · DESIGN SYSTEM</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">9. Design System</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">Built a scalable design system for Zoth covering colour tokens, typography, component library, and spacing rules — designed to support both the retail-facing app and institutional dashboard from a single source of truth.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="aspect-[4/3] rounded-lg bg-[var(--card)] border border-[var(--border)] flex items-center justify-center">
                    <span className="text-[var(--text-muted)] text-xs font-medium">[ Colour tokens & typography ]</span>
                  </div>
                  <div className="aspect-[4/3] rounded-lg bg-[var(--card)] border border-[var(--border)] flex items-center justify-center">
                    <span className="text-[var(--text-muted)] text-xs font-medium">[ Component library ]</span>
                  </div>
                </div>
              </section>

              {/* 10. Visual Design & UI */}
              <section id="zoth-section-10">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">10 · VISUAL DESIGN & UI</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">10. Visual Design & UI</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">The final UI prioritised trust, clarity, and scalability. A dark-mode-first palette with high-contrast data visualisations, modular investment cards, and a persistent portfolio tracker made the experience feel both premium and accessible.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["[ Home — Asset discovery ]", "[ Investment card detail ]", "[ Portfolio dashboard ]", "[ Onboarding flow ]", "[ Asset staking screen ]", "[ Mobile responsive views ]"].map((label) => (
                    <div key={label} className="aspect-[3/4] rounded-xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center">
                      <span className="text-[var(--text-muted)] text-xs font-medium text-center px-3">{label}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 11. Interactive Prototype */}
              <section id="zoth-section-11">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">11 · INTERACTIVE PROTOTYPE</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">11. Interactive Prototype</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">The interactive Figma prototype covers the full investor journey — from landing on the marketplace to staking an asset and tracking returns. Tested with 8 participants across both retail and semi-institutional profiles.</p>
                <div
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-[var(--accent)] transition-colors"
                  onClick={() => window.open("https://www.figma.com/proto/QOi61toAIOFLpbJgvwcLI0/Portfolio?node-id=2655-641&t=rPomc9R9rpZzEEdQ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2461%3A269", "_blank", "noopener,noreferrer")}
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10L16 10M16 10L11 5M16 10L11 15" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-[var(--text)] text-sm font-semibold mb-1">View Figma Prototype</p>
                    <p className="text-[var(--text-muted)] text-xs">Opens interactive prototype in a new tab</p>
                  </div>
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
                    color: "#39FF14",
                    textShadow: "0 0 0px #39FF14",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#6fff47";
                    (e.currentTarget as HTMLButtonElement).style.textShadow = "0 0 8px #39FF14, 0 0 16px #39FF1466";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#39FF14";
                    (e.currentTarget as HTMLButtonElement).style.textShadow = "0 0 0px #39FF14";
                  }}
                >
                  💬 Ask Mars about Zoth.io
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

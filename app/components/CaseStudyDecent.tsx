"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useMarsAssistant } from "../context/MarsAssistantContext";
import Footer from "./Footer";

const ACCENT = "#a78bfa";
const ACCENT_HOVER = "#c4b5fd";

const sections = [
  { id: "decent-section-1", label: "1. Project at a Glance" },
  { id: "decent-section-2", label: "2. The Problem" },
  { id: "decent-section-3", label: "3. Research & Discovery" },
  { id: "decent-section-4", label: "4. Ideation & Prioritization" },
  { id: "decent-section-5", label: "5. IA & Prototype" },
  { id: "decent-section-6", label: "6. Visual Design" },
  { id: "decent-section-7", label: "7. Lean UX Canvas" },
  { id: "decent-section-8", label: "8. Testing & Validation" },
  { id: "decent-section-9", label: "9. Outcome & Reflection" },
];

const metaRows = [
  { label: "PROJECT TYPE", value: "Academic Capstone" },
  { label: "MY ROLE", value: "Product Designer (Solo)" },
  { label: "TIMELINE", value: "Full capstone cycle" },
  { label: "METHODOLOGY", value: "Lean UX, User Research" },
];

const researchApproach = [
  "Surveyed and interviewed patients, doctors, and researchers",
  "Benchmarked against MedRec, Medicalchain, Akiri, Patientory",
  "Built proto-personas and user journey maps",
  "Validated hypotheses through usability testing",
];

const businessImpact = [
  "100% task success rate across all 5 core test tasks",
  "All 5 core hypotheses validated through testing",
  "Designed interfaces for three distinct user types",
];

const teamComp = [
  "Ishan — Product Designer (solo, 0→1)",
  "Kingston University — UX for Emerging Technology",
  "5 usability test participants across all user groups",
];

const userProblems = [
  {
    label: "For Patients",
    body: "Records live in silos across different providers. Sharing data with a new doctor means re-explaining history, faxing files, or carrying paper. Patients have no visibility into who's accessed their data or why.",
  },
  {
    label: "For Doctors",
    body: "Fragmented systems mean incomplete histories, duplicate tests, and slower, riskier decisions. Cross-network record sharing is a constant friction point.",
  },
  {
    label: "For Researchers",
    body: "Acquiring quality medical data is expensive and slow. Most datasets are outdated by the time access is approved, and there's rarely a direct, ethical channel to compensate the patients whose data made the research possible.",
  },
];

const researchFindings = [
  "Most patients have never been asked to share data for research — but many are open if there's transparency and incentive",
  "Majority still rely on paper records or provider-locked portals, with no personal copy of history",
  "Doctors frequently encounter incomplete or conflicting patient histories due to fragmented systems",
  "Researchers face high costs and long delays acquiring usable, real-time datasets",
];

const personas = [
  {
    name: "Emma Watson",
    role: "Patient",
    body: "Privacy-conscious patient who wants full record ownership and easy cross-hospital access",
  },
  {
    name: "Dr. Neel",
    role: "Radiologist",
    body: "Frustrated by inconsistent systems and slow cross-hospital collaboration",
  },
  {
    name: "Dr. Kritida",
    role: "Researcher",
    body: "Needing verified, real-time datasets without the usual cost and delay",
  },
];

const mvpFeatures = [
  "Patient-controlled medical data access",
  "Secure consent system",
  "Ability to join research pools",
  "Token-based incentives",
  "AI-powered health insights",
];

const interfaces = [
  {
    label: "Patient Interface",
    body: "Global Medical ID, personalised health trends, data marketplace participation, AI-driven daily insights",
  },
  {
    label: "Doctor Interface",
    body: "Patient record search via Global Health ID, time-limited data access requests, real-time diagnosis updates",
  },
  {
    label: "Researcher Interface",
    body: "Pool creation, smart-contract-based data purchasing, wallet and transaction history",
  },
];

const designSystemItems = [
  {
    title: "Typography",
    body: "Montserrat + Chakra Petch; Primary Purple + functional colors",
  },
  {
    title: "Color Tokens",
    body: "Tokens for Marketplace, Data Panel, AI Assistant components",
  },
  {
    title: "Iconography",
    body: "Consistent icon system for states, statuses, and actions",
  },
];

const usabilityTable = [
  { task: "Task 1 — Data Ownership & Consent", success: "100%", time: "56s", errors: "0.2", assistance: "1" },
  { task: "Task 2 — Tokenisation & Marketplace", success: "100%", time: "1min 30s", errors: "0.2", assistance: "1" },
  { task: "Task 3 — AI Insights & Engagement", success: "100%", time: "45s", errors: "0", assistance: "0" },
  { task: "Task 4 — Patient Data Access (Global Health ID)", success: "100%", time: "1min 10s", errors: "0", assistance: "1" },
  { task: "Task 5 — Research Pool Creation", success: "100%", time: "1min 18s", errors: "0", assistance: "0" },
];

const testingResults = [
  "100% task success rate across all 5 tasks and every participant",
  "Low error rates and minimal assistance needed",
  "Doctors and researchers found navigation intuitive; patients specifically valued centralised access and AI insights",
];

const futureDirections = [
  "Localized language support for global accessibility",
  "Voice-based interaction for accessibility",
  "More granular dynamic consent controls",
  "Expanded token utility (peer-to-peer payments, insurance discounts)",
  "Fully decentralized clinical trial participation",
];

export function CaseStudyDecent() {
  const router = useRouter();
  const { openMars } = useMarsAssistant();
  const [activeSection, setActiveSection] = useState<string>("decent-section-1");
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
            DEcent Healthcare — Decentralized Medical Records
          </span>
          <span className="text-[var(--text-muted)] text-xs font-medium">18 min read</span>
        </div>

        {/* Main layout: content + sticky TOC */}
        <div className="relative flex gap-8 px-6 pt-10 md:pt-12 pb-0 w-full mx-auto md:max-w-212.5">
          {/* Main content */}
          <div className="flex-1 min-w-0">

            {/* Hero */}
            <div className="mb-10">
              <h1 className="text-[var(--text)] text-2xl md:text-3xl font-bold max-w-xl leading-tight mb-6 text-center mx-auto">
                Decentralized Healthcare Using Smart Contracts
              </h1>
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ background: "linear-gradient(135deg, #3f1f5f 0%, #7c3aed 100%)" }}
              >
                <div className="absolute top-4 right-4 z-10 bg-[#1A1B1E]/60 text-white text-xs px-2 py-1 rounded-md font-medium">
                  2024
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/casestudy/decent/cover.svg"
                  alt="DEcent Healthcare — Decentralized Medical Records Cover"
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              {metaRows.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[var(--text-muted)] text-xs tracking-widest font-medium mb-1">{label}</p>
                  <p className="text-[var(--text)] text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            {/* What I Did */}
            <div className="mb-6">
              <p className="text-[var(--text)] text-sm font-bold mb-2">WHAT I DID</p>
              <p className="text-[var(--text-muted)] text-sm leading-7">
                Led a solo 0→1 product design capstone at Kingston University, applying Lean UX methodology to design a decentralized healthcare platform where patients own their medical data. Conducted multi-group user research, built proto-personas, mapped information architecture across three distinct user types, and validated five core hypotheses through moderated usability testing.
              </p>
              <p className="text-[var(--text)] text-sm font-semibold mt-4 mb-1">The Challenge in One Sentence:</p>
              <p className="text-[var(--text-muted)] text-sm leading-7">
                Medical records are scattered, inaccessible, and breach-prone — and no existing platform combined patient-owned records, tokenized incentives, and a researcher-facing ethical marketplace in one system.
              </p>
              <div className="flex justify-center mt-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/casestudy/decent/hero-mockup.png"
                  alt="DEcent Healthcare EHR screen — phone-in-hand mockup showing medical documents, allergies, medication, and pending access requests"
                  style={{ maxWidth: "460px", width: "100%", height: "auto", objectFit: "contain", display: "block" }}
                />
              </div>
            </div>

            <div className="border-t border-[var(--border)] mb-12" />

            {/* Content sections */}
            <div className="space-y-16 pb-16">

              {/* 1. Project at a Glance */}
              <section id="decent-section-1">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">TEASER SECTION · 2 min Read</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-2">1. Project at a Glance</h2>
                <p className="text-xs font-semibold tracking-wider mb-4" style={{ color: ACCENT }}>CONTEXT & BACKGROUND</p>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">
                  Medical records today are scattered across hospitals, cloud servers, and paper files. Patients rarely have real control over who sees their data, doctors waste time reconciling incomplete histories, and researchers pay high costs for data that&apos;s often outdated. The blockchain-in-healthcare market is projected to grow from ~$7B (2023) to over $214B by 2030.
                </p>

                <p className="text-[var(--text)] text-sm font-semibold mb-2">GOAL</p>
                <p className="text-[var(--text-muted)] text-sm leading-7">
                  Design a decentralized healthcare platform where patients own and control their health data, doctors get fast and reliable access to accurate records, and researchers can ethically access high-quality, consented data — all governed transparently through smart contracts.
                </p>
              </section>

              {/* 2. The Problem */}
              <section id="decent-section-2">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">02 · PROBLEM</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">2. The Problem</h2>
                <div className="space-y-4 mb-8">
                  {userProblems.map(({ label, body }) => (
                    <div key={label} className="flex gap-4">
                      <span className="shrink-0 mt-0.5" style={{ color: ACCENT }}>→</span>
                      <p className="text-[var(--text-muted)] text-sm leading-7">
                        <span className="text-[var(--text)] font-semibold">{label}:</span> {body}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border border-[var(--border)] rounded-xl p-5 bg-[var(--card)]">
                  <p className="text-[var(--text)] text-xs font-semibold tracking-widest mb-2">DATA POINT</p>
                  <p className="text-[var(--text-muted)] text-sm leading-7">
                    In the US alone, <span className="text-[var(--text)] font-semibold">725 healthcare data breaches</span> exposed over <span className="text-[var(--text)] font-semibold">133 million records</span> in a single year.
                  </p>
                </div>
              </section>

              {/* 3. Research & Discovery */}
              <section id="decent-section-3">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">03 · RESEARCH & DISCOVERY</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">3. Research & Discovery</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">
                  I ran a Lean UX process (Think → Make → Check) rather than a traditional long-cycle design process, so I could validate assumptions quickly instead of over-designing upfront.
                </p>

                <p className="text-[var(--text)] text-sm font-semibold mb-3">PRIMARY RESEARCH</p>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-4">
                  I surveyed and interviewed three distinct user groups — patients, doctors, and researchers — to understand real behaviors around medical records, data ownership, and comfort with blockchain concepts.
                </p>
                <div className="space-y-2 text-[var(--text-muted)] text-sm leading-7 mb-6">
                  {researchFindings.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="shrink-0" style={{ color: ACCENT }}>→</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-[var(--border)] overflow-hidden mb-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/casestudy/decent/survey-results.png"
                    alt="Survey results — doctor/researcher and patient respondent charts"
                    style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                  />
                </div>

                <p className="text-[var(--text)] text-sm font-semibold mb-3">COMPETITIVE ANALYSIS</p>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">
                  I benchmarked against MedRec (MIT Media Lab), Medicalchain, Akiri, and Patientory — direct competitors in blockchain-based health records — plus indirect competitors like Apple Health and traditional EMR portals. A consistent gap emerged: none combined patient-owned records, tokenized incentives, and a researcher-facing ethical marketplace in one system.
                </p>
                <div className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] mb-8 aspect-[3/2] flex items-center justify-center">
                  <span className="text-[var(--text-muted)] text-xs font-medium">[ Competitive matrix ]</span>
                </div>

                <p className="text-[var(--text)] text-sm font-semibold mb-4">PROTO-PERSONAS</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {personas.map(({ name, role, body }) => (
                    <div key={name} className="border border-[var(--border)] rounded-xl p-5 bg-[var(--card)]">
                      <p className="text-xs font-semibold tracking-widest mb-1" style={{ color: ACCENT }}>{role.toUpperCase()}</p>
                      <p className="text-[var(--text)] text-sm font-bold mb-2">{name}</p>
                      <p className="text-[var(--text-muted)] text-xs leading-6">{body}</p>
                    </div>
                  ))}
                </div>

                <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/casestudy/decent/proto-personas.png"
                    alt="Proto-personas — Patient, Researcher, and Doctor full cards"
                    style={{ minWidth: "640px", width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                  />
                </div>
              </section>

              {/* 4. Ideation & Prioritization */}
              <section id="decent-section-4">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">04 · IDEATION & PRIORITIZATION</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">4. Ideation & Prioritization</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">
                  With research grounding the direction, I moved into rapid ideation using structured methods: MoSCoW prioritization ranked features by impact and risk, Crazy 8s explored layout options, and mental models shaped information architecture. Before prototyping, I translated prioritized features into testable hypothesis statements.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/casestudy/decent/affinity-mapping.png"
                      alt="Affinity mapping board clustering research themes into feature groups"
                      style={{ minWidth: "640px", width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="md:col-span-2 rounded-xl border border-[var(--border)] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/casestudy/decent/bullseye-chart.png"
                        alt="MoSCoW Bull's Eye Chart — features plotted from Primary (center) to Fourth (outer ring)"
                        style={{ width: "100%", height: "100%", display: "block", objectFit: "contain" }}
                      />
                    </div>
                    <div className="md:col-span-3 rounded-xl border border-[var(--border)] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/casestudy/decent/crazy-8.png"
                        alt="Crazy 8 sketches across Patient, Doctor, and Research interfaces — early layout exploration for dashboards, data management, AI assistant, marketplace, and community screens"
                        style={{ width: "100%", height: "100%", display: "block", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-[var(--text)] text-sm font-semibold mb-3">MVP FEATURES</p>
                <div className="space-y-2 text-[var(--text-muted)] text-sm leading-7 mb-8">
                  {mvpFeatures.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="shrink-0" style={{ color: ACCENT }}>→</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[var(--text)] text-sm font-semibold mb-3">HYPOTHESIS PRIORITIZATION MATRIX</p>
                <div className="rounded-xl border border-[var(--border)] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/casestudy/decent/hypothesis-matrix.png"
                    alt="Hypothesis prioritization matrix — Ship & Measure / Test / Don't Test / Discard quadrants"
                    style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                  />
                </div>
              </section>

              {/* 5. Information Architecture & Prototype */}
              <section id="decent-section-5">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">05 · IA & PROTOTYPE</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">5. Information Architecture & Prototype</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">
                  I mapped the full IA across three distinct interfaces — Patient, Doctor, and Researcher — each with its own data panel, AI assistant, and settings, all unified under a shared onboarding and consent framework (Sign Up → Comprehensive Health Agreement → role-based home).
                </p>

                <div className="overflow-x-auto rounded-xl border border-[var(--border)] mb-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/casestudy/decent/information-architecture.png"
                    alt="Full information architecture flowchart — Patient flow covering Onboarding, Data Panel, AI Assistant, Home, Data Monetisation, and Settings; plus separate Researcher and Doctor interface flows"
                    style={{ minWidth: "900px", width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {interfaces.map(({ label, body }) => (
                    <div key={label} className="border border-[var(--border)] rounded-xl p-5 bg-[var(--card)]">
                      <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: ACCENT }}>{label.toUpperCase()}</p>
                      <p className="text-[var(--text-muted)] text-xs leading-6">{body}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[var(--text)] text-sm font-semibold mb-2">PROTOTYPE FLOWS</p>
                <p className="text-[var(--text-muted)] text-sm leading-7">
                  The interactive prototype covered: Patient interface with Global Medical ID, personalized health trends, and data marketplace participation; Doctor interface with patient record search and real-time diagnosis updates; Researcher interface with pool creation and smart-contract-based data purchasing.
                </p>
              </section>

              {/* 6. Visual Design & Design System */}
              <section id="decent-section-6">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">06 · VISUAL DESIGN</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">6. Visual Design & Design System</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">
                  The visual direction needed to feel trustworthy and clinical, but not sterile — balancing the credibility patients and doctors expect from healthcare software with the modern, transparent feel appropriate for a blockchain-native product.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {designSystemItems.map(({ title, body }) => (
                    <div key={title} className="border border-[var(--border)] rounded-xl p-5 bg-[var(--card)]">
                      <p className="text-[var(--text)] text-sm font-semibold mb-2">{title}</p>
                      <p className="text-[var(--text-muted)] text-xs leading-6">{body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 7. Lean UX Canvas */}
              <section id="decent-section-7">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">07 · LEAN UX CANVAS</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">7. Lean UX Canvas</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">
                  Before moving into validation, I consolidated the full direction into a Lean UX Canvas — mapping the business problem, proposed solutions, business outcomes, target users, and hypotheses onto a single page.
                </p>
                <div className="w-full rounded-xl border border-[var(--border)] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/casestudy/decent/lean-ux-canvas.png"
                    alt="Lean UX Canvas — Business Problem, Solutions, Business Outcomes, Users, User Outcomes & Benefits, Hypotheses, riskiest assumption, and least work to learn"
                    style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                  />
                </div>
              </section>

              {/* 8. Testing & Validation */}
              <section id="decent-section-8">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">08 · TESTING & VALIDATION</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">8. Testing & Validation</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">
                  I ran moderated usability testing with 5 participants across all three interfaces (Patient, Doctor, Researcher) on 5 core tasks: data ownership & consent, tokenisation & marketplace participation, AI assistant interaction, patient data requests via Global Health ID, and research pool creation.
                </p>

                {/* Usability table */}
                <div className="overflow-x-auto mb-8 rounded-xl border border-[var(--border)]">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-[var(--border)] bg-[var(--card)]">
                        <th className="text-left px-4 py-3 text-[var(--text)] text-xs font-semibold tracking-wider">TASK</th>
                        <th className="text-center px-4 py-3 text-[var(--text)] text-xs font-semibold tracking-wider">SUCCESS</th>
                        <th className="text-center px-4 py-3 text-[var(--text)] text-xs font-semibold tracking-wider">AVG TIME</th>
                        <th className="text-center px-4 py-3 text-[var(--text)] text-xs font-semibold tracking-wider">AVG ERRORS</th>
                        <th className="text-center px-4 py-3 text-[var(--text)] text-xs font-semibold tracking-wider">AVG ASSISTANCE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usabilityTable.map(({ task, success, time, errors, assistance }, i) => (
                        <tr key={task} className={i < usabilityTable.length - 1 ? "border-b border-[var(--border)]" : ""}>
                          <td className="px-4 py-3 text-[var(--text-muted)] text-xs leading-5">{task}</td>
                          <td className="px-4 py-3 text-center text-xs font-semibold" style={{ color: ACCENT }}>{success}</td>
                          <td className="px-4 py-3 text-center text-[var(--text-muted)] text-xs">{time}</td>
                          <td className="px-4 py-3 text-center text-[var(--text-muted)] text-xs">{errors}</td>
                          <td className="px-4 py-3 text-center text-[var(--text-muted)] text-xs">{assistance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-[var(--text)] text-sm font-semibold mb-3">RESULTS</p>
                <div className="space-y-2 text-[var(--text-muted)] text-sm leading-7 mb-6">
                  {testingResults.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="shrink-0" style={{ color: ACCENT }}>→</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[var(--text)] text-sm font-semibold mb-2">WHAT CHANGED</p>
                <p className="text-[var(--text-muted)] text-sm leading-7">
                  Feedback pointed to two clear gaps: new users needed better onboarding support around blockchain concepts, and token rewards needed more visual prominence. Both were addressed directly in the refined prototype — clearer reward indicators and a guided first-time flow.
                </p>
              </section>

              {/* 9. Outcome & Reflection */}
              <section id="decent-section-9">
                <p className="text-[var(--text-muted)] text-xs font-medium tracking-widest mb-3">09 · OUTCOME & REFLECTION</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">9. Outcome & Reflection</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-6">
                  All five core hypotheses — around trust, engagement, consultation speed, sustainable participation, and financial accessibility — were validated through testing. The Lean UX approach meant I could move from assumption to validated direction quickly, without over-investing in features nobody had confirmed they wanted.
                </p>

                {/* Stat card */}
                <div className="border border-[var(--border)] rounded-xl p-6 inline-block min-w-[220px] mb-8"
                  style={{ borderColor: "#7c3aed44" }}>
                  <p className="text-[var(--text-muted)] text-xs tracking-widest font-medium mb-4">VALIDATION</p>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-[var(--text)] text-5xl font-extrabold" style={{ color: ACCENT }}>5/5</span>
                  </div>
                  <p className="text-[var(--text-muted)] text-xs">Core hypotheses validated through usability testing</p>
                </div>

                <div className="border-t border-[var(--border)] pt-6 mb-6">
                  <p className="text-[var(--text)] text-sm font-bold mb-2">THE HARDEST PART</p>
                  <p className="text-[var(--text-muted)] text-sm leading-7">
                    Wasn&apos;t the interface — it was translating unfamiliar concepts (consent-based data sharing, token incentives, smart contracts) into something a non-technical patient or an overworked doctor could understand in seconds. Solving that meant constantly trading off &ldquo;explain everything&rdquo; against &ldquo;just let people do the task,&rdquo; and testing showed the balance landed in the right place.
                  </p>
                </div>

                <p className="text-[var(--text)] text-sm font-semibold mb-3">FUTURE DIRECTIONS</p>
                <div className="space-y-2 text-[var(--text-muted)] text-sm leading-7">
                  {futureDirections.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="shrink-0" style={{ color: ACCENT }}>→</span>
                      <p>{item}</p>
                    </div>
                  ))}
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
                    className="text-left text-xs font-medium transition-colors"
                    style={{
                      color: activeSection === id ? ACCENT_HOVER : undefined,
                    }}
                    onMouseEnter={e => {
                      if (activeSection !== id) (e.currentTarget as HTMLButtonElement).style.color = ACCENT_HOVER;
                    }}
                    onMouseLeave={e => {
                      if (activeSection !== id) (e.currentTarget as HTMLButtonElement).style.color = "";
                    }}
                  >
                    <span className={activeSection === id ? "" : "text-[var(--text-muted)]"}>
                      {label}
                    </span>
                  </button>
                ))}
                <button
                  onClick={openMars}
                  className="text-left text-xs font-medium mt-2 transition-all duration-200"
                  style={{ color: "#00D9A3", textShadow: "0 0 0px #00D9A3" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#33e8b8";
                    (e.currentTarget as HTMLButtonElement).style.textShadow = "0 0 8px #00D9A3, 0 0 16px #00D9A366";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#00D9A3";
                    (e.currentTarget as HTMLButtonElement).style.textShadow = "0 0 0px #00D9A3";
                  }}
                >
                  Ask Mars about DEcent
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

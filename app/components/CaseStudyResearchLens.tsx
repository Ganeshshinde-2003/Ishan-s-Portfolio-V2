"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigation } from "../context/NavigationContext";
import Footer from "./Footer";

const sections = [
  { id: "rl-section-01", label: "Problem Statement" },
  { id: "rl-section-02", label: "Research & Insight" },
  { id: "rl-section-03", label: "The Core User Need" },
  { id: "rl-section-04", label: "Design Process" },
  { id: "rl-section-05", label: "The Build" },
  { id: "rl-section-06", label: "The Product" },
  { id: "rl-section-07", label: "Results & Impact" },
  { id: "rl-section-08", label: "Monetisation Strategy" },
  { id: "rl-section-09", label: "Future Work" },
  { id: "rl-section-10", label: "Learnings" },
];

export function CaseStudyResearchLens() {
  const { setActiveNav } = useNavigation();
  const [activeSection, setActiveSection] = useState<string>("rl-section-01");
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
                Map any research paper. Navigate its knowledge.
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
                      <span className="text-[#A7AAB4] text-sm font-medium">[ ResearchLens cover ]</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom label — outside the gradient box, aligned right */}
              <div className="flex items-center justify-end gap-2 px-4 py-3">
                <p className="text-xs font-medium text-[var(--text-muted)] tracking-wider">CASE STUDY COVER</p>
                <div className="flex items-center justify-center py-1 px-2 border border-[var(--border)] rounded-md bg-[var(--bg)]">
                  <p className="text-sm font-medium tracking-wider text-[var(--text-muted)]">IMG</p>
                </div>
              </div>
            </div>

            {/* Metadata row — 4 columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div>
                <p className="text-[var(--text-muted)] text-xs tracking-widest font-medium mb-1">MY ROLE</p>
                <p className="text-[var(--text)] text-sm font-medium">Solo Product Designer &amp; Builder</p>
              </div>
              <div>
                <p className="text-[var(--text-muted)] text-xs tracking-widest font-medium mb-1">TIMELINE</p>
                <p className="text-[var(--text)] text-sm font-medium">2–3 weeks, idea to deployed</p>
              </div>
              <div>
                <p className="text-[var(--text-muted)] text-xs tracking-widest font-medium mb-1">TECH</p>
                <p className="text-[var(--text)] text-sm font-medium">Claude Code · Three.js · MediaPipe · Claude API</p>
              </div>
              <div>
                <p className="text-[var(--text-muted)] text-xs tracking-widest font-medium mb-1">LIVE</p>
                <a
                  href="https://researchmap.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text)] text-sm font-medium hover:text-[var(--accent)] transition-colors"
                >
                  researchmap.site
                </a>
              </div>
            </div>
            <div className="border-t border-[var(--border)] mb-10" />

            {/* Product screenshot placeholder */}
            <div className="w-full rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#4C1D95] aspect-video flex items-center justify-center mb-16">
              <span className="text-[#A7AAB4] text-sm font-medium">[ Product screenshot ]</span>
            </div>

            {/* Content sections */}
            <div className="space-y-16 pb-16">

              {/* 01 Problem Statement */}
              <section id="rl-section-01">
                <p className="text-[var(--accent)] font-semibold text-sm tracking-wider uppercase mb-3">01&nbsp;&nbsp;Problem Statement</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">What problem was I solving?</h2>
                <div className="space-y-4 text-[var(--text-muted)] text-sm leading-7">
                  <p>
                    Reading a research paper properly takes hours. Most students I know don't do it — they skim the abstract, jump to the conclusion, and hope for the best. Not because they're lazy, but because the format is brutal. Dense text, no visual structure, no sense of how one idea connects to the next.
                  </p>
                  <p>
                    The problem isn't reading. It's orientation. You can't see the shape of a paper's argument until you've already read most of it.
                  </p>
                </div>

                <h3 className="text-[var(--text)] text-base font-semibold mt-8 mb-3">Who has this problem?</h3>
                <ul className="space-y-2 text-[var(--text-muted)] text-sm leading-7">
                  <li className="flex gap-2"><span>•</span><span>Postgraduate students working through literature reviews</span></li>
                  <li className="flex gap-2"><span>•</span><span>Researchers entering an unfamiliar topic area</span></li>
                  <li className="flex gap-2"><span>•</span><span>Designers and developers reading outside their field</span></li>
                  <li className="flex gap-2"><span>•</span><span>Anyone trying to understand a paper without reading every word</span></li>
                </ul>
              </section>

              {/* 02 Research & Insight */}
              <section id="rl-section-02">
                <p className="text-[var(--accent)] font-semibold text-sm tracking-wider uppercase mb-3">02&nbsp;&nbsp;Research &amp; Insight</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">Informal user conversations</h2>
                <ul className="space-y-2 text-[var(--text-muted)] text-sm leading-7 mb-6">
                  <li className="flex gap-2"><span>•</span><span>I spoke with four people during the build — two MSc students, one PhD candidate, one UX researcher. Informal conversations, not formal recruitment.</span></li>
                  <li className="flex gap-2"><span>•</span><span>Every person described the same behaviour: scan the abstract, jump to conclusions, revisit methods only if the conclusion earns it. Nobody reads linearly. Every tool assumes they do.</span></li>
                </ul>

                {/* Quote block */}
                <blockquote className="border-l-2 border-[var(--accent)] pl-4 my-6">
                  <p className="text-[var(--text-muted)] text-sm leading-7 italic">
                    "I never actually read the whole paper. I'm always trying to find where the useful bit is." — MSc student, Kingston University
                  </p>
                </blockquote>

                <h3 className="text-[var(--text)] text-base font-semibold mt-8 mb-4">Competitive audit</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-[var(--text)] text-sm font-semibold mb-2">NotebookLM (Google)</p>
                    <ul className="space-y-1 text-[var(--text-muted)] text-sm leading-7">
                      <li className="flex gap-2"><span>•</span><span>Strength: excellent conversational Q&amp;A with cited sources</span></li>
                      <li className="flex gap-2"><span>•</span><span>Strength: multi-document synthesis</span></li>
                      <li className="flex gap-2"><span>•</span><span>Gap: no spatial or structural view of the knowledge</span></li>
                      <li className="flex gap-2"><span>•</span><span>Gap: requires Google account, not instantly accessible</span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[var(--text)] text-sm font-semibold mb-2">Obsidian + Plugins</p>
                    <ul className="space-y-1 text-[var(--text-muted)] text-sm leading-7">
                      <li className="flex gap-2"><span>•</span><span>Strength: graph view of linked notes is spatially rich</span></li>
                      <li className="flex gap-2"><span>•</span><span>Gap: requires manual linking — does not read or structure content automatically</span></li>
                      <li className="flex gap-2"><span>•</span><span>Gap: high setup friction, not usable for a single paper</span></li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-[var(--text)] text-base font-semibold mt-8 mb-3">Key insight that drove all decisions</h3>
                <p className="text-[var(--text-muted)] text-sm leading-7">
                  Researchers do not need a better way to read papers. They need a way to see the structure of a paper's knowledge before deciding what to read. The product insight shifted from "reading assistant" to "knowledge cartographer".
                </p>
              </section>

              {/* 03 The Core User Need */}
              <section id="rl-section-03">
                <p className="text-[var(--accent)] font-semibold text-sm tracking-wider uppercase mb-3">03&nbsp;&nbsp;The Core User Need</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">Primary user</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-8">
                  A postgraduate student or researcher who regularly processes academic literature and needs to extract structural understanding quickly — not just find specific facts.
                </p>

                <h3 className="text-[var(--text)] text-base font-semibold mb-3">Success looks like</h3>
                <ul className="space-y-2 text-[var(--text-muted)] text-sm leading-7">
                  <li className="flex gap-2"><span>•</span><span>User uploads a paper and within 60 seconds has a visual map of its key sections, concepts, and claims</span></li>
                  <li className="flex gap-2"><span>•</span><span>User can identify the paper's central argument and main supporting concepts without reading any body text</span></li>
                  <li className="flex gap-2"><span>•</span><span>User can click any node to read full content and ask Claude contextual questions about that specific idea</span></li>
                  <li className="flex gap-2"><span>•</span><span>User leaves with an exported summary they can use in their own notes</span></li>
                </ul>
              </section>

              {/* 04 Design Process */}
              <section id="rl-section-04">
                <p className="text-[var(--accent)] font-semibold text-sm tracking-wider uppercase mb-3">04&nbsp;&nbsp;Design Process</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">Ideation</h2>
                <div className="space-y-4 text-[var(--text-muted)] text-sm leading-7 mb-8">
                  <p>
                    The first — a chat interface over a PDF. A lightweight NotebookLM clone. Killed on day one. It didn't solve the structural problem; it just added another way to query text.
                  </p>
                  <p>
                    The second — a 2D force-directed graph. Looks impressive in demos, becomes unreadable at scale. I needed hierarchy, not organic floating.
                  </p>
                  <p>
                    The third — what I built. A top-down tree for the mindmap, a 3D radial topology for spatial navigation. Two views of the same knowledge, each answering a different question.
                  </p>
                </div>

                <h3 className="text-[var(--text)] text-base font-semibold mb-3">Information architecture</h3>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-4">
                  Three node types were defined based on the natural structure of academic papers:
                </p>
                <ul className="space-y-2 text-[var(--text-muted)] text-sm leading-7 mb-8">
                  <li className="flex gap-2"><span>•</span><span><span className="text-[var(--text)] font-semibold">Sections</span> — the paper's own structural divisions (Abstract, Introduction, Methodology, Results, Discussion, Conclusion)</span></li>
                  <li className="flex gap-2"><span>•</span><span><span className="text-[var(--text)] font-semibold">Concepts</span> — key terms, theories, methods, and technical entities the paper introduces or relies upon</span></li>
                  <li className="flex gap-2"><span>•</span><span><span className="text-[var(--text)] font-semibold">Claims</span> — specific findings, arguments, hypotheses, and contributions the paper asserts</span></li>
                </ul>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-8">
                  This maps directly onto how researchers mentally categorise paper content. Sections tell you what the paper covers. Concepts tell you what it uses. Claims tell you what it argues.
                </p>

                <h3 className="text-[var(--text)] text-base font-semibold mb-3">The design rationale — Three topology views</h3>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-4">Three views, same data, different structural lens.</p>
                <ul className="space-y-2 text-[var(--text-muted)] text-sm leading-7 mb-4">
                  <li className="flex gap-2"><span>•</span><span><span className="text-[var(--text)] font-semibold">Centralised</span> — one idea at the centre, all others radiating by semantic distance. What is this paper fundamentally about?</span></li>
                  <li className="flex gap-2"><span>•</span><span><span className="text-[var(--text)] font-semibold">Decentralised</span> — ideas grouped into thematic clusters. What are the major themes and what bridges them?</span></li>
                  <li className="flex gap-2"><span>•</span><span><span className="text-[var(--text)] font-semibold">Distributed</span> — peer-to-peer connections, no hierarchy. How do individual ideas actually relate?</span></li>
                </ul>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-8">
                  Same paper. Three interpretations. Navigable in real time. No other research tool does this.
                </p>

                <h3 className="text-[var(--text)] text-base font-semibold mb-4">Key design decisions</h3>
                <div className="space-y-4 text-[var(--text-muted)] text-sm leading-7">
                  <p>
                    <span className="text-[var(--text)] font-semibold">Decision 1 — Webcam as background, not a corner overlay.</span> The original picture-in-picture webcam created a cognitive split — users focused on either the graph or the camera, never both. Making the webcam the full background made gesture control feel like spatial computing. The graph floated in the user's physical space.
                  </p>
                  <p>
                    <span className="text-[var(--text)] font-semibold">Decision 2 — Always-visible labels over hover-only tooltips.</span> Early builds showed labels only on hover. Researchers consistently tried to scan the whole graph first — like reading a map before navigating it. Hover-only forced sequential interaction with a spatial tool. All labels became always visible.
                  </p>
                  <p>
                    <span className="text-[var(--text)] font-semibold">Decision 3 — Right panel as passive context, not active focus.</span> Clicking a node originally replaced the right panel entirely. It interrupted the spatial flow. The revised design updates the panel quietly while keeping the graph fully interactive. The user never leaves the spatial view.
                  </p>
                </div>
              </section>

              {/* 05 The Build */}
              <section id="rl-section-05">
                <p className="text-[var(--accent)] font-semibold text-sm tracking-wider uppercase mb-3">05&nbsp;&nbsp;The Build</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">Built entirely with Claude Code</h2>
                <div className="space-y-4 text-[var(--text-muted)] text-sm leading-7 mb-8">
                  <p>
                    The entire codebase was built through Claude Code — structured prompts, iterative refinement, targeted fixes. Not vibe coding. A disciplined design-led process where the designer's role shifts from writing syntax to specifying intent.
                  </p>
                  <p>
                    Every prompt was preceded by a design decision. Claude Code handled the syntax. The designer handled the thinking.
                  </p>
                </div>

                <h3 className="text-[var(--text)] text-base font-semibold mb-3">Stack decisions</h3>
                <ul className="space-y-2 text-[var(--text-muted)] text-sm leading-7 mb-8">
                  <li className="flex gap-2"><span>•</span><span><span className="text-[var(--text)] font-semibold">Three.js r128</span> — 3D rendering with CSS2DRenderer for always-visible labels</span></li>
                  <li className="flex gap-2"><span>•</span><span><span className="text-[var(--text)] font-semibold">MediaPipe Hands + Face Mesh</span> — gesture and blink detection, fully client-side</span></li>
                  <li className="flex gap-2"><span>•</span><span><span className="text-[var(--text)] font-semibold">Claude API (claude-sonnet-4)</span> — 4 sequential calls: clustering, layout, edges, analysis</span></li>
                  <li className="flex gap-2"><span>•</span><span><span className="text-[var(--text)] font-semibold">PDF.js</span> — client-side text extraction up to 30 pages</span></li>
                  <li className="flex gap-2"><span>•</span><span><span className="text-[var(--text)] font-semibold">Vanilla JS</span> — no framework, minimal bundle, fast load on low-powered hardware</span></li>
                </ul>

                <h3 className="text-[var(--text)] text-base font-semibold mb-3">Design decisions that changed at code</h3>
                <ul className="space-y-2 text-[var(--text-muted)] text-sm leading-7">
                  <li className="flex gap-2"><span>•</span><span>Node label font size was 12px in design. At actual webcam resolution and dark background contrast, 12px was unreadable. Raised to minimum 14px with text-shadow halos.</span></li>
                  <li className="flex gap-2"><span>•</span><span>Gesture sensitivity required a 400ms hold timer — not a design consideration initially. Without it the topology switched on every borderline frame, making the 3D view unusable.</span></li>
                  <li className="flex gap-2"><span>•</span><span>The device pixel ratio fix for the mindmap canvas was not in the original design spec. Retina MacBook screens rendered the canvas at 1x internally, causing blur. Added DPR scaling after first test on a MacBook Pro.</span></li>
                </ul>
              </section>

              {/* 06 The Product */}
              <section id="rl-section-06">
                <p className="text-[var(--accent)] font-semibold text-sm tracking-wider uppercase mb-3">06&nbsp;&nbsp;The Product</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">Core screens</h2>
                <div className="space-y-4 text-[var(--text-muted)] text-sm leading-7">
                  <p>
                    <span className="text-[var(--text)] font-semibold">Upload Screen</span> — A focused single-action screen. Logo, tagline, drop zone, API key field. Optical centre placement (42% from top) rather than mathematical centre — a small detail that makes the screen feel intentional rather than accidental.
                  </p>
                  <p>
                    <span className="text-[var(--text)] font-semibold">Loading Screen</span> — Six-step progress indicator with the paper title shown, a progress bar with fraction count, and an estimated time hint. Designed to prevent the "did it crash?" moment that kills trust in AI tools on first use.
                  </p>
                  <p>
                    <span className="text-[var(--text)] font-semibold">Mindmap View (default tab)</span> — A top-down tree layout rendered on a device-pixel-ratio-corrected canvas. All node labels always visible. Three visually distinct node types — blue sections, white concepts, amber claims. Inline expansion on click. Connected arrow callout on node selection, detail in the right panel.
                  </p>
                  <p>
                    <span className="text-[var(--text)] font-semibold">3D Spatial View</span> — Webcam as full background, Three.js canvas transparent on top. Three topology modes with 1.2s eased morph animation. Hand gesture guide bottom-left, active gesture highlighted in real time. Eye blink toggle in nav bar for accessibility.
                  </p>
                </div>
              </section>

              {/* 07 Results & Impact */}
              <section id="rl-section-07">
                <p className="text-[var(--accent)] font-semibold text-sm tracking-wider uppercase mb-3">07&nbsp;&nbsp;Results &amp; Impact</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-6">Feedback received</h2>
                <div className="space-y-6">
                  <blockquote className="border-l-2 border-[var(--accent)] pl-4">
                    <p className="text-[var(--text-muted)] text-sm leading-7 italic">
                      "This is what I've been trying to build in Obsidian for months. It just works out of the box."
                    </p>
                    <p className="text-[var(--text-muted)] text-xs mt-2">— PhD candidate, on the mindmap view</p>
                  </blockquote>
                  <blockquote className="border-l-2 border-[var(--accent)] pl-4">
                    <p className="text-[var(--text-muted)] text-sm leading-7 italic">
                      "The 3D view is genuinely different from anything I've seen in a research tool. It feels like you're inside the paper."
                    </p>
                    <p className="text-[var(--text-muted)] text-xs mt-2">— Independent UX researcher</p>
                  </blockquote>
                </div>
              </section>

              {/* 08 Monetisation Strategy */}
              <section id="rl-section-08">
                <p className="text-[var(--accent)] font-semibold text-sm tracking-wider uppercase mb-3">08&nbsp;&nbsp;Monetisation Strategy</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">Current state</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7 mb-8">
                  ResearchMap currently requires users to bring their own Anthropic API key. Each full paper analysis costs approximately £0.03–0.05, making self-service viable for individual researchers. The key-per-user model removes hosting cost entirely for the current version.
                </p>

                <h3 className="text-[var(--text)] text-base font-semibold mb-3">Near term — Freemium model</h3>
                <ul className="space-y-2 text-[var(--text-muted)] text-sm leading-7 mb-8">
                  <li className="flex gap-2"><span>•</span><span><span className="text-[var(--text)] font-semibold">Free tier</span> — 3 paper analyses per month using a shared key pool</span></li>
                  <li className="flex gap-2"><span>•</span><span><span className="text-[var(--text)] font-semibold">Pro tier (£4.99/month)</span> — unlimited papers, multi-paper comparison, longer papers (50 pages), export to Notion/Obsidian</span></li>
                  <li className="flex gap-2"><span>•</span><span><span className="text-[var(--text)] font-semibold">Team tier (£12/month per seat)</span> — shared workspaces, annotated maps, collaborative Ask Claude sessions</span></li>
                </ul>

                <h3 className="text-[var(--text)] text-base font-semibold mb-3">Revenue path</h3>
                <p className="text-[var(--text-muted)] text-sm leading-7">
                  The primary acquisition channel is academic communities — Reddit's r/PhD, r/GradSchool, ResearchGate, and LinkedIn posts targeting postgraduate students. The freemium model is designed so the free tier is genuinely useful (3 papers covers a week's literature review) while the friction of API key management creates natural upgrade motivation.
                </p>
              </section>

              {/* 09 Future Work */}
              <section id="rl-section-09">
                <p className="text-[var(--accent)] font-semibold text-sm tracking-wider uppercase mb-3">09&nbsp;&nbsp;Future Work</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">Multi-paper comparison</h2>
                <ul className="space-y-2 text-[var(--text-muted)] text-sm leading-7">
                  <li className="flex gap-2"><span>•</span><span><strong>Multi-paper comparison</strong> — Upload several papers, get one unified map. See shared concepts, unique ideas, contradictions. Turns ResearchMap into a literature review tool.</span></li>
                  <li className="flex gap-2"><span>•</span><span><strong>Backend + accounts</strong> — Everything currently lives in localStorage. A simple backend unlocks saved maps, history, and shared links.</span></li>
                  <li className="flex gap-2"><span>•</span><span><strong>Obsidian and Notion integration</strong> — Export directly into the tools researchers already use — structured and linked, not just a markdown dump.</span></li>
                  <li className="flex gap-2"><span>•</span><span><strong>Mobile</strong> — A mindmap-only mobile version with tap and swipe. The 3D view stays desktop.</span></li>
                  <li className="flex gap-2"><span>•</span><span><strong>Local LLM support</strong> — For sensitive or unpublished work, an option to run analysis locally using Ollama or LM Studio.</span></li>
                </ul>
              </section>

              {/* 10 Learnings */}
              <section id="rl-section-10">
                <p className="text-[var(--accent)] font-semibold text-sm tracking-wider uppercase mb-3">10&nbsp;&nbsp;Learnings</p>
                <h2 className="text-[var(--text)] text-xl md:text-2xl font-bold mb-4">What building taught me about design</h2>
                <p className="text-[var(--text-muted)] text-sm leading-7">
                  When you build what you design, the gap between intent and implementation collapses. The canvas DPR fix, the gesture hold timer, the label halo — none were in the spec. They emerged from building. Implementation forces a precision that designing alone never demands.
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
              </nav>
            </div>
          </aside>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

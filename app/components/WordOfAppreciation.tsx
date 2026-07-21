"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import roundedArrow from "../../public/assets/icons/roundedarrow.svg";
import thumbIcon from "../../public/assets/icons/thumb.svg";

const RADIUS = 150;
const ANGLE_DEG = 26;
const EASE = "0.6s cubic-bezier(0.4,0,0.2,1)";

const TOPICS = [
  {
    before: "0→1 product ",
    accent: "design",
    after: "",
    description:
      "From a raw idea to something we can ship. I work through concept, scope, user flows, and visual design.",
  },
  {
    before: "AI-enabled ",
    accent: "prototyping",
    after: "",
    description:
      "Rapid iteration using AI tools to turn concepts into testable prototypes fast.",
  },
  {
    before: "",
    accent: "Design",
    after: " systems",
    description:
      "Building scalable, consistent component libraries that teams actually want to use.",
  },
  {
    before: "User ",
    accent: "research",
    after: "",
    description:
      "Talking to users early and often to ground decisions in real-world needs.",
  },
  {
    before: "Cross-functional ",
    accent: "collaboration",
    after: "",
    description:
      "Bridging gaps between design, engineering, and product to keep everyone aligned.",
  },
];

const TESTIMONIALS = [
  {
    name: "Chaitanya Pandit",
    role: "Co-founder, EnableWealth",
    quote:
      "\u201CWorking with Ishan, I\u2019ve come to appreciate his intuitive understanding of design. From a client\u2019s perspective, it\u2019s ideal when your designer not only understands the brief but consistently exceeds expectations without needing detailed instructions.\u201D",
    avatar: "/assets/workedwith/chaitanya.png",
  },
  {
    name: "Badal Agrawal",
    role: "SR. Product Manager @ CoinDCX",
    quote:
      "\u201CIshan has a great Design and UX sense. Very keen on experimenting and learning new things as well.\u201D",
    avatar: "",
  },
  {
    name: "Jay Kiruthika",
    role: "Senior Lecturer at Kingston University",
    quote:
      "\u201CIshan is inquisitive in nature and performs all his given tasks in perfection. He goes beyond what is expected and explores various solutions. He embraces technology in great zeal. Ambitious and works towards his goals brilliantly.\u201D",
    avatar: "",
  },
];

function NavButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "#131415",
        border: `1px solid ${hovered ? "#474853" : "#2F3037"}`,
        color: hovered ? "#fff" : "#A7AAB4",
        fontSize: 16,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: `all ${EASE}`,
        flexShrink: 0,
      }}
    >
      {children}
    </button>
  );
}

export default function WordOfAppreciation() {
  const [dialIndex, setDialIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [descText, setDescText] = useState(TOPICS[0].description);
  const [descOpacity, setDescOpacity] = useState(1);
  const pausedRef = useRef(false);

  const goToDial = useCallback((i: number) => {
    setDialIndex(i);
    setDescOpacity(0);
    setTimeout(() => {
      setDescText(TOPICS[i].description);
      setDescOpacity(1);
    }, 300);
  }, []);

  const handleTopicClick = (i: number) => {
    pausedRef.current = true;
    goToDial(i);
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setDialIndex((prev) => {
          const next = (prev + 1) % TOPICS.length;
          setDescOpacity(0);
          setTimeout(() => {
            setDescText(TOPICS[next].description);
            setDescOpacity(1);
          }, 300);
          return next;
        });
      }
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[testimonialIndex];

  const prevTestimonial = () =>
    setTestimonialIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const nextTestimonial = () =>
    setTestimonialIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <div className="w-full">
      {/* Section header — matches CardWrapper style */}
      <div className="w-full flex items-center justify-between mb-8">
        <div className="flex items-center justify-center gap-5">
          <div className="hidden md:flex items-center justify-center border border-[var(--border)] p-1.5 rounded-xl h-14 w-14 shrink-0">
            <div className="border border-[var(--border-strong)] p-2 rounded-lg flex items-center justify-center">
              <Image src={thumbIcon} alt="appreciation" width={28} height={28} />
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg md:text-xl mb-2">Word Of Appreciation</p>
            <p className="font-medium text-xs md:text-sm text-[var(--text-muted)]">
              Trusted, valued, proven
            </p>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/ishan-tandel-90b592222/details/recommendations/?detailScreenTabIndex=0"
          target="_blank"
          rel="noopener noreferrer"
          className="shiny-btn flex gap-2 py-3 px-4 rounded-xl cursor-pointer"
        >
          <p className="hidden md:flex font-extrabold text-sm">View More</p>
          <Image src={roundedArrow} alt="Arrow" width={18} height={18} />
        </a>
      </div>

      {/* Two-card row */}
      <div
        style={{
          maxWidth: 850,
          display: "flex",
          gap: 24,
          height: 420,
        }}
      >
        {/* ── Left card: rotary topic dial ── */}
        <div
          style={{
            flex: 2,
            background: "#1c1d20",
            borderRadius: 24,
            border: "1px solid #2F3037",
            padding: 32,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {TOPICS.map((topic, i) => {
            const dist = i - dialIndex;
            const theta = (dist * ANGLE_DEG * Math.PI) / 180;
            const x = RADIUS * (Math.cos(theta) - 1);
            const y = RADIUS * Math.sin(theta);
            const absDist = Math.abs(dist);
            const opacity = Math.max(1 - 0.22 * absDist, 0.2);
            const blur = Math.min(absDist, 3);
            const isActive = dist === 0;

            return (
              <div
                key={i}
                onClick={() => handleTopicClick(i)}
                style={{
                  position: "absolute",
                  top: `calc(50% + ${y}px)`,
                  left: `${32 + x}px`,
                  transform: "translate(0, -50%)",
                  opacity,
                  filter: blur > 0 ? `blur(${blur}px)` : "none",
                  transition: `all ${EASE}`,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  whiteSpace: "nowrap",
                  userSelect: "none",
                }}
              >
                <span
                  style={{
                    color: "#00F48D",
                    fontSize: 16,
                    fontWeight: 600,
                    width: 14,
                    display: "inline-block",
                    transition: `opacity ${EASE}`,
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  →
                </span>
                <span
                  style={{
                    fontSize: isActive ? 16 : 15,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "#fff" : "#A7AAB4",
                    transition: `all ${EASE}`,
                  }}
                >
                  {topic.before}
                  <span style={{ color: "#00F48D", fontWeight: 700 }}>
                    {topic.accent}
                  </span>
                  {topic.after}
                </span>
              </div>
            );
          })}

          {/* Floating description card */}
          <div
            style={{
              position: "absolute",
              right: 12,
              left: "45%",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#2a2c31",
              border: "1px solid #474853",
              borderRadius: 20,
              padding: 18,
              boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
            }}
          >
            <p
              style={{
                fontSize: 14,
                lineHeight: "23px",
                color: "#fff",
                margin: 0,
                opacity: descOpacity,
                transition: `opacity 0.3s ease`,
              }}
            >
              {descText}
            </p>
          </div>
        </div>

        {/* ── Right card: testimonial carousel ── */}
        <div
          style={{
            flex: 1.1,
            background:
              "radial-gradient(ellipse 140% 100% at 30% 0%, #33363d 0%, #262830 45%, #1c1d20 100%)",
            borderRadius: 24,
            border: "1px solid #2F3037",
            padding: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minWidth: 0,
          }}
        >
          {/* Avatar + name */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {t.avatar ? (
              <Image
                src={t.avatar}
                alt={t.name}
                width={56}
                height={56}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
            ) : (
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "#2F3037",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                {t.name[0]}
              </div>
            )}
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#fff",
                  margin: 0,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {t.name}
              </p>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#A7AAB4",
                  margin: 0,
                  marginTop: 2,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {t.role}
              </p>
            </div>
          </div>

          {/* Quote */}
          <p
            style={{
              fontSize: 17,
              fontWeight: 500,
              lineHeight: "28px",
              color: "#fff",
              margin: "20px 0 0",
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              flex: 1,
            }}
          >
            {t.quote}
          </p>

          {/* Nav buttons */}
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <NavButton onClick={prevTestimonial}>←</NavButton>
            <NavButton onClick={nextTestimonial}>→</NavButton>
          </div>
        </div>
      </div>
    </div>
  );
}

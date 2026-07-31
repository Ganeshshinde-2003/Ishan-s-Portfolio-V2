"use client";

import Image from "next/image";
import { CardItem } from "./CardWrapper";
import { useState, useRef, useEffect } from "react";

// 4 lines × 24px (text-base 16px × 1.5 line-height)
const COLLAPSED_HEIGHT = 96;

const AppreciationCard = ({
  imagePath,
  talk,
  name,
  position,
}: CardItem) => {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const [fullHeight, setFullHeight] = useState(COLLAPSED_HEIGHT);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = paraRef.current;
    if (!el) return;
    const h = el.scrollHeight;
    setFullHeight(h);
    setIsClamped(h > COLLAPSED_HEIGHT);
    // Reset expansion when the testimonial changes
    setExpanded(false);
  }, [talk]);

  return (
    <div className="flex flex-col items-start p-6 bg-[var(--border)] rounded-2xl h-full">
      <div className="flex-1 w-full">
        <div
          className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
          style={{ maxHeight: expanded ? `${fullHeight}px` : `${COLLAPSED_HEIGHT}px` }}
        >
          <p
            ref={paraRef}
            className="text-base font-semibold text-[var(--text-muted)]"
          >
            {talk}
          </p>
        </div>
        {isClamped && (
          <button
            onClick={() => setExpanded(v => !v)}
            className="mt-2 text-sm font-medium text-[var(--text)] hover:underline focus:outline-none"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>
      <div className="w-full flex flex-col mt-10">
        {imagePath && (
          <Image
            src={imagePath}
            alt={name ?? "Speaker Image"}
            width={60}
            height={60}
            className="rounded-full mb-2"
          />
        )}
        <p className="text-base font-normal">{name}</p>
        <p className="text-sm font-medium text-[var(--text-muted)]">{position}</p>
      </div>
    </div>
  );
};

export default AppreciationCard;

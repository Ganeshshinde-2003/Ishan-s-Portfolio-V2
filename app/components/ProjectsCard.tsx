"use client";

import Image from "next/image";
import { CardItem } from "./CardWrapper";
import roundedArrow from "../../public/assets/icons/roundedarrow.svg";
import { useState, useEffect } from "react";

const ProjectsCard = ({ imagePath, title, description, arrow, flipBack, imageHeight = 80, onClick }: CardItem & { imageHeight?: number; onClick?: () => void }) => {
  const [isMd, setIsMd] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMd(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const frontContent = (
    <>
      <div className="w-full" style={{ height: isMd && imageHeight > 0 ? `${imageHeight * 4}px` : "400px" }}>
        <Image
          src={imagePath}
          alt={!title ? "Project Image" : title}
          width={100}
          height={100}
          className="w-full h-full rounded-xl object-cover"
        />
      </div>
      <div className="w-full flex flex-col px-2 mt-4 mb-3">
        <div className="w-full flex items-center justify-between">
          <h3 className="font-semibold text-xs text-[var(--text-muted)]">{title}</h3>
          {arrow && (
            <Image
              src={roundedArrow}
              alt="Rounded Arrow"
              width={18}
              height={18}
            />
          )}
        </div>
        {description && (
          <p className="text-sm font-medium mt-2 line-clamp-2">{description}</p>
        )}
      </div>
    </>
  );

  if (flipBack) {
    return (
      <div
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        style={{ perspective: "1000px", padding: "6px 0", overflow: "visible" }}
      >
        <div
          onClick={onClick}
          role={onClick ? "button" : undefined}
          tabIndex={onClick ? 0 : undefined}
          onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") onClick(); } : undefined}
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            position: "relative",
          }}
          className={onClick ? "cursor-pointer" : ""}
        >
          {/* Front face — stays in normal flow to set container height */}
          <div
            className="flex flex-col items-start p-2 bg-[var(--card)] border border-[var(--border)] rounded-2xl md:h-[420px]"
            style={{ backfaceVisibility: "hidden" }}
          >
            {frontContent}
          </div>

          {/* Back face — absolutely fills the same space */}
          <div
            className="flex flex-col justify-center p-6 border border-[var(--border)] rounded-2xl absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "radial-gradient(ellipse at top left, #33363d 0%, #232529 60%)",
            }}
          >
            <p className="text-[var(--accent)] font-semibold text-base mb-3">{title}</p>
            <p style={{ fontSize: "15px", lineHeight: "24px", color: "white" }}>{flipBack}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") onClick(); } : undefined}
      className={`flex flex-col items-start p-2 bg-[var(--card)] h-full md:h-[420px] border border-[var(--border)] rounded-2xl${onClick ? " cursor-pointer hover:border-[var(--border-strong)] transition-colors" : ""}`}
    >
      {frontContent}
    </div>
  );
};

export default ProjectsCard;

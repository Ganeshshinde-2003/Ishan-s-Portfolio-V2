"use client";

import Image from "next/image";
import { CardItem } from "./CardWrapper";
import roundedArrow from "../../public/assets/icons/roundedarrow.svg";
import { useState, useEffect } from "react";

const ProjectsCard = ({ imagePath, title, description, arrow, imageHeight = 80 }: CardItem & { imageHeight?: number }) => {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMd(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`flex flex-col items-start p-2 bg-[#232529] h-full border border-[#2F3037] rounded-2xl`}
    >
      <div className="w-full h-auto" style={{ height: isMd && imageHeight > 0 ? `${imageHeight * 4}px` : "400px" }}>
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
          <h3 className="font-semibold text-xs text-[#A7AAB4]">{title}</h3>
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
          <p className="text-sm font-medium mt-2">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;

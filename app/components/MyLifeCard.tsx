import Image from "next/image";
import { CardItem } from "./CardWrapper";
import { useEffect, useState } from "react";

const MyLifeCard = ({
  imagePath,
  title,
  activity,
  coverImage,
  imageHeight = 80,
}: CardItem & { imageHeight?: number }) => {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMd(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`flex flex-col items-start`}>
      <div
        className="w-full p-2 bg-[var(--card)] h-full border border-[var(--border)] rounded-2xl"
        style={{
          height: isMd && imageHeight > 0 ? `${imageHeight * 4}px` : "400px",
        }}
      >
        <Image
          src={imagePath}
          alt={!title ? "Project Image" : title}
          width={100}
          height={100}
          className="w-full h-full rounded-xl object-cover"
        />
      </div>
      <div className="w-full flex items-center justify-end gap-2 mt-4 ">
        <p className="text-xs font-medium text-[var(--text-muted)] tracking-wider">
          {activity}
        </p>
        <div className="flex items-center justify-center py-1 px-2 border border-[var(--border)] rounded-md bg-[var(--bg)]">
          <p className="text-sm font-medium tracking-wider text-[var(--text-muted)]">
            Img
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyLifeCard;

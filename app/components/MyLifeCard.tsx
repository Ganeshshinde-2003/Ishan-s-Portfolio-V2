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
        className="w-full p-2 bg-[#232529] h-full border border-[#2F3037] rounded-2xl"
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
        <p className="text-xs font-medium text-[#A7AAB4] tracking-wider">
          {activity}
        </p>
        <div className="flex items-center justify-center py-1 px-2 border border-[#2F3037] rounded-md bg-[#131415]">
          <p className="text-sm font-medium tracking-wider text-[#A7AAB4]">
            Img
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyLifeCard;

import Image from "next/image";
import { CardItem } from "./CardWrapper";
import roundedArrow from "../../public/assets/icons/roundedarrow.svg";

const ProjectsCard = ({ imagePath, title, description, coverImage, arrow, imageHeight = 80 }: CardItem & { imageHeight?: number }) => {
  return (
    <div className="flex flex-col items-start p-2 bg-[#1A1B1E] h-full border border-[#2F3037] rounded-xl">
      <Image
        src={imagePath}
        alt={!title ? "Project Image" : title}
        width={100}
        height={100}
        className={`w-full rounded-xl ${coverImage ? "object-cover" : ""}`}
        style={{ height: imageHeight === 0 ? "100%" : `${imageHeight * 4}px` }}
      />
      <div className="w-full flex flex-col px-2 mt-4">
        <div className="w-full flex items-center justify-between">
          <h3 className="font-semibold text-sm text-[#A7AAB4]">{title}</h3>
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
          <p className="text-base font-semibold mt-2">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;

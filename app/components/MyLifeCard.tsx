import Image from "next/image";
import { CardItem } from "./CardWrapper";

const MyLifeCard = ({ imagePath, title, activity, coverImage }: CardItem) => {
  return (
    <div className="flex flex-col h-full gap-2">
      <div className="items-start p-2 bg-[#232529] border border-[#2F3037] rounded-xl h-full">
        <Image
          src={imagePath}
          alt={!title ? "Project Image" : title}
          width={100}
          height={100}
          className={`w-full h-80 rounded-xl ${coverImage ? "object-cover" : ""}`}
        />
      </div>
      <div className="w-full flex items-center justify-end gap-2">
        <p className="text-xs font-semibold text-[#A7AAB4]">{activity}</p>
        <div className="flex items-center justify-center py-1 px-2 border border-[#2F3037] rounded-md bg-[#131415]">
          <p className="text-sm font-semibold text-[#A7AAB4]">Img</p>
        </div>
      </div>
    </div>
  );
};

export default MyLifeCard;

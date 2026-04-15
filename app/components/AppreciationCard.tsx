import Image from "next/image";
import { CardItem } from "./CardWrapper";

const AppreciationCard = ({
  imagePath,
  talk,
  name,
  position,
}: CardItem) => {
  return (
    <div
      className={`flex flex-col items-start p-6 bg-[#2F3037] rounded-2xl`}
    >
      <p className="text-base font-semibold text-[#A7AAB4]">{talk}</p>
      <div className="w-full flex flex-col mt-10">
        <Image src={imagePath} alt={!name ? "Speaker Image" : name} width={60} height={60} className="rounded-full mb-2"/>
        <p className="text-base font-normal">{name}</p>
        <p className="text-sm font-medium text-[#A7AAB4]">{position}</p>
      </div>
    </div>
  );
};

export default AppreciationCard;

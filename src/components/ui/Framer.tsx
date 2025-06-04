import Image from "next/image";
import Star from "@/assets/icon/star.svg";

export const Framer = () => {
  return (
    <div className="w-full">
      <div className="border-t border-b border-[#2A2A2A]">
        <div className="flex flex-wrap items-center justify-center gap-7 md:gap-[100px] py-4 md:py-6">
          <span className="text-white font-poppins text-base md:text-xl">
            Framer
          </span>
          <Image src={Star} alt="star" width={24} height={24} />
          <span className="text-white font-poppins text-base md:text-xl">
            Webflow
          </span>
          <Image src={Star} alt="star" width={24} height={24} />
          <span className="text-white font-poppins text-base md:text-xl">
            Figma
          </span>
          <Image src={Star} alt="star" width={24} height={24} />
          <span className="text-white font-poppins text-base md:text-xl hidden md:flex">
            Notion
          </span>
          <Image
            src={Star}
            alt="star"
            width={24}
            height={24}
            className="hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
};

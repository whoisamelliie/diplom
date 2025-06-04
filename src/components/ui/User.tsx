import UserIcon from "@/assets/icon/user.svg";
import Image from "next/image";
export const UserButton = () => {
  return (
    <div className="w-[49px] h-[49px] rounded-full gradient flex items-center justify-center px-2 py-4 pt-[18px] ">
      <Image src={UserIcon} alt="User Icon" width={22} height={22} />
    </div>
  );
};

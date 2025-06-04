import Logo from "@/assets/icon/icon.svg";
import Image from "next/image";

export const Log = () => {
  return (
    <div className="flex flex-col-2">
      <Image src={Logo} alt="logo" width={44} height={44} />
      <p className="font-poppins text-[24px] text-white items-center mt-1 ml-2">
        znisa
      </p>
    </div>
  );
};

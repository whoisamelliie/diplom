import Logo from "@/assets/icon/icon.svg";
import X from "@/assets/icon/x.svg";
import Inst from "@/assets/icon/inst.svg";
import Face from "@/assets/icon/face.svg";
import Inter from "@/assets/icon/inter.svg";

import Image from "next/image";
import { Button } from "../ui/Button";
import { UserButton } from "../ui/User";

export const Footer = () => {
  const icons = [X, Inter, Inst, Face];

  return (
    <footer className="w-full bg-dark-black text-white px-[60px] py-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row  md:justify-between gap-6">
        <div className="flex md:items-center pt-[4px] order-2 md:order-1">
          <Image src={Logo} alt="logo" width={44} height={44} />
          <p className="font-poppins text-[24px] ml-2">znisa</p>
        </div>

        <div className="w-full md:w-auto order-1 md:order-2">
          <div className="btn-gradient-border w-[278px] md:w-[366px] h-[48px] p-[2px] rounded-full">
            <div className="flex justify-center md:justify-start items-center bg-dark-gray rounded-full w-full h-full pl-3 gap-4 md:gap-10">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="bg-light-gray rounded-full flex items-center justify-center w-[40px] h-[36px] md:w-[52px]"
                >
                  <Image
                    src={icon}
                    alt={`icon-${index}`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center  order-3">
          <Button />
          <UserButton />
        </div>
      </div>
    </footer>
  );
};

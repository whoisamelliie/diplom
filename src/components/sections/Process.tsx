import Image from "next/image";
import Star from "@/assets/icon/star2.svg";
import Icon1 from "@/assets/icon/51.svg";
import Icon2 from "@/assets/icon/52.svg";
import Icon3 from "@/assets/icon/53.svg";
import Circ from "@/assets/icon/circle.svg";
import Cir from "@/assets/icon/ciir.svg";

export const Process = () => {
  return (
    <div className="px-4 md:px-[175px] pt-8 md:pt-[91px] 2xl:px-0 2xl:max-w-[1090px] 2xl:mx-auto">
      <div className="flex items-center mb-6 md:mb-8">
        <h1 className="font-poppins text-2xl md:text-[40px] text-white">
          My process to design
        </h1>
        <Image
          src={Star}
          alt="star"
          width={36}
          height={36}
          className="ml-4 md:ml-[29px] w-6 h-6 md:w-9 md:h-9"
        />
      </div>

      <div className="flex flex-col gap-6 md:gap-[40px]">
        <div className="relative flex items-start gap-4 md:gap-6">
          <div className="relative w-10 md:w-14 flex justify-center">
            <Image
              src={Icon1}
              alt="Step 1"
              width={40}
              height={40}
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <div className="absolute top-10 md:top-[56px] left-1/2 -translate-x-1/2 h-[180px] md:h-[240px] w-[1px] md:w-[2px] bg-gray-700" />
          </div>

          <div>
            <Image
              src={Circ}
              alt="circle"
              width={40}
              height={40}
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <h3 className="text-white text-lg md:text-2xl font-poppins pt-4 md:pt-8">
              Step 1: Product design Research
            </h3>
            <p className="text-white font-poppins text-sm md:text-xl w-full md:w-[586px] mt-1 md:mt-2">
              This initial step involves a systematic and thorough exploration
              of the market landscape, user needs, and existing solutions.
            </p>
            <div className="pt-4 md:pt-[33px]">
              <div className="btn-gradient-border inline-block rounded-full p-[1px] md:p-[2px]">
                <button className="bg-dark-black text-white text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 rounded-full font-poppins w-[120px] md:w-[177px] h-8 md:h-[49px]">
                  See Examples
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-start gap-4 md:gap-6">
          <div className="relative w-10 md:w-14 flex justify-center">
            <Image
              src={Icon2}
              alt="Step 2"
              width={40}
              height={40}
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <div className="absolute top-10 md:top-[56px] left-1/2 -translate-x-1/2 h-[140px] md:h-[180px] w-[1px] md:w-[2px] bg-gray-700" />
          </div>

          <div>
            <Image
              src={Cir}
              alt="circle"
              width={40}
              height={40}
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <h3 className="text-white text-lg md:text-2xl font-poppins pt-4 md:pt-8">
              Step 2: UI design in Figma
            </h3>
            <p className="text-white font-poppins text-sm md:text-xl w-full md:w-[586px] mt-1 md:mt-2">
              This step focuses on translating research insights into
              interactive and visual interfaces using Figma.
            </p>
          </div>
        </div>

        <div className="relative flex items-start gap-4 md:gap-6">
          <div className="w-10 md:w-14 flex justify-center">
            <Image
              src={Icon3}
              alt="Step 3"
              width={40}
              height={40}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </div>

          <div>
            <Image
              src={Circ}
              alt="circle"
              width={40}
              height={40}
              className="w-10 h-10 md:w-14 md:h-14 transform -scale-x-100"
            />
            <h3 className="text-white text-lg md:text-2xl font-poppins pt-4 md:pt-8">
              Step 3: No-code develop in Webflow
            </h3>
            <p className="text-white font-poppins text-sm md:text-xl w-full md:w-[586px] mt-1 md:mt-2">
              Build and launch functional websites based on UI with Webflow —
              without writing code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

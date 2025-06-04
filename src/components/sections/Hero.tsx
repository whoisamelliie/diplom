import Image from "next/image";
import Sparkle from "@/assets/icon/spark.svg";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className="relative w-full lg:w-[1090px] h-auto lg:h-[568px] mx-auto lg:mx-[175px] 2xl:mx-auto overflow-hidden mt-8 lg:mt-[53px] px-4 lg:px-0">
      <div className=" lg:block absolute inset-0 grid grid-cols-6 grid-rows-4 border-t border-l border-white/10">
        {[...Array(5)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 border-l border-white/10"
            style={{ left: `${((i + 1) * 100) / 6}%` }}
          />
        ))}
        {[...Array(3)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 border-t border-white/10"
            style={{ top: `${((i + 1) * 100) / 4}%` }}
          />
        ))}

        <Image
          src={Sparkle}
          alt="sparkle"
          width={20}
          height={20}
          className="absolute top-[25%] left-[83.5%]"
        />
        <Image
          src={Sparkle}
          alt="sparkle"
          width={20}
          height={20}
          className="absolute top-[75%] left-[8%]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full py-12 lg:py-0">
        <h1 className="text-white text-xl lg:text-5xl font-poppins mb-4 lg:mb-6">
          I design and build clean websites
        </h1>
        <p className="text-white text-xs lg:text-base font-poppins max-w-md lg:max-w-xl pt-1 lg:pt-[11px]">
          Write anything here something about yourself to showcase what actually
          you doing or targeting etc.
        </p>
        <Button className="mt-6 lg:mt-[11px]" />
      </div>
    </section>
  );
};

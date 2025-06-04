import Picture from "@/assets/icon/picture.jpg";
import { TestimonialCard } from "../ui/Card";
import Image from "next/image";
import Star from "@/assets/icon/star2.svg";

export const Client = () => {
  return (
    <div className="px-4 pt-20 md:px-10 lg:px-20 xl:px-[175px] xl:pt-[157px] 2xl:px-0 2xl:max-w-[1090px] 2xl:mx-auto">
      <div className="flex items-center mb-8 flex-wrap">
        <h1 className="font-poppins text-[28px] md:text-[32px] xl:text-[40px] text-white">
          Client testimonials
        </h1>
        <Image
          src={Star}
          alt="star"
          width={28}
          height={28}
          className="ml-4 md:ml-6 xl:ml-[29px]"
        />
      </div>
      <div className="flex flex-col gap-y-8 md:gap-y-11 pt-12 md:pt-[95px] w-full xl:w-[850px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-8 xl:gap-x-14 gap-y-8">
          <TestimonialCard
            name="Client Name"
            role="Product designer"
            text="s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the "
            avatar={Picture}
          />
          <TestimonialCard
            name="Client Name"
            role="Product designer"
            text="s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the "
            avatar={Picture}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-6 gap-y-8">
          <TestimonialCard
            name="Client Name"
            role="Product designer"
            text="s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the "
            avatar={Picture}
          />
          <TestimonialCard
            name="Client Name"
            role="Product designer"
            text="s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the "
            avatar={Picture}
          />
        </div>
      </div>
    </div>
  );
};

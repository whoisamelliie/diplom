import Image, { StaticImageData } from "next/image";
import QuoteIcon from "@/assets/icon/1.svg";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  avatar: StaticImageData;
}

export const TestimonialCard = ({
  name,
  role,
  text,
  avatar,
}: TestimonialCardProps) => {
  return (
    <div className="card-half-border">
      <div className="corner-gradient-angle" />
      <div className="bg-box-black-40 rounded-2xl p-6 w-[397px] h-[201px] text-white shadow-lg relative z-[0]">
        <div className="absolute top-4 right-4 w-10 h-10">
          <Image
            src={QuoteIcon}
            alt="quote"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="rounded-full bg-gray-500 object-cover"
          />
          <div>
            <p className="text-base font-poppins">{name}</p>
            <p className="text-xs text-white font-poppins">{role}</p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-white font-poppins">
          {text}
        </p>
      </div>
    </div>
  );
};

import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  name: string;
  icon: StaticImageData;
  preview: StaticImageData;
}

export const ProjectCard = ({ name, icon, preview }: ProjectCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row bg-box-black p-4 rounded-xl w-full max-w-[1093px] mb-[42px]">
      {/* Картинка */}
      <div className="w-full h-[300px] sm:h-[400px] lg:w-[546px] lg:h-[546px] relative rounded-md overflow-hidden">
        <Image
          src={preview}
          alt={`${name} preview`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col items-start mt-6 lg:mt-0 lg:ml-[100px] lg:justify-center ">
        <div className="w-[53px] h-[53px] relative mb-4">
          <Image
            src={icon}
            alt="Project number icon"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <h3 className="text-[24px] sm:text-[28px] lg:text-[30px] font-bold font-poppins text-white">
          {name}
        </h3>
      </div>
    </div>
  );
};

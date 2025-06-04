"use client";

import Image from "next/image";
import { useState } from "react";
import Star from "@/assets/icon/star2.svg";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Project1 from "@/assets/box.png";
import Icon1 from "@/assets/icon/41.svg";
import Icon2 from "@/assets/icon/42.svg";
import Icon3 from "@/assets/icon/43.svg";

export const Project = () => {
  const projects = [
    {
      name: "Portfolio Website",
      icon: Icon1,
      preview: Project1,
      description: "Modern portfolio for a designer.",
    },
    {
      name: "Dashboard App",
      icon: Icon2,
      preview: Project1,
      description: "Finance dashboard with charts.",
    },
    {
      name: "Landing Page",
      icon: Icon3,
      preview: Project1,
      description: "SaaS product landing page.",
    },
  ];

  const [selected, setSelected] = useState<null | (typeof projects)[0]>(null);

  return (
    <div className="px-4 pt-16 sm:px-6 md:px-10 lg:px-20 xl:px-[175px] xl:pt-[104px] 2xl:px-0 2xl:max-w-[1090px] 2xl:mx-auto">
      <div className="flex items-center flex-wrap">
        <h1 className="font-poppins text-[28px] sm:text-[32px] md:text-[36px] xl:text-[40px] text-white">
          Some Featured projects
        </h1>
        <Image
          src={Star}
          alt="star"
          width={28}
          height={28}
          className="ml-4 sm:ml-6 md:ml-8 xl:ml-[29px]"
        />
      </div>

      <div className="pt-10 sm:pt-16 flex flex-col gap-6 sm:gap-8 md:gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelected(p)}
            className="cursor-pointer"
          >
            <ProjectCard name={p.name} icon={p.icon} preview={p.preview} />
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 sm:px-8">
          <div
            className="
              relative bg-box-black text-white p-6 sm:p-8 rounded-xl 
              w-full max-w-[500px] sm:max-w-[550px]
              mx-auto
              max-h-[90vh] overflow-y-auto
            "
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-white text-3xl hover:text-gray-300"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              {selected.name}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              {selected.description}
            </p>

            <button
              onClick={() => setSelected(null)}
              className="
                mt-6 px-6 py-2 bg-white text-black rounded-full 
                w-full sm:w-auto text-sm sm:text-base font-semibold
              "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

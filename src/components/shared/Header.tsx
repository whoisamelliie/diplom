"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/icon/icon.svg";
import Home from "@/assets/icon/home.svg";
import Menu from "@/assets/icon/menu.svg";
import { Button } from "../ui/Button";
import { UserButton } from "../ui/User";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 md:px-[174px] pt-6 md:pt-[46px]">
      <div className="max-w-[1091px] mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image src={Logo} alt="logo" width={44} height={44} />
          <p className="font-poppins text-[24px] text-white ml-2">znisa</p>
        </div>

        <div className="hidden md:flex items-center gap-0">
          <div className="btn-gradient-border w-[418px] h-[48px] rounded-full p-[2px]">
            <div className="bg-dark-gray rounded-full w-full h-full flex items-center gap-6 pl-2">
              <div className="bg-light-gray w-[52px] h-[36px] rounded-full flex items-center justify-center">
                <Image src={Home} alt="home" width={20} height={20} />
              </div>
              <div className="text-white font-poppins text-[16px] flex gap-10">
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
                <a href="/contact">Contact me</a>
              </div>
            </div>
          </div>

          <Button className="w-[103px] h-[52px] whitespace-nowrap ml-[202px]" />
          <UserButton />
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <span className="text-white text-3xl">&times;</span>
            ) : (
              <Image src={Menu} alt="menu" width={28} height={28} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <div className="btn-gradient-border w-full h-[48px] p-[2px] rounded-full">
            <div className="bg-dark-gray rounded-full flex items-center gap-4 justify-center h-full">
              <div className="bg-light-gray w-[52px] h-[36px] rounded-full flex items-center justify-center">
                <Image src={Home} alt="home" width={20} height={20} />
              </div>
              <a href="/projects" className="text-white font-poppins text-base">
                Projects
              </a>
              <a href="/about" className="text-white font-poppins text-base">
                About
              </a>
              <a href="/contact" className="text-white font-poppins text-base">
                Contact me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

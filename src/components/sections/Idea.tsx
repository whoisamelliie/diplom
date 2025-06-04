"use client";

import Image from "next/image";
import { useState } from "react";
import Star from "@/assets/icon/star2.svg";
import Gr from "@/assets/icon/gr.svg";
import { Button } from "../ui/Button";

export const Idea = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || email || message) {
      setError("Please fill out all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email.");
      return;
    }

    setError("");
    alert("Message sent! ✅");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="w-full flex justify-center items-center py-[60px] px-4 md:px-[80px]">
      <div className="w-full max-w-[1046px] h-auto grid grid-cols-1 md:grid-cols-2 relative gap-12">
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <div className="flex items-center mb-8">
            <h1 className="font-poppins text-[24px] md:text-[32px] xl:text-[40px] text-white whitespace-nowrap">
              Have idea about project?
            </h1>
            <Image
              src={Star}
              alt="star"
              width={36}
              height={36}
              className="ml-[12px] md:ml-[29px]"
            />
          </div>

          <p className="text-sm md:text-base  text-white font-poppins mb-6 max-w-[468px]">
            Write anything here something about yourself to showcase what
            actually you doing or targeting etc.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-[468px]"
          >
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 rounded bg-box-black text-white placeholder-gray-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded bg-box-black text-white placeholder-gray-400 outline-none"
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="px-4 py-2 rounded bg-box-black text-white placeholder-gray-400 outline-none resize-none"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              text="Send message"
              className="w-[210px] h-[43px] hover:opacity-90 whitespace-nowrap mt-2"
            />
          </form>
        </div>

        <div className="relative w-full h-[392px] hidden md:block">
          <Image
            src={Gr}
            alt="graphic"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

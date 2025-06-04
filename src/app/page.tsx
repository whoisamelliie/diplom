import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { Project } from "@/components/sections/Project";
import { Client } from "@/components/sections/Client";
import { Framer } from "@/components/ui/Framer";
import { Process } from "@/components/sections/Process";
import { Idea } from "@/components/sections/Idea";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="bg-dark-black">
      <Header />
      <Hero />
      <Framer />
      <Process />
      <Project />
      <Client />
      <Idea />
      <Footer />
    </div>
  );
}

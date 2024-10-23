import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b  from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-8xl font-sans py-2 md:pt-2 relative z-150 font-extrabold tracking-tight">Uni Metrix</h1>
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b  from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-1xl md:text-2xl lg:text-5xl font-sans py-2 md:pb-5 relative z-20 font-bold tracking-tight">
      Fuel your Goals with <br /> Data and Our Expertise  
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
      we  startups and businesses, delivering an all-encompassing arsenal of cutting-edge marketing tools.
      </p>
    </BackgroundLines>
  );
}

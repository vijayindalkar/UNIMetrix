// HoveredCards.tsx

import { HoverEffect } from "./ui/card-hover-effect";

interface Project {
  title: string;
  description: string;
  link: string;
}

interface CardHoverEffectDemoProps {
  projects: Project[];  // Accepts an array of projects
}

export function CardHoverEffectDemo({ projects }: CardHoverEffectDemoProps) {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="">
        <HoverEffect items={projects} /> {/* Pass the dynamic projects data */}
      </div>
    </div>
  );
}

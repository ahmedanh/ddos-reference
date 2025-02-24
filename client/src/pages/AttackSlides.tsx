import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CommandCard } from "@/components/CommandCard";
import { SlideNavigation } from "@/components/SlideNavigation";
import { attackCommands } from "@/lib/attackData";

export default function AttackSlides() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const attack = attackCommands[currentSlide];

  return (
    <div className="min-h-screen bg-background flex flex-col p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        {t("attacks.title")}
      </h1>
      
      <div className="flex-grow flex items-center justify-center">
        <CommandCard attack={attack} />
      </div>

      <SlideNavigation 
        currentSlide={currentSlide}
        totalSlides={attackCommands.length}
        onPrevious={() => setCurrentSlide(curr => Math.max(0, curr - 1))}
        onNext={() => setCurrentSlide(curr => Math.min(attackCommands.length - 1, curr + 1))}
      />
    </div>
  );
}

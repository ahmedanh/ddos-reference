import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext
}: SlideNavigationProps) {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-center mt-8">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={currentSlide === 0}
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        {t("common.previous")}
      </Button>

      <span className="text-sm">
        {currentSlide + 1} / {totalSlides}
      </span>

      <Button
        variant="outline"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
      >
        {t("common.next")}
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
}

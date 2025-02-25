import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LanguageSelect() {
  const { t, i18n } = useTranslation();
  const [_, setLocation] = useLocation();

  const selectLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLocation("/attacks");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 space-y-6">
          <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t("languageSelect.title")}
          </h1>
          <div className="grid grid-cols-1 gap-4">
            <Button
              size="lg"
              className="w-full text-lg"
              onClick={() => selectLanguage("en")}
            >
              {t("languageSelect.english")}
            </Button>
            <Button
              size="lg"
              className="w-full text-lg"
              onClick={() => selectLanguage("ar")}
            >
              {t("languageSelect.arabic")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Globe, Book } from "lucide-react";
import { CommandCard } from "@/components/CommandCard";
import { attackCommands } from "@/lib/attackData";

const categories = [
  { id: "flood", attacks: ["udpFlood", "icmpFlood", "synFlood", "massiveSynFlood", "randomData"] },
  { id: "scanning", attacks: ["tcpFinScan", "tcpAckScan", "mtuTest"] },
  { id: "protocol", attacks: ["christmasTree", "ttlManipulation", "spoofedPort", "adjustPacketTiming"] },
  { id: "data", attacks: ["icmpExfiltration", "customPattern", "customHttpGet", "fragmentedPacket"] },
  { id: "tcpip", attacks: ["traceroute", "landAttack"] }
];

export default function AttackSlides() {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [_, setLocation] = useLocation();

  const attack = attackCommands[currentSlide];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
          {t("attacks.title")}
        </h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setLocation("/glossary")}
            className="rounded-full"
          >
            <Book className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full"
          >
            <Globe className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="w-full max-w-md mx-auto mb-8">
        <Select
          value={currentSlide.toString()}
          onValueChange={(value) => setCurrentSlide(parseInt(value))}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={t("common.selectAttack")} />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectGroup key={category.id}>
                <SelectLabel className="text-primary font-semibold">
                  {t(`glossary.categories.${category.id}.title`)}
                </SelectLabel>
                {category.attacks.map((attackKey) => {
                  const index = attackCommands.findIndex(cmd => cmd.key === attackKey);
                  return (
                    <SelectItem key={attackKey} value={index.toString()}>
                      {t(`attacks.${attackKey}.name`)}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <CommandCard attack={attack} />
        </motion.div>
      </div>
    </div>
  );
}
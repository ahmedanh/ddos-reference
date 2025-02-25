import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Glossary() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
        {t("glossary.title")}
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto space-y-8"
      >
        {["flood", "scanning", "protocol", "data", "tcpip"].map((category) => (
          <motion.div key={category} variants={item}>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {t(`glossary.categories.${category}.title`)}
                </CardTitle>
                <p className="text-card-foreground/80 mt-2">
                  {t(`glossary.categories.${category}.description`)}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {t(`glossary.categories.${category}.attacks`, { returnObjects: true }).map((attack: string) => (
                    <div key={attack} className="border-l-2 border-primary/30 pl-4">
                      <h3 className="font-semibold text-primary">
                        {t(`attacks.${attack}.name`)}
                      </h3>
                      <p className="text-sm text-card-foreground/70 mt-1">
                        {t(`attacks.${attack}.explanation`)}
                      </p>
                      <p className="text-sm text-card-foreground/70 mt-1">
                        {t(`attacks.${attack}.purpose`)}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

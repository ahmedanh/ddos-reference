import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CommandCardProps {
  attack: {
    key: string;
    command: string;
  };
}

export function CommandCard({ attack }: CommandCardProps) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    await navigator.clipboard.writeText(attack.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-3xl bg-card/50 backdrop-blur-sm border-primary/10">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {t(`attacks.${attack.key}.name`)}
          </motion.span>
          <Button
            variant="outline"
            size="sm"
            onClick={copyCommand}
            className="ml-2 transition-colors hover:bg-primary/20"
          >
            <motion.div
              animate={copied ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.2 }}
            >
              {copied ? (
                <CheckCircle className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </motion.div>
            <span className="ml-2">
              {t(copied ? "common.copied" : "common.copy")}
            </span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <SyntaxHighlighter
            language="bash"
            style={vscDarkPlus}
            className="!m-0"
          >
            {attack.command}
          </SyntaxHighlighter>
        </div>

        <div className="space-y-4 text-card-foreground/90">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-primary mb-2">{t("common.explanation")}</h3>
            <p className="text-sm leading-relaxed">{t(`attacks.${attack.key}.explanation`)}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold text-primary mb-2">{t("common.purpose")}</h3>
            <p className="text-sm leading-relaxed">{t(`attacks.${attack.key}.purpose`)}</p>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}
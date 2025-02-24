import { useState } from "react";
import { useTranslation } from "react-i18next";
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
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{t(`attacks.${attack.key}.name`)}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={copyCommand}
            className="ml-2"
          >
            {copied ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            <span className="ml-2">
              {t(copied ? "common.copied" : "common.copy")}
            </span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <SyntaxHighlighter
          language="bash"
          style={vscDarkPlus}
          className="rounded-md"
        >
          {attack.command}
        </SyntaxHighlighter>
        
        <div className="space-y-2">
          <h3 className="font-semibold">{t("common.explanation")}</h3>
          <p>{t(`attacks.${attack.key}.explanation`)}</p>
          
          <h3 className="font-semibold mt-4">{t("common.purpose")}</h3>
          <p>{t(`attacks.${attack.key}.purpose`)}</p>
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import { useTranslation } from "react-i18next";
import {
  Cpu,
  Bot,
  Shield,
  Zap,
  Users,
  Infinity,
  Code2,
  Workflow,
  Package,
  Puzzle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="h-5 w-5 text-primary" />,
  Cpu: <Cpu className="h-5 w-5 text-primary" />,
  Puzzle: <Puzzle className="h-5 w-5 text-primary" />,
  Workflow: <Workflow className="h-5 w-5 text-primary" />,
  Users: <Users className="h-5 w-5 text-primary" />,
  Package: <Package className="h-5 w-5 text-primary" />,
};

const principleKeys = [
  { icon: "Bot" },
  { icon: "Cpu" },
  { icon: "Puzzle" },
  { icon: "Workflow" },
  { icon: "Users" },
  { icon: "Package" },
];

export function PhilosophySection() {
  const { t } = useTranslation();
  const p = t("philosophy.principles", { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section id="philosophy" className="section-padding relative">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="section-container relative">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge variant="neon" className="gap-2 px-4 py-1.5">
              <Code2 className="h-3.5 w-3.5" />
              {t("philosophy.badge")}
            </Badge>
          </div>
          <h2 className="section-title mb-4">{t("philosophy.title")}</h2>
          <p className="section-subtitle mx-auto">{t("philosophy.desc")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {p.map((principle, i) => (
            <div
              key={principle.title}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {iconMap[principleKeys[i]?.icon || "Bot"]}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useTranslation } from "react-i18next";
import {
  Code2,
  Database,
  Bot,
  Cpu,
  Globe,
  Blocks,
  BarChart3,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const techStack = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "TypeScript", "JavaScript"],
  },
  {
    category: "Frameworks",
    icon: Blocks,
    items: ["Next.js", "React", "FastAPI", "Tailwind CSS", "Vite"],
  },
  {
    category: "Bot Frameworks",
    icon: Bot,
    items: ["python-telegram-bot", "Aiogram"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["PostgreSQL", "SQLite", "SQLAlchemy", "Drizzle ORM", "Prisma", "Dexie.js"],
  },
  {
    category: "AI & ML",
    icon: Cpu,
    items: ["DeepSeek AI", "PaddleOCR"],
  },
  {
    category: "Infra & Tools",
    icon: Globe,
    items: ["Docker", "uvicorn", "APScheduler", "Pydantic", "Alembic", "Zod", "Zustand", "Framer Motion", "Radix UI"],
  },
  {
    category: "Data & Analytics",
    icon: BarChart3,
    items: ["Apache ECharts", "Recharts", "TanStack Query", "React Router", "MapLibre GL", "Lucide"],
  },
  {
    category: "HTTP & Auth",
    icon: Shield,
    items: ["Axios", "httpx", "Cloudinary", "Clerk", "NextAuth"],
  },
];

export function TechStackSection() {
  const { t } = useTranslation();
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant="cyan" className="gap-2 px-4 py-1.5">
              <Code2 className="h-3.5 w-3.5" />
              {t("techStack.badge")}
            </Badge>
          </div>
          <h2 className="section-title mb-4">{t("techStack.title")}</h2>
          <p className="section-subtitle mx-auto">{t("techStack.desc")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs font-mono rounded-md border border-border/40 bg-background/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

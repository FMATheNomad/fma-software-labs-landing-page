"use client";

import { useTranslation } from "react-i18next";
import { Briefcase, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Worksync",
    desc: "AI-powered workforce management platform built for an Indonesian company. GPS attendance, AI daily reports, expense tracking, and real-time dashboard with interactive maps. Built from 0 to production.",
    tech: ["React", "TypeScript", "FastAPI", "DeepSeek AI"],
  },
];

export function ClientProjectsSection() {
  const { t } = useTranslation();
  return (
    <section className="section-padding pt-0 relative">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Briefcase className="h-4 w-4 text-primary" />
          </div>
          <h2 className="text-xl font-bold">Client Project</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div key={p.name} className="p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">{p.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded border border-border/40 bg-background/50 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm" disabled className="gap-2 text-xs">
                <Github className="h-3.5 w-3.5" />
                Private Repo
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

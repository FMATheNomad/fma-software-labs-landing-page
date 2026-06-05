"use client";

import { Briefcase, ExternalLink, Github, CheckCircle2, MapPin, Camera, FileText, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const clientProjects = [
  {
    id: "worksync",
    name: "Worksync",
    tagline: "AI-Powered Workforce Management SaaS",
    description:
      "A production-ready workforce management platform for Indonesian companies. GPS attendance tracking, AI-powered daily reports, expense management, and real-time admin monitoring dashboard with interactive maps and AI analytics.",
    status: "in development",
    client: "Internal Product — FMA Software Labs",
    github: "https://github.com/FMATheNomad/worksync-app.git",
    features: [
      "GPS attendance check-in/out with selfie & reverse geocoding",
      "AI-powered daily report generation (DeepSeek)",
      "Expense tracking with receipt photo uploads",
      "Real-time employee location map (MapLibre GL)",
      "Admin dashboard with charts & AI analytics",
      "Polar.sh subscription billing ($0/$9/$29 per month)",
    ],
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "DeepSeek AI", "MapLibre GL", "Docker"],
  },
];

const statusConfig: Record<string, { label: string; variant: "neon" | "cyan" | "secondary" }> = {
  "in development": { label: "In Development", variant: "cyan" },
  live: { label: "Live", variant: "neon" },
  completed: { label: "Completed", variant: "secondary" },
};

const featureIcons = [MapPin, Camera, FileText, BarChart3, CheckCircle2, CheckCircle2];

export function ClientProjectsSection() {
  return (
    <section id="clients" className="section-padding relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant="neon" className="gap-2 px-4 py-1.5">
              <Briefcase className="h-3.5 w-3.5" />
              Client Project
            </Badge>
          </div>
          <h2 className="section-title mb-4">Client Work</h2>
          <p className="section-subtitle mx-auto">
            Bespoke software built for businesses and organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {clientProjects.map((project) => {
            const status = statusConfig[project.status] || statusConfig["in development"];
            return (
              <div
                key={project.id}
                className="p-6 sm:p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold">{project.name}</h3>
                      <Badge variant={status.variant} className="text-[10px]">
                        {status.label}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.tagline}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {project.features.map((feature, i) => {
                    const Icon = featureIcons[i] || CheckCircle2;
                    return (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Icon className="h-4 w-4 shrink-0 mt-0.5 text-neon-green/70" />
                        <span>{feature}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <Button variant="outline" disabled className="gap-2">
                    <Github className="h-4 w-4" />
                    View on GitHub
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                  <span className="text-[10px] text-muted-foreground/50 font-mono">
                    Private repository — contact for access
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

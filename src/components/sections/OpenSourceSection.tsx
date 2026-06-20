"use client";

import { useTranslation } from "react-i18next";
import { Sparkles, Github, Star, ExternalLink, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    name: "Deep Research Skill",
    tagline: "Browse hundreds of sources in parallel — like DeepSeek, but inside your AI coding agent.",
    desc: "A skill that gives your AI agent the power to search, fetch, and synthesize information from hundreds of web pages in parallel. Completely free, no API keys, no accounts, no limits. One prompt → agent autonomously searches, reads 100+ sources, and returns a synthesized report with citations.",
    repo: "https://github.com/FMATheNomad/deep-research-skill",
    install: `curl -fsSL https://raw.githubusercontent.com/FMATheNomad/deep-research-skill/main/skills/deep-research/SKILL.md -o ~/.agents/skills/deep-research/SKILL.md`,
    features: [
      "Multi-query search from different angles",
      "Parallel fetching of 100+ pages simultaneously",
      "AI-powered synthesis with structured output",
      "Research templates: comparison, technical, market",
      "Compatible with OpenCode, Claude Code, Cursor, Windsurf",
    ],
    stars: "New",
    license: "MIT",
    skills: "https://www.skills.sh/fmathenomad/deep-research-skill/deep-research",
  },
  {
    name: "Railway Deploy Skill",
    tagline: "Stop guessing why your Railway deploy failed. Let your AI agent diagnose & fix it automatically.",
    desc: "A skill that gives your AI agent autonomous diagnostic and fix capability for Railway deployment crashes — OOM kills, healthcheck failures, database connection errors, and more. One command → agent collects logs, analyzes configs, matches 8 failure patterns, and applies the fix.",
    repo: "https://github.com/FMATheNomad/railway-deploy-skill",
    install: `curl -fsSL https://raw.githubusercontent.com/FMATheNomad/railway-deploy-skill/main/skills/railway-deploy/SKILL.md -o ~/.agents/skills/railway-deploy/SKILL.md`,
    features: [
      "8 failure patterns: OOM, port, DB, healthcheck, deps, monorepo",
      "Automated log collection + config analysis",
      "One-command fix deployment",
      "Verified Railway CLI commands",
      "Stack-specific: Next.js, FastAPI, PostgreSQL, Docker",
    ],
    stars: "New",
    license: "MIT",
    skills: "https://skills.sh/FMATheNomad/railway-deploy-skill/railway-deploy",
  },
];

export function OpenSourceSection() {
  const { t } = useTranslation();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant="neon" className="gap-2 px-4 py-1.5">
              <Github className="h-3.5 w-3.5" />
              Open Source
            </Badge>
          </div>
          <h2 className="section-title mb-4">Open Source Projects</h2>
          <p className="section-subtitle mx-auto">
            Free tools for the developer community. Built with love by a solo founder. MIT licensed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="p-6 sm:p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <Badge variant="secondary" className="text-[10px]">
                      {project.license}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {project.desc}
              </p>

              <div className="space-y-2 mb-6">
                {project.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 shrink-0 mt-0.5 text-neon-green/70" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
                <Button className="gap-2 flex-[1.5]" asChild>
                  <Link href={project.repo} target="_blank">
                    <Github className="h-4 w-4" />
                    View on GitHub
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </Button>
                <div className="flex gap-2 flex-1">
                  <Button variant="outline" className="gap-2 flex-1" asChild>
                    <Link href={project.skills} target="_blank">
                      <Download className="h-4 w-4" />
                      skills.sh
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="gap-2 flex-1" asChild>
                    <Link href={project.repo} target="_blank">
                      <Download className="h-4 w-4" />
                      Install
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

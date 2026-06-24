"use client";

import { useTranslation } from "react-i18next";
import { Sparkles, Github, ExternalLink, Wrench, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ossProjects = [
  {
    name: "AIVerify",
    desc: "CLI tool that detects AI hallucinations in code — invented APIs, hardcoded credentials, infinite loops — before they reach production. 15 detection rules with tree-sitter AST parsing.",
    repo: "https://github.com/FMATheNomad/aiverify",
  },
  {
    name: "CodeMap",
    desc: "VS Code extension that generates an interactive D3.js dependency graph of any codebase. Find circular deps, spot orphan files, navigate visually.",
    repo: "https://github.com/FMATheNomad/codemap",
  },
  {
    name: "ContextPack",
    desc: "CLI that packages only relevant files from your codebase as AI-ready context (plain, XML, JSON) using dependency-graph scoring.",
    repo: "https://github.com/FMATheNomad/contextpack",
  },
  {
    name: "DepCheck AI",
    desc: "CLI that scans npm, PyPI, and crates.io dependencies and produces a health score (0-100) with actionable replacement recommendations.",
    repo: "https://github.com/FMATheNomad/depcheckai",
  },
  {
    name: "SkillSmith",
    desc: "CLI to write AI agent skills once (canonical SKILL.md format) and export to Claude Code, Cursor, or OpenCode formats.",
    repo: "https://github.com/FMATheNomad/skillsmith",
  },
];

const skills = [
  {
    name: "Deep Research Skill",
    desc: "Parallel web research inside your AI coding agent. Search & fetch 100+ pages simultaneously. Free, no API keys.",
    repo: "https://github.com/FMATheNomad/deep-research-skill",
    skills: "https://www.skills.sh/fmathenomad/deep-research-skill/deep-research",
  },
  {
    name: "Railway Deploy Skill",
    desc: "AI agent autonomously diagnoses and fixes Railway deployment crashes — OOM kills, healthcheck failures, DB errors, and more.",
    repo: "https://github.com/FMATheNomad/railway-deploy-skill",
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
            Free developer tools. MIT licensed. Built by a solo founder.
          </p>
        </div>

        {/* Developer Tools */}
        <div className="flex items-center gap-2 mb-6">
          <Wrench className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Developer Tools</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {ossProjects.map((p) => (
            <div key={p.name} className="p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-all">
              <h4 className="font-semibold text-sm mb-2">{p.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
              <Button variant="outline" size="sm" className="gap-2 text-xs" asChild>
                <Link href={p.repo} target="_blank">
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Agent Skills */}
        <div className="flex items-center gap-2 mb-6">
          <Bot className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Agent Skills</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.name} className="p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-all">
              <h4 className="font-semibold mb-2">{s.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2 text-xs" asChild>
                  <Link href={s.repo} target="_blank">
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="gap-2 text-xs" asChild>
                  <Link href={s.skills} target="_blank">
                    <Wrench className="h-3.5 w-3.5" />
                    skills.sh
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

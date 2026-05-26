"use client";

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

const principles = [
  {
    icon: Bot,
    title: "AI-Native by Design",
    description:
      "Every product we build is infused with artificial intelligence from day one. Not as an afterthought, but as a core architectural principle — from SaaS bots to developer toolkits.",
  },
  {
    icon: Cpu,
    title: "Micro-First Architecture",
    description:
      "We believe in small, focused, and powerful products. Micro-SaaS, Micro-GaaS, prompt packs, boilerplates, and API services — all solving real problems without bloat.",
  },
  {
    icon: Puzzle,
    title: "Developer-Focused Tooling",
    description:
      "Beyond building our own products, we create toolkits and boilerplates that help other developers ship faster. AI debug prompts, starter templates, and reusable components.",
  },
  {
    icon: Workflow,
    title: "Multi-Product Ecosystem",
    description:
      "From live Telegram bots to digital prompt products and upcoming API services — we build across multiple categories, all under one ecosystem.",
  },
  {
    icon: Users,
    title: "Social by Default",
    description:
      "Every product has a social layer. We build ecosystems where users interact, compete, and collaborate — whether through Telegram bots or developer communities.",
  },
  {
    icon: Package,
    title: "Ship Fast, Iterate Faster",
    description:
      "Products are never finished. We ship fast, iterate constantly, and evolve with our users. Digital products get updated, bots get new features, boilerplates get refined.",
  },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="section-padding relative">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="section-container relative">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge variant="neon" className="gap-2 px-4 py-1.5">
              <Code2 className="h-3.5 w-3.5" />
              Philosophy
            </Badge>
          </div>
          <h2 className="section-title mb-4">How We Build</h2>
          <p className="section-subtitle mx-auto">
            Engineering principles that guide every line of code, every product, and every toolkit we ship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, i) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.title}
                className="group relative p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Bot,
  Puzzle,
  Code2,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    icon: Bot,
    label: "SaaS & GaaS",
    count: "4 Live Products",
    desc: "Telegram bots & web-based AI tools",
  },
  {
    icon: Puzzle,
    label: "Prompt Products",
    count: "5 Toolkits",
    desc: "AI debug toolkits for developers",
  },
  {
    icon: Code2,
    label: "Boilerplate",
    count: "Coming Soon",
    desc: "Micro-SaaS & Micro-GaaS starter kits",
  },
  {
    icon: Package,
    label: "Software API",
    count: "Coming Soon",
    desc: "Ready-to-use API services",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="section-padding relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant="cyan" className="gap-2 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              Ecosystem
            </Badge>
          </div>
          <h2 className="section-title mb-4">Our Products</h2>
          <p className="section-subtitle mx-auto">
            From live SaaS/GaaS bots to developer toolkits and upcoming
            boilerplates — explore the full FMA ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.label}
                className="p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{cat.label}</h3>
                <div className="text-xs text-neon-green/80 font-mono mb-1">
                  {cat.count}
                </div>
                <p className="text-xs text-muted-foreground">{cat.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="xl" className="gap-3" asChild>
            <Link href="/products">
              Explore All Products
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

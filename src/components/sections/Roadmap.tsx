"use client";

import { CheckCircle2, Circle, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { roadmap } from "@/lib/constants";
import { cn } from "@/lib/utils";

const statusIcon = {
  completed: <CheckCircle2 className="h-5 w-5 text-neon-green" />,
  "in-progress": <Clock className="h-5 w-5 text-cyan-400 animate-pulse" />,
  planned: <Circle className="h-5 w-5 text-muted-foreground" />,
};

const statusBadge: Record<string, { label: string; variant: "neon" | "cyan" | "secondary" }> = {
  completed: { label: "Shipped", variant: "neon" },
  "in-progress": { label: "In Progress", variant: "cyan" },
  planned: { label: "Planned", variant: "secondary" },
};

export function RoadmapSection() {
  return (
    <section id="roadmap" className="section-padding relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="text-center mb-16">
          <Badge variant="neon" className="mb-4 px-4 py-1.5">
            Roadmap
          </Badge>
          <h2 className="section-title mb-4">What&apos;s Next</h2>
          <p className="section-subtitle mx-auto">
            Our product roadmap. We ship fast and iterate constantly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {roadmap.map((item, i) => {
                const badge = statusBadge[item.status];
                return (
                  <div key={item.title} className="relative pl-14 sm:pl-16">
                    {/* Timeline dot */}
                    <div
                      className={cn(
                        "absolute left-4 sm:left-6 w-5 h-5 -translate-x-1/2 rounded-full border-2 bg-background flex items-center justify-center",
                        item.status === "completed"
                          ? "border-neon-green"
                          : item.status === "in-progress"
                          ? "border-cyan-400"
                          : "border-border"
                      )}
                    >
                      <div
                        className={cn(
                          "w-2 h-2 rounded-full",
                          item.status === "completed"
                            ? "bg-neon-green"
                            : item.status === "in-progress"
                            ? "bg-cyan-400"
                            : "bg-muted-foreground"
                        )}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-border transition-colors">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <time className="text-xs text-muted-foreground font-mono">
                            {item.date}
                          </time>
                          <h3 className="font-semibold mt-1">{item.title}</h3>
                        </div>
                        <Badge variant={badge.variant} className="shrink-0">
                          {badge.label}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-4">
              Want to influence what we build next?
            </p>
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-muted-foreground">Share your feedback</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <a
                href="#contact"
                className="text-primary hover:underline font-medium"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

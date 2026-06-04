"use client";

import { Mail, Construction } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="section-padding relative">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="section-container relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="cyan" className="gap-2 px-4 py-1.5">
              <Mail className="h-3.5 w-3.5" />
              Stay Updated
            </Badge>
          </div>

          <h2 className="section-title mb-4">Join the Lab</h2>
          <p className="section-subtitle mx-auto mb-8">
            Get early access to new products, feature updates, and behind-the-scenes
            engineering insights. No spam — just pure tech.
          </p>

          <div className="flex flex-col items-center gap-3 p-8 rounded-xl border border-border/50 bg-card/20">
            <Construction className="h-8 w-8 text-muted-foreground/40" />
            <p className="text-sm text-muted-foreground">
              Newsletter form in development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

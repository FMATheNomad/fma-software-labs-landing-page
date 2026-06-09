"use client";

import { useTranslation } from "react-i18next";
import { Mail, Construction } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function NewsletterSection() {
  const { t } = useTranslation();
  return (
    <section id="newsletter" className="section-padding relative">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="section-container relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="cyan" className="gap-2 px-4 py-1.5">
              <Mail className="h-3.5 w-3.5" />
              {t("newsletter.badge")}
            </Badge>
          </div>

          <h2 className="section-title mb-4">{t("newsletter.title")}</h2>
          <p className="section-subtitle mx-auto mb-8">{t("newsletter.desc")}</p>

          <div className="flex flex-col items-center gap-3 p-8 rounded-xl border border-border/50 bg-card/20">
            <Construction className="h-8 w-8 text-muted-foreground/40" />
            <p className="text-sm text-muted-foreground">{t("newsletter.devNotice")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

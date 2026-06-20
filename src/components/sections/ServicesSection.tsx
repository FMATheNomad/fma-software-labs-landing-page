"use client";

import { useTranslation } from "react-i18next";
import { Sparkles, Bot, MessageCircle, Zap, Shield, HeadphonesIcon, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle className="h-5 w-5 text-primary" />,
  Zap: <Zap className="h-5 w-5 text-primary" />,
  BarChart3: <BarChart3 className="h-5 w-5 text-primary" />,
  Shield: <Shield className="h-5 w-5 text-primary" />,
  Bot: <Bot className="h-5 w-5 text-primary" />,
  HeadphonesIcon: <HeadphonesIcon className="h-5 w-5 text-primary" />,
};

const featureIcons = ["MessageCircle", "Zap", "BarChart3", "Shield", "Bot", "HeadphonesIcon"];

export function ServicesSection() {
  const { t } = useTranslation();
  const features = t("services.features", { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant="neon" className="gap-2 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              {t("services.badge")}
            </Badge>
          </div>
          <h2 className="section-title mb-4">{t("services.title")}</h2>
          <p className="section-subtitle mx-auto">{t("services.desc")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((item, i) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {iconMap[featureIcons[i]] || <Bot className="h-5 w-5 text-primary" />}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm text-center">
          <h3 className="text-xl font-bold mb-2">{t("services.pricing.title")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="p-5 rounded-lg border border-border/40 bg-background/50">
              <div className="text-xs text-muted-foreground font-mono mb-1">{t("services.pricing.oneTime")}</div>
              <div className="text-3xl font-bold text-neon-green">Rp 5jt</div>
              <div className="text-xs text-muted-foreground mt-2">{t("services.pricing.setup")}</div>
            </div>
            <div className="p-5 rounded-lg border border-neon-green/30 bg-neon-green/5">
              <div className="text-xs text-muted-foreground font-mono mb-1">{t("services.pricing.monthly")}</div>
              <div className="text-3xl font-bold text-neon-green">Rp 500rb</div>
              <div className="text-xs text-muted-foreground mt-2">{t("services.pricing.perMonth")}</div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">{t("services.pricing.trial")}</p>
          <Button size="lg" className="mt-6 gap-2" asChild>
            <Link href="https://wa.me/6285179626821?text=Halo%2C%20saya%20tertarik%20dengan%20AI%20WhatsApp%20Customer%20Service">
              <MessageCircle className="h-5 w-5" />
              {t("services.pricing.cta")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

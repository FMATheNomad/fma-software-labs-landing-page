"use client";

import { useTranslation } from "react-i18next";
import { Sparkles, Bot, MessageCircle, Zap, Shield, HeadphonesIcon, BarChart3, Building2, Stethoscope, GraduationCap, Store } from "lucide-react";
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

        {/* Pricing Tiers */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-center mb-8">{t("services.pricing.title")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                name: t("services.pricing.starterName"),
                setup: "Rp 3jt",
                retainer: "Rp 1jt",
                target: t("services.pricing.starterTarget"),
                border: "border-border/40",
                bg: "bg-background/50",
              },
              {
                name: t("services.pricing.growthName"),
                setup: "Rp 5jt",
                retainer: "Rp 1.5jt",
                target: t("services.pricing.growthTarget"),
                border: "border-neon-green/30",
                bg: "bg-neon-green/5",
                popular: true,
              },
              {
                name: t("services.pricing.enterpriseName"),
                setup: "Rp 10jt",
                retainer: "Rp 2.5jt",
                target: t("services.pricing.enterpriseTarget"),
                border: "border-border/40",
                bg: "bg-background/50",
              },
            ].map((tier) => (
              <div
                key={tier.setup}
                className={`p-5 rounded-xl border ${tier.border} ${tier.bg} text-center relative`}
              >
                {(tier as any).popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-neon-green text-black text-[10px] font-mono rounded-full">
                    Recommended
                  </div>
                )}
                <h4 className="font-semibold mb-3">{tier.name}</h4>
                <div className="text-2xl font-bold text-neon-green">{tier.setup}</div>
                <div className="text-xs text-muted-foreground mb-1">{t("services.pricing.setupFee")}</div>
                <div className="text-lg font-semibold mt-3">+ {tier.retainer}</div>
                <div className="text-xs text-muted-foreground mb-3">{t("services.pricing.perMonth")}</div>
                <div className="text-[10px] text-muted-foreground/60 mt-2">{tier.target}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">{t("services.pricing.note")}</p>
        </div>

        {/* Target Verticals */}
        <div className="max-w-3xl mx-auto mb-12 p-6 rounded-xl border border-border/50 bg-card/20">
          <h3 className="text-center font-semibold mb-6">{t("services.verticals.title")}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Stethoscope, label: t("services.verticals.clinic") },
              { icon: Building2, label: t("services.verticals.property") },
              { icon: Store, label: t("services.verticals.franchise") },
              { icon: GraduationCap, label: t("services.verticals.education") },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.label} className="text-center p-3 rounded-lg bg-background/50">
                  <Icon className="h-6 w-6 mx-auto mb-2 text-primary/70" />
                  <div className="text-xs font-medium">{v.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="gap-2" asChild>
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

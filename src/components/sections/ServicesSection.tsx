"use client";

import { useTranslation } from "react-i18next";
import { Sparkles, Bot, MessageCircle, Zap, Shield, HeadphonesIcon, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServicesSection() {
  const { t } = useTranslation();

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
              AI Services
            </Badge>
          </div>
          <h2 className="section-title mb-4">AI WhatsApp Customer Service</h2>
          <p className="section-subtitle mx-auto">
            AI-powered auto-reply for your business WhatsApp. 24/7 customer service without hiring extra staff.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: MessageCircle,
              title: "Auto Reply 24/7",
              desc: "Instantly answers stock checks, prices, operating hours, location, and FAQs — even at 3 AM.",
            },
            {
              icon: Zap,
              title: "Human Handoff",
              desc: "Complex questions smoothly forwarded to you. You only handle what matters.",
            },
            {
              icon: BarChart3,
              title: "Dashboard Analytics",
              desc: "See chat history, response rates, and common questions. Know your customers better.",
            },
            {
              icon: Shield,
              title: "Easy Setup",
              desc: "Ready in 2-3 days. No complex integration. Just connect your WhatsApp number.",
            },
            {
              icon: Bot,
              title: "AI-Powered",
              desc: "Powered by GPT-4o & Claude. Understands Bahasa Indonesia naturally.",
            },
            {
              icon: HeadphonesIcon,
              title: "Ongoing Support",
              desc: "Free maintenance included. We monitor and improve the system continuously.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm text-center">
          <h3 className="text-xl font-bold mb-2">Pricing</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="p-5 rounded-lg border border-border/40 bg-background/50">
              <div className="text-xs text-muted-foreground font-mono mb-1">One-Time</div>
              <div className="text-3xl font-bold text-neon-green">Rp 5jt</div>
              <div className="text-xs text-muted-foreground mt-2">Setup + 1 month maintenance</div>
            </div>
            <div className="p-5 rounded-lg border border-neon-green/30 bg-neon-green/5">
              <div className="text-xs text-muted-foreground font-mono mb-1">Monthly</div>
              <div className="text-3xl font-bold text-neon-green">Rp 500rb</div>
              <div className="text-xs text-muted-foreground mt-2">Per month, no long-term contract</div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">7-day free trial available. No risk.</p>
          <Button size="lg" className="mt-6 gap-2" asChild>
            <Link href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20AI%20WhatsApp%20Customer%20Service">
              <MessageCircle className="h-5 w-5" />
              Contact via WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

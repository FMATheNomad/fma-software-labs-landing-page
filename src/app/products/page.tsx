"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Bot,
  Gamepad2,
  Landmark,
  Sparkles,
  ShoppingCart,
  Puzzle,
  Code2,
  Package,
  Cpu,
  Globe,
  Download,
  Star,
  MessageCircle,
  Zap,
  Shield,
  HeadphonesIcon,
  BarChart3,
  Stethoscope,
  Building2,
  GraduationCap,
  Store,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products, promptProducts } from "@/lib/constants";

const categoryIcons: Record<string, React.ReactNode> = {
  game: <Gamepad2 className="h-4 w-4" />,
  finance: <Landmark className="h-4 w-4" />,
  ai: <Cpu className="h-4 w-4" />,
};

const statusConfig: Record<string, { label: string; variant: "neon" | "cyan" | "success" | "secondary" }> = {
  live: { label: "Live", variant: "neon" },
  live_mvp: { label: "Live MVP", variant: "neon" },
  dev: { label: "In Development", variant: "cyan" },
  beta: { label: "Beta", variant: "cyan" },
  park: { label: "Parked", variant: "secondary" },
  coming_soon: { label: "Coming Soon", variant: "success" },
};

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const status = statusConfig[product.status];

  return (
    <div id={product.slug} className="product-card animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
      <div className="relative p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden ring-1 ring-border bg-card">
              <Image
                src={product.logoPath}
                alt={`${product.name} logo`}
                fill
                className="object-contain p-1"
                sizes="56px"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl sm:text-2xl font-bold">{product.name}</h3>
                <Badge variant={status.variant} className="text-[10px]">
                  {status.label}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{product.tagline}</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
            {categoryIcons[product.category]}
            <span className="capitalize">{product.category}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {product.features.slice(0, 6).map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-neon-green/70" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-border/50">
          {product.status === "park" ? (
            <div className="flex items-center gap-3 flex-1">
              <Button variant="outline" disabled className="gap-2 opacity-50 cursor-not-allowed">
                <Github className="h-4 w-4" />
                Private Repo
              </Button>
              <span className="text-[10px] text-muted-foreground/50 font-mono">
                Private repository — contact for access
              </span>
            </div>
          ) : product.status === "dev" ? (
            <Button variant="outline" disabled className="gap-2 flex-1 opacity-50 cursor-not-allowed">
              <Bot className="h-4 w-4" />
              In Development
            </Button>
          ) : (
            <Button className="gap-2 flex-1" asChild>
              <Link href={product.cta.url} target="_blank">
                <Bot className="h-4 w-4" />
                {product.cta.text}
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function PromptProductCard({ product }: { product: typeof promptProducts[0] }) {
  return (
    <div className="animate-fade-in-up p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-all">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Puzzle className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-xs text-muted-foreground mt-1">{product.languages.join(", ")}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {product.description}
      </p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold text-neon-green">{product.price}</span>
      </div>
      <div className="flex flex-col gap-2">
        <Button className="gap-2 w-full" asChild>
          <Link href={product.links.gumroad} target="_blank">
            <ShoppingCart className="h-4 w-4" />
            Buy on Gumroad
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </Button>
        <Button variant="outline" className="gap-2 w-full" asChild>
          <Link href={product.links.payhip} target="_blank">
            <ShoppingCart className="h-4 w-4" />
            Buy on Payhip
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const { t } = useTranslation();
  return (
    <div className="pt-24 sm:pt-28">
      {/* Header */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="section-container relative text-center">
          <div className="flex justify-center mb-4">
            <Badge variant="neon" className="gap-2 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              {t("productsPage.title")}
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Everything We <span className="text-gradient">Build</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("productsPage.desc")}
          </p>
        </div>
      </section>

      {/* SaaS & GaaS Products */}
      <section className="section-padding pt-0 relative">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">{t("products.categories.saas")}</h2>
            <Badge variant="neon" className="text-xs">Live</Badge>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Products */}
      <section id="prompts" className="section-padding relative">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="section-container relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Puzzle className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Prompt Products</h2>
            <Badge variant="cyan" className="text-xs">Digital Download</Badge>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Premium AI prompt collections for developers. Each toolkit contains 50 battle-tested prompts optimized for ChatGPT, Claude, Gemini, and DeepSeek.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promptProducts.map((product) => (
              <PromptProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Boilerplate (Coming Soon) */}
      <section className="section-padding pt-0 relative">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code2 className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Boilerplate Micro-SaaS & Micro-GaaS</h2>
            <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Ready-to-ship starter templates for Telegram bots, FastAPI backends, and AI-powered micro-services. Skip the setup, start building.
          </p>
          <div className="p-12 rounded-xl border border-border/50 bg-card/20 text-center">
            <Code2 className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Under Development</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Boilerplate templates for Telegram mini-apps, AI micro-services, and SaaS backends are in the works. Join the newsletter to get early access.
            </p>
          </div>
        </div>
      </section>

      {/* Software API (Coming Soon) */}
      <section className="section-padding pt-0 relative">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Package className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Software API</h2>
            <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Ready-to-use API services for developers. Deploy via RapidAPI and integrate in minutes.
          </p>
          <div className="p-12 rounded-xl border border-border/50 bg-card/20 text-center">
            <Globe className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Coming Soon on RapidAPI</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              We&apos;re building API services for image processing, data validation, currency conversion, and AI-powered content moderation. Stay tuned.
            </p>
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="section-padding pt-0 relative">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">AI WhatsApp Automation</h2>
            <Badge variant="neon" className="text-xs">Available</Badge>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Done-for-you WhatsApp AI chatbot for clinics, property, franchises, and education. Setup fee + monthly retainer.
          </p>
          <div className="p-8 rounded-xl border border-border/50 bg-card/20 text-center">
            <MessageCircle className="h-10 w-10 text-neon-green/60 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">AI Customer Service WhatsApp</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-6 mb-6">
              <div className="p-4 rounded-lg border border-border/40 bg-background/40">
                <div className="text-xs text-muted-foreground">Starter</div>
                <div className="text-lg font-bold text-neon-green mt-1">Rp 3jt</div>
                <div className="text-xs text-muted-foreground">+ Rp 1jt/bln</div>
              </div>
              <div className="p-4 rounded-lg border border-neon-green/30 bg-neon-green/5">
                <div className="text-xs text-muted-foreground">Growth</div>
                <div className="text-lg font-bold text-neon-green mt-1">Rp 5jt</div>
                <div className="text-xs text-muted-foreground">+ Rp 1.5jt/bln</div>
              </div>
              <div className="p-4 rounded-lg border border-border/40 bg-background/40">
                <div className="text-xs text-muted-foreground">Enterprise</div>
                <div className="text-lg font-bold text-neon-green mt-1">Rp 10jt</div>
                <div className="text-xs text-muted-foreground">+ Rp 2.5jt/bln</div>
              </div>
            </div>
            <Button className="gap-2" asChild>
              <Link href="https://wa.me/6285179626821?text=Halo%2C%20saya%20tertarik%20dengan%20AI%20WhatsApp%20Customer%20Service" target="_blank">
                <MessageCircle className="h-4 w-4" />
                Contact via WhatsApp
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="section-padding pt-0 relative">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Github className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Open Source</h2>
            <Badge variant="neon" className="text-xs">MIT</Badge>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Free tools for the developer community. Open source, MIT licensed.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                name: "Deep Research Skill",
                desc: "Browse hundreds of sources in parallel inside your AI coding agent. No API keys, no limits, completely free.",
                repo: "https://github.com/FMATheNomad/deep-research-skill",
                skills: "https://www.skills.sh/fmathenomad/deep-research-skill/deep-research",
              },
              {
                name: "Railway Deploy Skill",
                desc: "AI agent that autonomously diagnoses and fixes Railway deployment crashes — OOM, healthcheck, DB errors, and more.",
                repo: "https://github.com/FMATheNomad/railway-deploy-skill",
                skills: "https://skills.sh/FMATheNomad/railway-deploy-skill/railway-deploy",
              },
            ].map((oss) => (
              <div key={oss.name} className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-4 w-4 text-neon-green/70" />
                  <h3 className="font-semibold">{oss.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{oss.desc}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <Link href={oss.repo} target="_blank">
                      <Github className="h-4 w-4" />
                      GitHub
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <Link href={oss.skills} target="_blank">
                      <Download className="h-4 w-4" />
                      skills.sh
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

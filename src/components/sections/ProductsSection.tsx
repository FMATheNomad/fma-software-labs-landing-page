"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  ChevronRight,
  Bot,
  Gamepad2,
  Landmark,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { products } from "@/lib/constants";

const categoryIcons: Record<string, React.ReactNode> = {
  game: <Gamepad2 className="h-4 w-4" />,
  finance: <Landmark className="h-4 w-4" />,
};

const statusConfig: Record<string, { label: string; variant: "neon" | "cyan" | "success" }> = {
  live: { label: "Live", variant: "neon" },
  beta: { label: "Beta", variant: "cyan" },
  coming_soon: { label: "Coming Soon", variant: "success" },
};

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const status = statusConfig[product.status];

  return (
    <div
      className="product-card animate-fade-in-up"
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spotlight effect */}
      <div
        className={cn(
          "absolute -inset-0.5 opacity-0 blur-xl transition-opacity duration-500 rounded-xl",
          isHovered && "opacity-100"
        )}
        style={{
          background:
            "linear-gradient(135deg, hsl(142 76% 50% / 0.1), hsl(186 100% 50% / 0.1))",
        }}
      />

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
          <Button className="gap-2 flex-1" asChild>
            <Link href={product.cta.url} target="_blank">
              <Bot className="h-4 w-4" />
              {product.cta.text}
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href={product.github} target="_blank" aria-label={`${product.name} GitHub`}>
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" className="gap-1" asChild>
              <Link href={`#${product.slug}`}>
                Details
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge variant="cyan" className="gap-2 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              Ecosystem
            </Badge>
          </div>
          <h2 className="section-title mb-4">Our Products</h2>
          <p className="section-subtitle mx-auto">
            Two products. Two visions. One ecosystem. Built for the future of
            social finance and interactive entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

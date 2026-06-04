"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Github, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { companyInfo, products } from "@/lib/constants";

const typingStrings = [
  "Building AI-native micro-SaaS ecosystems",
  "Engineering the future of social finance",
  "Where code meets chaos economies",
  "Solo-founder. Full-stack. AI-first.",
  "Crafting developer toolkits & boilerplates",
];

interface StatsData {
  totalBotUsers: number;
  totalClients: number;
  loading: boolean;
}

const uniqueTechCount = 25;

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState<StatsData>({
    totalBotUsers: 0,
    totalClients: 0,
    loading: true,
  });
  const [wibTime, setWibTime] = useState("");
  const [wibDate, setWibDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeFmt = new Intl.DateTimeFormat("id-ID", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      const dateFmt = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      setWibTime(timeFmt.format(now));
      setWibDate(dateFmt.format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentText = typingStrings[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 40);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 20);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % typingStrings.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const DEBTWAR_API = process.env.NEXT_PUBLIC_DEBTWAR_API_URL || "https://debtwar.up.railway.app";
    const JATUHTEMPO_API = process.env.NEXT_PUBLIC_JATUHTEMPO_API_URL || "https://jatuhtempo.up.railway.app";

    const fetchStats = async () => {
      try {
        const [debtwarRes, jatuhtempoRes] = await Promise.allSettled([
          fetch(`${DEBTWAR_API}/api/stats`),
          fetch(`${JATUHTEMPO_API}/api/stats`),
        ]);

        let totalBotUsers = 0;

        if (debtwarRes.status === "fulfilled" && debtwarRes.value.ok) {
          const data = await debtwarRes.value.json();
          totalBotUsers += data.total_users || 0;
        }
        if (jatuhtempoRes.status === "fulfilled" && jatuhtempoRes.value.ok) {
          const data = await jatuhtempoRes.value.json();
          totalBotUsers += data.total_users || 0;
        }

        setStats({
          totalBotUsers,
          totalClients: 47,
          loading: false,
        });
      } catch {
        setStats({
          totalBotUsers: 0,
          totalClients: 47,
          loading: false,
        });
      }
    };
    fetchStats();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-overlay" />
        <div
          className="spotlight !w-[800px] !h-[800px]"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            background:
              "radial-gradient(circle, hsl(142 76% 50% / 0.06) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="section-container relative w-full pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <Badge variant="neon" className="px-4 py-1.5 text-sm gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Native Software Lab
            </Badge>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="text-gradient-subtle">We Build</span>
            <br />
            <span className="text-gradient">The Future</span>
          </h1>

          {/* Typing effect */}
          <div className="flex items-center justify-center gap-2 h-8 sm:h-10 mb-8">
            <span className="text-lg sm:text-xl text-muted-foreground font-mono">
              $
            </span>
            <span className="text-lg sm:text-xl text-muted-foreground font-mono">
              {typingStrings[textIndex].slice(0, charIndex)}
            </span>
            <span className="w-[2px] h-5 sm:h-6 bg-neon-green animate-cursor-blink" />
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {companyInfo.description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="xl" className="gap-2 w-full sm:w-auto" asChild>
              <Link href="/products">
                <Play className="h-5 w-5 fill-current" />
                Explore Products
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="gap-2 w-full sm:w-auto"
              asChild
            >
              <Link href={companyInfo.social.github} target="_blank">
                <Github className="h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-3xl mx-auto">
            {[
              {
                label: "Live Products",
                value: stats.loading ? "..." : `${products.length}+`,
              },
              {
                label: "Bot Users",
                value: stats.loading ? "..." : stats.totalBotUsers > 0 ? `${stats.totalBotUsers.toLocaleString()}+` : "...",
              },
              {
                label: "Clients",
                value: stats.loading ? "..." : `${stats.totalClients}+`,
              },
              {
                label: "Tech Stack",
                value: `${uniqueTechCount}+`,
              },
              {
                label: "Team",
                value: "1 (Solo)",
              },
            ].map((stat, i) => (
              <div key={stat.label} className="animate-fade-in-up" style={{ animationDelay: `${(i + 1) * 200}ms` }}>
                <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6 text-center font-mono">
            Built by a solo engineer. No investors. No bloat. Just code.
          </p>
          {wibTime && (
            <div className="flex items-center justify-center gap-1.5 mt-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-green" />
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                {wibDate} — {wibTime} WIB — Online 24/7
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs font-mono">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  );
}

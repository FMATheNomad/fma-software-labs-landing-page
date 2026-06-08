"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Send as TelegramIcon, Heart, Terminal } from "lucide-react";
import { companyInfo } from "@/lib/constants";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "All Products", href: "/products" },
      { label: "DebtWar", href: "/products#debtwar" },
      { label: "JatuhTempo", href: "/products#jatuhtempo" },
      { label: "Prompt Toolkits", href: "/products#prompts" },
    ],
  },
  {
    title: "Sections",
    links: [
      { label: "Terminal", href: "#terminal" },
      { label: "Philosophy", href: "#philosophy" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "GitHub", href: companyInfo.social.github, external: true },
      { label: "X (Twitter)", href: companyInfo.social.twitter, external: true },
      { label: "Telegram", href: companyInfo.social.telegram, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="section-container relative pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-1 ring-border">
                <Image
                   src="/assets/company-logo.webp"
                  alt={companyInfo.name}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <span className="font-semibold text-sm">{companyInfo.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {companyInfo.tagline}
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: companyInfo.social.github, label: "GitHub" },
                { icon: Twitter, href: companyInfo.social.twitter, label: "X (Twitter)" },
                { icon: TelegramIcon, href: companyInfo.social.telegram, label: "Telegram" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-3 w-3 text-red-500" />
            <span>by</span>
            <span className="font-mono text-neon-green/70">FMATheNomad</span>
            <Terminal className="h-3 w-3" />
          </div>
        </div>
      </div>
    </footer>
  );
}

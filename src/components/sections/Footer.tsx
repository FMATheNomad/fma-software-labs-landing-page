"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Github, Twitter, Send as TelegramIcon, Heart, Terminal } from "lucide-react";
import { companyInfo } from "@/lib/constants";

export function Footer() {
  const { t } = useTranslation();

  const footerLinks = [
    {
      title: t("footer.columns.products"),
      links: [
        { label: t("footer.links.allProducts"), href: "/products", external: false },
        { label: "DebtWar", href: "/products#debtwar", external: false },
        { label: "JatuhTempo", href: "/products#jatuhtempo", external: false },
        { label: t("footer.links.promptToolkits"), href: "/products#prompts", external: false },
      ],
    },
    {
      title: t("footer.columns.sections"),
      links: [
        { label: t("footer.links.terminal"), href: "#terminal", external: false },
        { label: t("footer.links.philosophy"), href: "#philosophy", external: false },
        { label: t("footer.links.contact"), href: "#contact", external: false },
      ],
    },
    {
      title: t("footer.columns.social"),
      links: [
        { label: "GitHub", href: companyInfo.social.github, external: true },
        { label: "X (Twitter)", href: companyInfo.social.twitter, external: true },
        { label: t("contact.telegram"), href: companyInfo.social.telegram, external: true },
      ],
    },
  ];

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
              {t("footer.tagline")}
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
            &copy; {new Date().getFullYear()} {companyInfo.name}. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{t("footer.builtWith")}</span>
            <Heart className="h-3 w-3 text-red-500" />
            <span>{t("footer.by")}</span>
            <span className="font-mono text-neon-green/70">FMATheNomad</span>
            <Terminal className="h-3 w-3" />
          </div>
        </div>
      </div>
    </footer>
  );
}

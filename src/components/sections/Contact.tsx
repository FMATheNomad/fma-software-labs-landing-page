"use client";

import {
  MessageSquare,
  Github,
  Twitter,
  Send as TelegramIcon,
  Mail,
  Construction,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { companyInfo } from "@/lib/constants";
import Link from "next/link";

export function ContactSection() {

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Badge variant="neon" className="gap-2 px-4 py-1.5">
                <MessageSquare className="h-3.5 w-3.5" />
                Get in Touch
              </Badge>
            </div>
            <h2 className="section-title mb-4">Let&apos;s Talk</h2>
            <p className="section-subtitle mx-auto">
              Have a project idea? Want to collaborate? Or just want to say hi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="p-4 rounded-xl border border-border/50 bg-card/30">
                <h3 className="font-semibold mb-3">Connect</h3>
                <div className="space-y-3">
                  {[
                    { icon: Mail, label: "Email", value: companyInfo.email, href: `mailto:${companyInfo.email}` },
                    { icon: Github, label: "GitHub", value: "@FMATheNomad", href: companyInfo.social.github },
                    { icon: Twitter, label: "X (Twitter)", value: "@fmathenomad", href: companyInfo.social.twitter },
                    { icon: TelegramIcon, label: "Telegram", value: "@fmathenomad", href: companyInfo.social.telegram },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs">{item.label}</div>
                          <div className="text-foreground">{item.value}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-border/50 bg-card/30">
                <h3 className="font-semibold mb-2">Availability</h3>
                <p className="text-sm text-muted-foreground">
                  Currently open to collaborations, consulting, and interesting
                  project opportunities. Remote-first, async-friendly.
                </p>
              </div>
            </div>

            {/* Contact form — placeholder */}
            <div className="lg:col-span-3">
              <div className="flex flex-col items-center justify-center gap-4 p-12 rounded-xl border border-border/50 bg-card/20 text-center h-full">
                <Construction className="h-10 w-10 text-muted-foreground/40" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Contact form in development
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-2">
                    Reach me directly at
                  </p>
                  <a
                    href="mailto:fmasoftwarelabs@gmail.com"
                    className="text-sm text-neon-green hover:underline mt-1 inline-block"
                  >
                    fmasoftwarelabs@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

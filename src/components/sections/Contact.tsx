import { MessageSquare, Github, Twitter, Send as TelegramIcon, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Badge variant="neon" className="gap-2 px-4 py-1.5">
              <MessageSquare className="h-3.5 w-3.5" />
              Contact
            </Badge>
          </div>
          <h2 className="section-title mb-4">Let's Connect</h2>
          <p className="section-subtitle mx-auto mb-10">
            Reach out directly — I reply within hours, not days.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="mailto:fmasoftwarelabs@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border/50 bg-card/30 hover:border-neon-green/30 transition-all text-sm font-medium"
            >
              <Mail className="h-4 w-4 text-neon-green" />
              fmasoftwarelabs@gmail.com
            </Link>
            <Link
              href="https://github.com/FMATheNomad"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-border/50 bg-card/30 hover:border-neon-green/30 transition-all text-sm"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="https://x.com/fmathenomad"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-border/50 bg-card/30 hover:border-neon-green/30 transition-all text-sm"
            >
              <Twitter className="h-4 w-4" />
              X / Twitter
            </Link>
            <Link
              href="https://t.me/fmathenomad"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-border/50 bg-card/30 hover:border-neon-green/30 transition-all text-sm"
            >
              <TelegramIcon className="h-4 w-4" />
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

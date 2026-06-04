"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Send,
  Loader2,
  CheckCircle2,
  MessageSquare,
  Github,
  Twitter,
  Send as TelegramIcon,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { companyInfo } from "@/lib/constants";
import Link from "next/link";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsSuccess(true);
      reset();
    } catch {
      // silent fail
    } finally {
      setIsSubmitting(false);
    }
  };

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

            {/* Contact form */}
            <div className="lg:col-span-3">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center gap-4 p-12 rounded-xl border border-neon-green/20 bg-neon-green/5 text-center h-full">
                  <CheckCircle2 className="h-12 w-12 text-neon-green" />
                  <div>
                    <p className="font-medium text-neon-green text-lg">
                      Message sent!
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We&apos;ll get back to you soon.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 p-6 rounded-xl border border-border/50 bg-card/30"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register("name")}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        {...register("email")}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="What's on your mind?"
                      rows={5}
                      {...register("message")}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gap-2"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

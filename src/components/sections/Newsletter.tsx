"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Send, CheckCircle2, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

export function NewsletterSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterForm) => {
    setIsSubmitting(true);
    try {
      await fetch("/api/newsletter", {
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
    <section id="newsletter" className="section-padding relative">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="section-container relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="cyan" className="gap-2 px-4 py-1.5">
              <Mail className="h-3.5 w-3.5" />
              Stay Updated
            </Badge>
          </div>

          <h2 className="section-title mb-4">Join the Lab</h2>
          <p className="section-subtitle mx-auto mb-8">
            Get early access to new products, feature updates, and behind-the-scenes
            engineering insights. No spam — just pure tech.
          </p>

          {isSuccess ? (
            <div className="flex flex-col items-center gap-3 p-8 rounded-xl border border-neon-green/20 bg-neon-green/5">
              <CheckCircle2 className="h-10 w-10 text-neon-green" />
              <p className="font-medium text-neon-green">
                You&apos;re in! Welcome to the lab.
              </p>
              <p className="text-sm text-muted-foreground">
                Check your inbox for a confirmation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                  aria-label="Email address"
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1 text-left">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <Button type="submit" disabled={isSubmitting} className="gap-2">
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

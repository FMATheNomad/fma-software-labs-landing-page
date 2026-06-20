"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { Menu, X, Sun, Moon, Terminal, Github, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { companyInfo } from "@/lib/constants";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#products", label: "Products" },
    { href: "/#contact", label: "Contact" },
  ];

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "id" : "en");
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass border-b border-border/50 shadow-lg shadow-black/5"
          : "bg-transparent"
      )}
    >
      <nav className="section-container flex items-center justify-between h-16 sm:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden ring-1 ring-border">
            <Image
               src="/assets/company-logo.webp"
              alt={companyInfo.name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <span className="font-semibold text-sm sm:text-base tracking-tight">
            {companyInfo.name}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="hidden sm:flex"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button variant="ghost" size="icon" asChild className="hidden sm:flex">
            <Link href={companyInfo.social.github} target="_blank" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLang}
            className="hidden sm:inline-flex gap-1 text-xs font-mono"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            {i18n.language === "en" ? "ID" : "EN"}
          </Button>

          <Button
            variant="terminal"
            size="sm"
            className="hidden sm:inline-flex gap-2"
            asChild
          >
            <Link href="#terminal">
              <Terminal className="h-3.5 w-3.5" />
              <span>Terminal</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 sm:top-20 z-40 md:hidden transition-all duration-300",
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
        <div className="relative section-container py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-2xl font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={companyInfo.social.github} target="_blank" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleLang} className="gap-1 text-xs font-mono">
              <Languages className="h-3.5 w-3.5" />
              {i18n.language === "en" ? "ID" : "EN"}
            </Button>
            <Button variant="terminal" size="sm" asChild>
              <Link href="#terminal" onClick={() => setIsMobileOpen(false)}>
                <Terminal className="h-3.5 w-3.5" />
                Terminal
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

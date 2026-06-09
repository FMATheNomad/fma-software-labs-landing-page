import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { TerminalProvider } from "@/components/TerminalProvider";
import { I18nProvider } from "@/components/I18nProvider";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FMA Software Labs — AI-Native Micro-SaaS & Micro-GaaS Ecosystem",
    template: "%s | FMA Software Labs",
  },
  description:
    "Building AI-native micro-SaaS and micro-GaaS ecosystems. Founded by a solo engineer creating futuristic digital products: DebtWar (social chaos economy MMO) and JatuhTempo (AI-powered debt management).",
  keywords: [
    "FMA Software Labs",
    "DebtWar",
    "JatuhTempo",
    "AI-native",
    "micro-SaaS",
    "micro-GaaS",
    "Telegram bot",
    "debt management",
    "social economy game",
    "FMATheNomad",
  ],
  authors: [{ name: "FMATheNomad", url: "https://github.com/FMATheNomad" }],
  creator: "FMA Software Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fmasoftwarelabs.com",
    siteName: "FMA Software Labs",
    title: "FMA Software Labs — AI-Native Micro-SaaS & Micro-GaaS Ecosystem",
    description:
      "Building AI-native micro-SaaS and micro-GaaS ecosystems. DebtWar, JatuhTempo, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FMA Software Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FMA Software Labs",
    description:
      "Building AI-native micro-SaaS and micro-GaaS ecosystems.",
    creator: "@fmathenomad",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://fmasoftwarelabs.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/logo192.png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="noise-bg" />
          <I18nProvider>
          <TerminalProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </TerminalProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

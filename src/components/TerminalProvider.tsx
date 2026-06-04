"use client";

import { useState, useEffect, useCallback } from "react";
import { Terminal } from "lucide-react";
import { TerminalSplash } from "./TerminalSplash";

export function TerminalProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState<boolean | null>(null);

  const close = useCallback(() => {
    setShow(false);
    sessionStorage.setItem("fma-terminal-dismissed", "true");
  }, []);

  const open = useCallback(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    const d = sessionStorage.getItem("fma-terminal-dismissed");
    setShow(!d);
  }, []);

  useEffect(() => {
    const h = () => open();
    window.addEventListener("open-terminal", h);
    return () => window.removeEventListener("open-terminal", h);
  }, [open]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        setShow((s) => !s);
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  if (show === null) return <>{children}</>;

  return (
    <>
      {show && <TerminalSplash onEnter={close} onSkip={close} />}

      <button
        onClick={open}
        className="fixed bottom-4 right-4 z-40 w-9 h-9 rounded-lg border border-border/50 bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-neon-green hover:border-neon-green/50 transition-all duration-300"
        aria-label="Open terminal"
      >
        <Terminal className="h-4 w-4" />
      </button>

      {children}
    </>
  );
}

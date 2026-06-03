"use client";

import { useState, useEffect, useCallback } from "react";
import { Terminal } from "lucide-react";
import { TerminalSplash } from "./TerminalSplash";

export function TerminalProvider({ children }: { children: React.ReactNode }) {
  const [showTerminal, setShowTerminal] = useState(true);
  const [initialized, setInitialized] = useState(false);

  const openTerminal = useCallback(() => {
    setShowTerminal(true);
  }, []);

  const closeTerminal = useCallback(() => {
    setShowTerminal(false);
  }, []);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized]);

  useEffect(() => {
    const handler = () => openTerminal();
    window.addEventListener("open-terminal", handler);
    return () => window.removeEventListener("open-terminal", handler);
  }, [openTerminal]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        if (showTerminal) {
          closeTerminal();
        } else {
          openTerminal();
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showTerminal, openTerminal, closeTerminal]);

  return (
    <>
      {initialized && showTerminal && (
        <TerminalSplash onEnter={closeTerminal} />
      )}

      {initialized && !showTerminal && (
        <button
          onClick={openTerminal}
          className="fixed bottom-4 right-4 z-40 w-9 h-9 rounded-lg border border-border/50 bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-neon-green hover:border-neon-green/50 transition-all duration-300"
          aria-label="Open terminal"
          title="Open terminal (fma terminal)"
        >
          <Terminal className="h-4 w-4" />
        </button>
      )}

      {children}
    </>
  );
}

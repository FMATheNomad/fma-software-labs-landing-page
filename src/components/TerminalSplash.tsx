"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Terminal, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BootLine {
  type: "ok" | "info";
  message: string;
}

const bootLines: BootLine[] = [
  { type: "ok", message: "Kernel loaded — FMA Labs v3.0.0" },
  { type: "info", message: "Initializing product ecosystem..." },
  { type: "ok", message: "Mounting JatuhTempo — AI Debt Management" },
  { type: "ok", message: "Mounting DebtWar — Social Economy MMO" },
  { type: "info", message: "Loading digital catalog — 5 prompt toolkits" },
  { type: "ok", message: "System ready. Welcome." },
];

function BootAnimation({ onDone }: { onDone: () => void }) {
  const [line, setLine] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t1 = setInterval(() => {
      setLine((p) => {
        if (p >= bootLines.length - 1) {
          clearInterval(t1);
          return p;
        }
        return p + 1;
      });
    }, 400);
    return () => clearInterval(t1);
  }, []);

  useEffect(() => {
    const t2 = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(t2);
          return 100;
        }
        return p + 3;
      });
    }, 60);
    return () => clearInterval(t2);
  }, []);

  useEffect(() => {
    if (progress >= 100 && line >= bootLines.length - 1) {
      const t = setTimeout(onDone, 500);
      return () => clearTimeout(t);
    }
  }, [progress, line, onDone]);

  return (
    <div className="space-y-2 font-mono text-xs sm:text-sm">
      <pre className="text-neon-green/80 leading-tight mb-3 text-[10px] sm:text-xs">
{`╔══════════════════════╗
║  FMA SOFTWARE LABS  ║
║  AI-Native Ecosystem║
╚══════════════════════╝`}
      </pre>

      <div className="w-full h-1 bg-muted rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-neon-green transition-all duration-75 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {bootLines.slice(0, line + 1).map((b, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className={b.type === "ok" ? "text-neon-green" : "text-blue-400"}>
            {b.type === "ok" ? "[OK]" : "[..]"}
          </span>
          <span className="text-muted-foreground">{b.message}</span>
        </div>
      ))}
    </div>
  );
}

export function TerminalSplash({ onEnter, onSkip }: { onEnter: () => void; onSkip: () => void }) {
  const [phase, setPhase] = useState<"input" | "booting">("input");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, [phase]);

  const handleBootDone = useCallback(() => {
    const el = document.querySelector("[data-terminal-overlay]");
    if (el) {
      el.classList.add("opacity-0", "scale-95");
      setTimeout(onEnter, 300);
    } else {
      onEnter();
    }
  }, [onEnter]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const cmd = input.trim().toLowerCase();
    if (cmd === "fma run") {
      setPhase("booting");
    } else {
      setError(`command not found: ${input.trim()}. Try: fma run`);
      setInput("");
    }
  };

  return (
    <div
      data-terminal-overlay
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300 p-4"
    >
      <div className="w-full max-w-lg rounded-xl border border-border/50 bg-card shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <Terminal className="h-3.5 w-3.5" />
            fma-terminal — bash
          </div>
          <button onClick={onSkip} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 min-h-[250px]">
          {phase === "input" && (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                Welcome to FMA Software Labs. Type the command below to enter.
              </p>

              <form onSubmit={handleSubmit} className="flex items-center gap-2 font-mono text-sm">
                <span className="text-neon-green shrink-0">fma@labs:~$</span>
                <input
                  ref={ref}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none border-none text-foreground font-mono text-sm"
                  placeholder="type fma run"
                  autoFocus
                />
              </form>

              {error && <p className="text-red-400 font-mono text-xs animate-fade-in">{error}</p>}

              <p className="text-[10px] text-muted-foreground/50 font-mono border-t border-border/20 pt-3">
                Available: <span className="text-neon-green">fma run</span> &middot; or close to skip
              </p>
            </div>
          )}

          {phase === "booting" && <BootAnimation onDone={handleBootDone} />}
        </div>
      </div>
    </div>
  );
}

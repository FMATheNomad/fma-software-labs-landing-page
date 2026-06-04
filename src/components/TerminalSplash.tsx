"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

type Phase = "terminal" | "booting" | "booted";

interface BootLine {
  type: "ok" | "info" | "warn";
  message: string;
}

const bootLines: BootLine[] = [
  { type: "ok", message: "Kernel loaded — FMA Labs v3.0.0" },
  { type: "info", message: "Initializing product ecosystem..." },
  { type: "ok", message: "Mounting JatuhTempo — AI Debt Management" },
  { type: "ok", message: "Mounting DebtWar — Social Economy MMO" },
  { type: "info", message: "Loading digital catalog — 5 prompt toolkits" },
  { type: "info", message: "Starting web interface..." },
  { type: "ok", message: "System ready. Welcome to FMA Software Labs." },
];

const ascii = [
  "╔══════════════════════════╗",
  "║   FMA SOFTWARE LABS     ║",
  "║   AI-Native Ecosystem   ║",
  "╚══════════════════════════╝",
];

function BootAnimation({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [asciiLine, setAsciiLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [asciiDone, setAsciiDone] = useState(false);

  useEffect(() => {
    const asciiTimer = setInterval(() => {
      setAsciiLine((prev) => {
        if (prev >= ascii.length - 1) {
          clearInterval(asciiTimer);
          setAsciiDone(true);
          return prev;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(asciiTimer);
  }, []);

  useEffect(() => {
    if (!asciiDone) return;
    const lineTimer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= bootLines.length) {
          clearInterval(lineTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 350);
    return () => clearInterval(lineTimer);
  }, [asciiDone]);

  useEffect(() => {
    if (!asciiDone) return;
    const progTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(progTimer);
  }, [asciiDone]);

  useEffect(() => {
    if (progress >= 100 && visibleLines >= bootLines.length) {
      const timer = setTimeout(onDone, 600);
      return () => clearTimeout(timer);
    }
  }, [progress, visibleLines, onDone]);

  return (
    <div className="space-y-1">
      <pre className="text-xs sm:text-sm leading-tight text-neon-green/80 font-mono mb-4 whitespace-pre">
        {ascii.slice(0, asciiLine + 1).join("\n")}
      </pre>

      {asciiDone && (
        <>
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-neon-green transition-all duration-75 ease-linear rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="space-y-1">
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                className="flex items-start gap-2 font-mono text-xs sm:text-sm animate-fade-in"
              >
                <span
                  className={cn(
                    "shrink-0",
                    line.type === "ok" && "text-neon-green",
                    line.type === "info" && "text-blue-400",
                    line.type === "warn" && "text-yellow-400"
                  )}
                >
                  {line.type === "ok" && "[  OK  ]"}
                  {line.type === "info" && "[ INFO ]"}
                  {line.type === "warn" && "[ WARN ]"}
                </span>
                <span className="text-muted-foreground">{line.message}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function TerminalSplash({ onEnter }: { onEnter: () => void }) {
  const [phase, setPhase] = useState<Phase>("terminal");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isGlitching, setIsGlitching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBootDone = useCallback(() => {
    setIsGlitching(true);
    setTimeout(() => {
      setIsGlitching(false);
      onEnter();
    }, 800);
  }, [onEnter]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setError("");

    if (cmd === "fma run" || cmd === "fma run ") {
      setPhase("booting");
    } else if (cmd === "fma terminal") {
      // already in terminal
    } else {
      setError(
        `command not found: ${input.trim()}. Try: fma run — to launch the experience`
      );
      setInput("");
    }
  };

  useEffect(() => {
    if (phase === "terminal" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [phase]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] bg-black flex flex-col",
        isGlitching && "animate-glitch"
      )}
    >
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-2xl">
          <div className="terminal-window border border-border/50">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500/80" />
              <div className="terminal-dot bg-yellow-500/80" />
              <div className="terminal-dot bg-neon-green/80" />
              <div className="flex items-center gap-2 ml-4 text-xs text-muted-foreground font-mono">
                <Terminal className="h-3.5 w-3.5" />
                fma-terminal — bash
              </div>
            </div>

            <div className="p-4 sm:p-6 min-h-[300px] sm:min-h-[400px]">
              {phase === "terminal" && (
                <div className="space-y-4">
                  <div className="font-mono text-xs sm:text-sm text-muted-foreground space-y-1">
                    <p>Welcome to FMA Software Labs.</p>
                    <p>Type the command below to enter.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex items-center gap-2 font-mono text-sm sm:text-base">
                    <span className="text-neon-green shrink-0">fma@labs:~$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="flex-1 bg-transparent outline-none border-none text-foreground font-mono text-sm sm:text-base"
                      placeholder="type here..."
                      autoFocus
                    />
                  </form>

                  {error && (
                    <p className="text-red-400 font-mono text-xs sm:text-sm animate-fade-in">
                      {error}
                    </p>
                  )}

                  <div className="pt-4 border-t border-border/20">
                    <p className="font-mono text-[10px] sm:text-xs text-muted-foreground">
                      Available commands: <span className="text-neon-green">fma run</span>
                    </p>
                  </div>
                </div>
              )}

              {phase === "booting" && (
                <BootAnimation onDone={handleBootDone} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/40 font-mono">
        FMA Labs Terminal — press Enter to submit
      </div>
    </div>
  );
}

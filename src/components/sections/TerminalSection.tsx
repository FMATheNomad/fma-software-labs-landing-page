"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Terminal as TerminalIcon } from "lucide-react";
import { terminalLogs } from "@/lib/constants";

interface LogEntry {
  type: "info" | "success" | "prompt" | "cursor";
  message: string;
  delay: number;
}

function LogLine({ entry, visible }: { entry: LogEntry; visible: boolean }) {
  if (!visible) return null;

  const prefixMap: Record<string, React.ReactNode> = {
    info: <span className="text-blue-400">[INFO]</span>,
    success: <span className="text-neon-green">[ OK ]</span>,
    prompt: null,
    cursor: null,
  };

  return (
    <div className="flex items-start gap-2 font-mono text-sm leading-relaxed">
      {entry.type === "prompt" ? (
        <span className="text-neon-green">{entry.message}</span>
      ) : entry.type === "cursor" ? (
        <span className="text-neon-green animate-cursor-blink">&#9608;</span>
      ) : (
        <>
          <span className="shrink-0">{prefixMap[entry.type]}</span>
          <span
            className={
              entry.type === "success"
                ? "text-neon-green/90"
                : "text-muted-foreground"
            }
          >
            {entry.message}
          </span>
        </>
      )}
    </div>
  );
}

export function TerminalSection() {
  const { t } = useTranslation();
  const [visibleLogs, setVisibleLogs] = useState<number>(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    terminalLogs.forEach((log) => {
      const timer = setTimeout(() => {
        setVisibleLogs((prev) => prev + 1);
      }, log.delay);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  const restart = () => {
    setVisibleLogs(0);
  };

  return (
    <section id="terminal" className="section-padding relative">
      <div className="absolute inset-0 grid-overlay opacity-50" />

      <div className="section-container relative">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">{t("terminal.title")}</h2>
          <p className="section-subtitle mx-auto">{t("terminal.desc")}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500/80" />
              <div className="terminal-dot bg-yellow-500/80" />
              <div className="terminal-dot bg-neon-green/80" />
              <div className="flex items-center gap-2 ml-4 text-xs text-muted-foreground font-mono">
                <TerminalIcon className="h-3.5 w-3.5" />
                fma-boot-sequence — bash
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-1.5 min-h-[320px]">
              {(terminalLogs as LogEntry[]).map((log, i) => (
                <LogLine key={i} entry={log} visible={i < visibleLogs} />
              ))}
              {visibleLogs >= terminalLogs.length && (
                <button
                  onClick={restart}
                  className="mt-4 text-xs text-muted-foreground hover:text-neon-green font-mono transition-colors"
                >
                  $ ./reboot
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";

interface DayData {
  date: string;
  level: number;
}

const levelColors: Record<number, string> = {
  0: "rgba(255,255,255,0.04)",
  1: "rgba(0,255,65,0.15)",
  2: "rgba(0,255,65,0.4)",
  3: "rgba(0,255,65,0.65)",
  4: "#00ff41",
};

function chunkWeeks(days: DayData[]): DayData[][] {
  const weeks: DayData[][] = [];
  let current: DayData[] = [];
  for (const day of days) {
    current.push(day);
    if (current.length === 7) {
      weeks.push(current);
      current = [];
    }
  }
  if (current.length > 0) weeks.push(current);
  return weeks;
}

export function GitHubContributions() {
  const [data, setData] = useState<{
    totalContributions: number;
    days: DayData[];
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/github-contributions");
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch {
        // silent
      }
    };
    fetchData();
  }, []);

  if (!data || data.days.length === 0) return null;

  const weeks = chunkWeeks(data.days);

  return (
    <section className="section-padding pb-0 relative">
      <div className="section-container">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Badge variant="neon" className="gap-2 px-4 py-1.5">
              <Code2 className="h-3.5 w-3.5" />
              Open Source
            </Badge>
          </div>
          <h2 className="section-title mb-2">GitHub Activity</h2>
          <p className="text-lg text-muted-foreground font-mono">
            {data.totalContributions.toLocaleString()} contributions in the last year
          </p>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="flex gap-[3px] min-w-fit justify-center">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) => (
                  <div
                    key={di}
                    className="group relative w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] rounded-sm cursor-default"
                    style={{ backgroundColor: levelColors[day.level] || levelColors[0] }}
                  >
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-foreground text-background text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
                      {day.date}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4 mb-8 text-[10px] text-muted-foreground">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <div
              key={l}
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: levelColors[l], border: "1px solid rgba(255,255,255,0.1)" }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </section>
  );
}

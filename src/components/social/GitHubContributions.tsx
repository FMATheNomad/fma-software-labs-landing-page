"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";

interface DayData {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const levelColors: Record<number, string> = {
  0: "bg-muted/30",
  1: "bg-neon-green/20",
  2: "bg-neon-green/40",
  3: "bg-neon-green/60",
  4: "bg-neon-green",
};

function Tooltip({ date, count }: { date: string; count: number }) {
  return (
    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-foreground text-background text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
      {count} contribution{count !== 1 ? "s" : ""} on {date}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
    </div>
  );
}

export function GitHubContributions() {
  const [data, setData] = useState<{
    totalContributions: number;
    days: DayData[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState<{
    repos: number;
    reviews: string;
    issues: string;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [graphRes, ghRes] = await Promise.allSettled([
          fetch("/api/github-contributions"),
          fetch("https://api.github.com/users/FMATheNomad/repos?per_page=100&sort=pushed"),
        ]);

        if (graphRes.status === "fulfilled") {
          const json = await graphRes.value.json();
          setData(json);
        }

        if (ghRes.status === "fulfilled" && ghRes.value.ok) {
          const repos = await ghRes.value.json();
          setActivity({
            repos: repos.length,
            reviews: "6%",
            issues: "1%",
          });
        }
      } catch {
        // silent
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return null;

  const weeks: DayData[][] = [];
  if (data?.days) {
    for (let i = 0; i < data.days.length; i += 7) {
      weeks.push(data.days.slice(i, i + 7));
    }
  }

  return (
    <section className="section-padding pb-0 relative">
      <div className="section-container">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Badge variant="neon" className="gap-2 px-4 py-1.5">
              <Code2 className="h-3.5 w-3.5" />
              Open Source
            </Badge>
          </div>
          <h2 className="section-title mb-2">GitHub Activity</h2>
          {data && (
            <p className="text-lg text-muted-foreground font-mono">
              {data.totalContributions.toLocaleString()} contributions in the last year
            </p>
          )}
        </div>

        {weeks.length > 0 && (
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-[3px] min-w-fit">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day, di) => (
                    <div
                      key={di}
                      className="group relative w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] rounded-sm cursor-default transition-colors"
                      style={{ backgroundColor: levelColors[day.level] || levelColors[0] }}
                    >
                      <Tooltip date={day.date} count={day.count} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-center gap-2 mt-4 mb-8 text-[10px] text-muted-foreground">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <div
              key={l}
              className="w-3 h-3 rounded-sm border border-border/30"
              style={{ backgroundColor: levelColors[l] }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </section>
  );
}

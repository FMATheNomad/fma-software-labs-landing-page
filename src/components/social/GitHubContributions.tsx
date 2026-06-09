"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";

interface DayData {
  date: string;
  level: number;
}

const levelColors: Record<number, string> = {
  0: "rgba(128,128,128,0.08)",
  1: "rgba(0,200,83,0.18)",
  2: "rgba(0,200,83,0.4)",
  3: "rgba(0,200,83,0.65)",
  4: "rgba(0,200,83,0.92)",
};

const dayLabels = ["Sun", "Mon", "", "Wed", "", "Fri", "Sat"];

export function GitHubContributions() {
  const { t } = useTranslation();
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

  // GitHub sends data row-by-row (all Sundays, all Mondays, etc.)
  // so we have 7 rows. Transpose to columns (weeks).
  const totalDays = data.days.length;
  const rows = 7;
  const cols = Math.ceil(totalDays / rows);

  const grid: string[][] = [];
  for (let col = 0; col < cols; col++) {
    const column: string[] = [];
    for (let row = 0; row < rows; row++) {
      const idx = row * cols + col;
      column.push(idx < totalDays ? levelColors[data.days[idx].level] || levelColors[0] : levelColors[0]);
    }
    grid.push(column);
  }

  return (
    <section className="section-padding pb-0 relative">
      <div className="section-container">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Badge variant="neon" className="gap-2 px-4 py-1.5">
              <Code2 className="h-3.5 w-3.5" />
              {t("github.badge")}
            </Badge>
          </div>
          <h2 className="section-title mb-2">{t("github.title")}</h2>
          <p className="text-lg text-muted-foreground font-mono">
            {data.totalContributions.toLocaleString()} contributions in the last year
          </p>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="flex gap-[3px] min-w-fit justify-center" style={{}}>
            {grid.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-[3px]">
                {col.map((color, ri) => (
                  <div
                    key={ri}
                    className="w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] rounded-sm"
                    style={{ backgroundColor: color }}
                  />
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
              style={{ backgroundColor: levelColors[l] }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </section>
  );
}

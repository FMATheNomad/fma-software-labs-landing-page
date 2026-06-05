import { NextResponse } from "next/server";

interface DayData {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface WeekData {
  days: DayData[];
}

export async function GET() {
  try {
    const res = await fetch("https://github.com/users/FMATheNomad/contributions", {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; FMAWebsite/1.0)",
      },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch" }, { status: 502 });
    }

    const html = await res.text();

    const tooltipMatches = html.matchAll(
      /<tool-tip[^>]*data-type="date"[^>]*>([^<]*)<[\s\S]*?<span[^>]*>(\d+)\s*contribution/gi
    );

    let totalContributions = 0;
    const totalMatch = html.match(
      /(\d[\d,]*)\s*contribution/i
    );
    if (totalMatch) {
      totalContributions = parseInt(totalMatch[1].replace(/,/g, ""));
    }

    const rects: DayData[] = [];
    const rectRegex = /<rect[^>]*data-date="([^"]*)"[^>]*data-level="(\d+)"[^>]*\/>/g;
    let match;
    while ((match = rectRegex.exec(html)) !== null) {
      rects.push({
        date: match[1],
        count: 0,
        level: parseInt(match[2]) as 0 | 1 | 2 | 3 | 4,
      });
    }

    return NextResponse.json({
      totalContributions,
      days: rects,
    });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

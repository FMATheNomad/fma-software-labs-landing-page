import { NextResponse } from "next/server";

export const revalidate = 3600;

interface DayData {
  date: string;
  level: number;
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

    const totalMatch = html.match(
      /(\d[\d,]*)\s*contribution/i
    );
    const totalContributions = totalMatch
      ? parseInt(totalMatch[1].replace(/,/g, ""))
      : 0;

    const days: DayData[] = [];
    const tdRegex =
      /<td[^>]*data-date="([^"]*)"[^>]*data-level="([^"]*)"[^>]*>/g;
    let match;
    while ((match = tdRegex.exec(html)) !== null) {
      days.push({
        date: match[1],
        level: parseInt(match[2]),
      });
    }

    return NextResponse.json({
      totalContributions,
      days,
    });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

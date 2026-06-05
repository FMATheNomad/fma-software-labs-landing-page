import { NextResponse } from "next/server";

export async function GET() {
  const username = process.env.INSTAGRAM_USERNAME || "fmathenomad";

  try {
    const res = await fetch(`https://www.instagram.com/${username}/`, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });

    if (!res.ok) {
      return fallback();
    }

    const html = await res.text();
    const match = html.match(/<script[^>]*>window\.__INITIAL_STATE__\s*=\s*({.*?});<\/script>/);

    if (!match) {
      return fallback();
    }

    const data = JSON.parse(match[1]);
    const user = data?.settings?.user?.username || data?.profile?.user || data?.user;
    const bioMusic = user?.bio_links?.find((l: any) => l?.title?.includes("♪") || l?.title?.includes("♫"));

    const bioText = user?.biography || "";
    const musicMatch = bioText.match(/🎵\s*([^\n]+)/) || bioText.match(/♫\s*([^\n]+)/) || bioText.match(/♪\s*([^\n]+)/);

    return NextResponse.json({
      song: bioMusic?.title || musicMatch?.[1] || null,
      artist: null,
      source: "instagram",
      updatedAt: new Date().toISOString(),
    });
  } catch {
    return fallback();
  }
}

function fallback() {
  return NextResponse.json({
    song: null,
    artist: null,
    source: "unavailable",
    updatedAt: new Date().toISOString(),
  });
}

"use client";

import { useEffect, useState } from "react";

export function InstagramMusic() {
  const [data, setData] = useState<{
    song: string | null;
    artist: string | null;
    source: string;
  } | null>(null);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const res = await fetch("/api/instagram-music");
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch {
        // silent
      }
    };
    fetchMusic();
  }, []);

  if (!data?.song) return null;

  const isAvailable = data.source !== "unavailable";

  return (
    <div className="inline-flex items-center gap-2 text-xs text-muted-foreground font-mono">
      <span className="animate-pulse">🎵</span>
      <span>{data.song}</span>
      {!isAvailable && (
        <span className="text-[10px] text-muted-foreground/50">(auto-update pending)</span>
      )}
    </div>
  );
}

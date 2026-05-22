import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // In production, use Drizzle:
    // import { db } from "@/lib/db";
    // import { newsletterSubscribers } from "@/lib/db/schema";
    // await db.insert(newsletterSubscribers).values({ email });

    return NextResponse.json(
      { message: "Subscribed successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
